# Data Manupulation
import numpy as np
import pandas as pd
# Techinical Indicators
import talib as ta
# Plotting graphs
import matplotlib.pyplot as plt
# Machine learning
from sklearn.linear_model import LogisticRegression
from sklearn import metrics
from sklearn.model_selection import cross_val_score
# Data fetching
from pandas_datareader import data as pdr
import yfinance as yf

yf.pdr_override()

df = pdr.get_data_yahoo('^SP500TR', '2011-01-01', '2019-01-01')
df = df.dropna() #dropping all the observations containing NAN values
df = df.iloc[:,:4] #selects all the rows, but only 4 first columns
df.head()

# 13-days moving average
df['S_13'] = df['Close'].rolling(window=13).mean()

df['Corr'] = df['Close'].rolling(window=13).corr(df['S_13'])

#RSI
df['RSI'] = ta.RSI(np.array(df['Close']), timeperiod =13)

# The "shift" here indicates that we are subtracting the "open" of the actual day to the "close" of the previous day
df['Open-Close'] = df['Open'] - df['Close'].shift(1)
df['Open-Open'] = df['Open'] - df['Open'].shift(1)
df = df.dropna()
X = df.iloc[:,:9]


y = np.where (df['Close'].shift(-1) > df['Close'],1,-1)
# We split the data set
# To do this we declare the variable "split" which is going to be an integer

split = int(0.7*len(df))

X_train, X_test, y_train, y_test = X[:split], X[split:], y[:split], y[split:]

#Instantiate The Logistic Regression in Python
model = LogisticRegression(max_iter = 100000000)
#model.n_iter_ = 100000000
model = model.fit (X_train,y_train)

coef = model.coef_

# The zip()  function creates the objects and that can be used to
# produce single item at a time. This function can create pandans DataFrames
# by merging two lists.
pd.DataFrame((zip(X.columns, np.transpose(model.coef_))), columns = ['Variable', 'Coef'])

#newdf = X_train
#newdf['up_down'] = pd.Series(y_train, index=newdf.index)

#from statsmodels.formula.api import logit

#newdf['up_down']= newdf['up_down'].replace(-1, 0)
#We replace all the "-1" by "0", otherwise we'll get the following error message with this library since we need either a 0 or a 1 as dependent variables : "ValueError: endog must be in the unit interval".

#model=logit("up_down ~ Open + High + Low + Close + S_13 + Corr + RSI + Open-Close + Open-Open", data = newdf)
#results = model.fit()
#print(results.summary())

#Calculate Class Probabilities
probability = model.predict_proba(X_test)
probability

#Make predictions using the testing set
predicted = model.predict(X_test)

df_probability = pd.DataFrame(probability, columns= ['0','1'])
df_predicted = pd.DataFrame(predicted, columns=['Predicted'])
df_probability_predicted = (pd.concat([df_probability, df_predicted],
axis=1, sort=False))
df_probability_predicted['Up/Down'] = np.where(df_probability_predicted['Predicted'] == 1,'Up','Down')
Date = X_test.index
df_probability_predicted.set_index([Date])


metrics.confusion_matrix(y_test, predicted)

# Here I'll just create a data frame for it to be more clear

a = metrics.confusion_matrix(y_test, predicted)
b = pd.Series(['Actual : -1', 'Actual : 1'])
confusion_matrix = pd.DataFrame(a, columns=['Predicted : -1', 'Predicted : 1'])
confusion_matrix = confusion_matrix.set_index([b])

model.score(X_test,y_test)

cross_val = cross_val_score(LogisticRegression(), X, y, scoring='accuracy', cv=10)
cross_val
cross_val.mean()

df['Predicted_Signal'] = model.predict(X)
df['Original_SP_returns'] = np.log(df['Close']/df['Close'].shift(1))
Cumulative_originalSP500_returns = np.cumsum(df[split:]['Original_SP_returns'])
df['Strategy_Returns'] = df['Original_SP_returns']* df['Predicted_Signal'].shift(1)
Cumulative_Strategy_returns = np.cumsum(df[split:]['Strategy_Returns'])


newdf = pd.concat([Cumulative_originalSP500_returns, Cumulative_Strategy_returns], axis=1)


#Graph plotting
import seaborn as sns; sns.set()
import matplotlib.pyplot as plt

plt.figure(figsize=(25, 13))
sns.set(font_scale=1.4)
ax = sns.lineplot(data=newdf)
plt.setp(ax.get_legend().get_texts(), fontsize='19')
plt.savefig('returns2.png', dpi=300)
