/*  Holds all of the module content, quiz content, and thumbnails.

    Title - module number that will appear between the next and previous module buttons
    Image - thumbnail of the module that will appear on the modules page
    Pages - array of pages that belong in a module; the format of a page is ["Title of Page", `Content`]; adding or removing an item from the pages array also adds or removes page from the module
    QuizPool - array of quiz questions and answers; the format of a quiz item is ["Question", "Correct answer", "Option B", "Option C", "Option D"]; in order to update the quizzes, go to the quizzes folder under components to edit
    QuizSize - the number of elements in a quiz
    ModuleImg - array of images sourced from public/images folder; the order of the images should follow the pages you want the images to correspond to; should have the same number of images as pages
    Description - short description of the module that will appear when you hover over the thumbnail of a module in the modules page
*/

export const modulesData = [
    {
        Title: "MODULE 1",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Introduction to the Stock Market", 
            `A stock market is a place where individuals come together to buy and sell stocks. Stocks are an investment in a company, and it grants the buyer a small ownership of a company which is otherwise known as a share. As the shareholder, the buyer is then entitled to the benefits of a company’s success. If you invest stock in a company and the company performs very well, your stock will perform very well.`],

            ["Introduction to the Stock Market", 
            `There is also limited amount of stock per company. So, a company that is doing really well may have lots of people go and purchase stock from it. Much like other economic goods, the stocks follow the law of supply and demand. This means that when the demand for stocks increases and the supply decreases, the price of stocks increases. Additionally, when the demand for stocks decreases and the supply increases, the price of stocks decreases.`],

            ["Introduction to the Stock Market", 
            `All of the stocks and the changes in prices, supply, and demand are tracked in exchanges on the stock market. Some of the biggest stock exchanges in the world are the New York Stock Exchange (NYSE) and the Nasdaq. These particular exchanges track the stocks of many of the world’s leading companies, such as Google, Apple, and Amazon. 
            
            Additionally, the overall performance of a group of stocks is tracked by a market index. The indexes indicate whether the value of the stocks has been increasing or decreasing compared to the previous day. This information from the indexes assists individuals in determining whether to buy or sell stocks. Some of the biggest indexes include the Dow Jones Industrial Average (DJIA) and the S&P 500.`],

            ["Introduction to the Stock Market", 
            `Another thing to consider is that stock prices change over time. The goal of investing in a company is to gain more money back. Some companies may perform well, and you can reap its benefits through the stocks you bought. However, other companies may not perform so well and might even go bankrupt. In the case that you had bought shares of the company, this means that you may lose some or all of your money that you invested in the company. 
            
            So, a better way to reduce this risk may be to buy stocks from multiple companies instead of going all-in on one. This way, even if a company you invested in does poorly, you will have other companies to rely on and you will not lose all of your investments.`],

            ["Introduction to the Stock Market", 
            `For example, an instance of the worst-case scenario that could occur when investing all of your money in one company is a stock market crash. A crash is when the value of a particular stock or all stocks drop very sharply. This can happen for various reasons, and there is never a clear-cut answer. 
            
            There are people in the world that control 50%, 80%, or more of the shares from a single company. In one instance, if they were to sell all of their stocks one day, the supply of the stocks would become astronomically high. However, the demand for the stocks would not have changed. As a result, the price of that stock will plunge, and selling the stock at that point might lead to losing more money than you invested.`],
        ],
        QuizPool: [
            ["What is a stock?",
                "An investment that grants the buyer a share of a company",
                "A place to trade shares of companies",
                "The money you get back from an investment",
                "A value that tracks the performance of the stock market"],
            ["What happens to the price of a stock when supply is high and demand is low?",
                "The price drops",
                "The price stays the same",
                "The price rises",
                "The price goes to 0"],
            ["What is the risk in investing all of your money into buying stocks from one company?",
                "You could lose all of your money if the company goes bankrupt",
                "You gain a lot of money",
                "It is easier to trade stocks with other buyers",
                "The company you invested in will always perform well"],
        ],
        QuizSize: 3,
        ModuleImg: 
            ["stock-market.jpeg", "demand.jpeg", "stock.jpg", "calculate.jpg", "crash.jpeg"],
        Description: "Introduction to the Stock Market"
    },

    {
        Title: "MODULE 2",
        Image: "module-thumbnail.jpeg",
        Pages: [
            
            ["Stock Market Terminology", 
            `Now that we have discussed the basics of the stock market, we will cover important terminologies related to the stock market. You may come across many of these terms in the future if you decide to become involved in the trading of stocks. Additionally, several of these terms may be referred to in later modules when we learn how to use machine learning to assist us in the matters of the stock market.`],

            ["Stock Market Terminology", 
            `Dividends are portions of a company’s profits that are paid to their shareholders. In other words, dividends are the income an individual would receive for owning the stock of a company. The amount of money gain from a dividend depends on the company’s earnings. The higher the earnings of a company, the higher the dividends that their shareholders receive. This is one of the key factors in determining which companies to buy stocks from. However, it is also important to realize that not all companies pay dividends to their shareholders.`],
            
            ["Stock Market Terminology", 
            `Day trading is the buying and selling of stocks in a single trading day. This is considered a short-term strategy to earn money from stocks. Usually, day traders buy stocks in the morning when the stock market opens and sell them in the afternoon before the stock market closes. The prices of stocks are always shifting, even throughout the period of one day. Although the shift in prices may not be significant, day trading is a good method to quickly maximize returns.`],
            
            ["Stock Market Terminology", 
            `An opening price is the price of the first trading of stocks that occur after the stock market opens up for the day. For example, right after the market opens for trading, the first stock trade of the day involved the buying and selling of stocks priced at $40. Then, the opening price of the day would be $40. 
            
            On the other hand, a closing price is the price of the last trading of stocks that occur before the stock market closes up for the day. Now let’s say, right before the market closes for trading, the last stock trade of the day involved the buying and selling of stocks priced at $50. Then, the closing price of the day would be $50. These values are especially useful for day trading since they can be analyzed to measure day-to-day results.`],
            
            ["Stock Market Terminology", 
            `A high price is the highest price that a stock was traded for in a given period of time. Accordingly, a low price is the lowest price that a stock was traded for in a given period of time. You could easily see a stock’s high and low prices for any period of time. A common period of time that many people keep track of the high and low prices is one day. Looking at the daily highs and lows is important for day trading. Another common period of time is 52 weeks or one year. This helps with looking at a stock’s annual performance.`],
            
            ["Stock Market Terminology", 
            `A moving average is the average price for a share over a period of time for a stock. The time period for a moving average can be 10 days, 30 minutes, 50 days, or any range that a trader might want. A moving average is a good indicator of whether a stock is performing well overall or not. If it increases, then the stock has an overall upward trend. On the other hand, if it decreases, then the stock has an overall downward trend. This allows traders to determine whether it is a good idea to buy or sell the stock.`],
            
            ["Stock Market Terminology", 
            `The volume of a stock is the number of shares that is traded within a particular period of time. That means that every time shares get traded between buyers and sellers, that number of shares gets added to the total volume. So, volume is also a way to gauge market strength. The higher the volume, the stronger a market is. Additionally, the volume can also indicate a new trend in the market.`],
        ],
        QuizPool: [
            ["What is a dividend?",
                "A portion of a company’s profits that are paid to their shareholders",
                "The buying and selling of stocks in a single trading day",
                "The number of shares that is traded within a particular period of time",
                "The highest price that a stock was traded for in a given period of time"],
            ["What is the term for the number of shares that is traded within a particular period of time?",
                "Volume",
                "Moving average",
                "High price",
                "Open price"],
            ["What is closing price?",
                "The price of the first trading of stocks that occur after the stock market opens up for the day",
                "The average price for a share over a period of time for a stock",
                "The lowest price that a stock was traded for in a given period of time",
                "The price of the last trading of stocks that occur before the stock market closes up for the day"],
        ],
        QuizSize: 3,
        ModuleImg: 
            ["stock-graph.jpg", "money.jpg", "trade.jpg", "clock.jpg", "dollars.jpg", "stock-details.jpg", "volume.jpeg"],
        Description: "Stock Market Terminology"
    },

    {
        Title: "MODULE 3",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Stock Market and Machine Learning",
            `In the past several decades, technology has made many advancements. These advancements have also changed the way people interact with the stock market. It used to be the case that you would have to rely on experts to manually analyze data on the stock market and give you advice on how certain stocks may perform. Now, we can use computers to analyze data in order to help us make investment decisions. This means that the analyzation process will be faster and more accurate.`],
            
            ["Stock Market and Machine Learning", 
            `By providing a large amount of relevant data to a computer, the computer can observe and analyze the data to find trends and patterns. These findings can then be used to predict future trends and patterns. These are ways of how we can use a concept called machine learning to help us learn more about the movements of the stock market. We will discuss more about the topic of machine learning in the next module, but let’s talk more about some specific ways we can apply machine learning.`],
            
            ["Stock Market and Machine Learning", 
            `One of the simplest ways that we can apply machine learning to data from the stock market is by predicting the stock prices. A computer can look through the previous prices of a particular stock. The stock prices can be within a period of one month, one year, or whatever an individual chooses. Then, the computer analyzes the historical stock prices to attempt to find a trend or pattern in the data. After it performs the analysis and finds a suitable explanation for the movement of the stock prices, the computer then uses its findings to predict the likely price of a stock in the future. 
            
            However, this method may not be very accurate since there are many possible spontaneous circumstances that might influence the stock market. Generally, though, using machine learning to predict stock prices is great as a guide to estimate how stocks will perform in the future.`],

            ["Stock Market and Machine Learning", 
            `In tandem with using machine learning to predict stock prices, we could also use machine learning to help us decide when to buy or sell stocks. The computer could estimate the future prices of a stock and then use that information to assist us in deciding whether it is a good idea to buy or sell. The computer will base their choice of buying or selling on the maximization of profit. This means that the computer will attempt to tell us when to buy or sell in a way that will get us the most amount of money. 
            
            So, a simple way to do this might be to buy a stock if the price today is lower than the price in the future. Additionally, if the price of a stock is higher than the price in the future, there may be a suggestion to sell the stock.`],

            ["Stock Market and Machine Learning", 
            `We can also use machine learning to look through social media posts, news articles, or other online resources to see how people feel towards a certain company. You might wonder how the people’s sentiment towards a company would relate to the stock market. The public’s opinion can greatly influence the stocks of a company. If people view a company more positively, there is a higher chance that their stock prices might rise. On the other hand, if people view a company more negatively, there is a higher chance that their stock prices might drop. So, machine learning can also be used to evaluate how certain events or people’s outlook on a company can affect the stock market.`],
        ],
        QuizPool: [
            ["Which is not an advantage of using computers to analyze stock market data?",
                "The process involves more human resources",
                "The analysis is faster",
                "The computer can quickly look through a large amount of data",
                "The analysis is more accurate"],
            ["What is not a way to apply machine learning to stock market data?",
                "To display the data on a graph",
                "To find trends and patterns in data",
                "To predict future stock prices",
                "To analyze the people's feelings towards a certain company"],
        ],
        QuizSize: 2,
        ModuleImg: 
            ["person-computer.jpg", "stock-market.jpg", "stock.jpg", "stocks.jpg", "social-media.jpg"],
        Description: "Stock Market and Machine Learning"
    },

    {
        Title: "MODULE 4",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Introduction to Computer Science and Machine Learning", 
            `In the current times, the use of technology has simplified and helped us improve our lifestyles, and it has advanced to the point where it is integrated in many aspects of our lives. We use technology to play games, create word documents, buy and sell goods online, and even control the lights in our houses through smart devices. Within the large field of technology, there is a wide variety of subfields that focus on its different applications. 
            
            So how can we use computers to help us in the matters of the stock market?`],
            
            ["Introduction to Computer Science and Machine Learning",
            `Typically, programmers write computer programs which consists of a set of instructions, or an algorithm, in order to tell the machine how to execute a particular task. 
            
            For example, if you want to tell your computer to buy milk from an online grocery store, you might write a simple program with the following instructions:

                Step 1: Go to the grocery store’s website.
                Step 2: Input “milk” in the search bar and click the search button.
                Step 3: Click the milk item and add one to cart.
                Step 4: Checkout with the payment information provided by the user.

            The computer is able to successfully buy milk from the store thanks to the explicit instructions in the program.`],
            
            ["Introduction to Computer Science and Machine Learning",
            `Another example of a program that tells a machine exactly what to do would be in applications like Gmail. Programmers code how users should log in or create accounts and what screen to display after they signed in. 
            
            The different ways that the users can interact with Gmail, like creating, reading, and deleting emails, are also directed by the programmers. With these programs, the programmers can control exactly how the application is run and managed. Programs like the ones in Gmail work well for tasks where there is a defined path or workflow in which we want the computer to follow. You can see these types of programs in almost all applications.`],
            
            ["Introduction to Computer Science and Machine Learning", 
            `But what if we do not want to give the computer the exact instructions for everything? For example, say we want the computer to look at a picture of a fruit and figure out what kind of fruit it is. We could write a program that tells the computer how to distinguish which fruit is in the picture.
            
            For instance, we could tell the machine that the fruit is an apple if it is red and round, an orange if the fruit is orange and round, and a banana if the fruit is yellow and long. This program might work for a majority of the apples, oranges, and bananas, but what if we show the computer an image of a green apple? The computer will not recognize the fruit in the image as an apple since it is not red. 
            
            We could add to the program that an apple could be green, but what if the next picture shown to the computer is of a red grape or a yellow apple? We would have to add more and more descriptions for each fruit in our program since there are so many varieties of fruit, and eventually some of the descriptions may overlap, be too precise, or be increasingly harder to define. 
            
            So, there must be a better way for the computer to figure out what fruit is in a picture without explicitly describing the features to it.`],

            ["Introduction to Computer Science and Machine Learning", 
            `Imagine if we could teach the computer what each fruit looks like just by showing them to the computer and having the computer learn and recognize the features of the fruits in a way similar to how humans learn. We could show a picture of an apple to the machine and tell it that the fruit is an apple. Then, we show the computer another picture of an apple where the shape and the color are slightly different from the previous one and tell the computer that this image is also of an apple. After showing the computer a variety of apples, we also repeat the process for other fruits. 
            
            In the meantime, the computer will learn and pick out the distinguishing features of each fruit by itself instead of having us define them as we did in the previous method. After the machine has finished learning, it is now able to recognize a random image of an apple it has not been shown before and correctly identifies the fruit in the image as an apple through the distinguishing features it learned. 
            
            This process is known as machine learning.`],
            
            ["Introduction to Computer Science and Machine Learning", 
            `The term, “machine learning,” has been defined in 1959 by Arthur Samuelson, a pioneer in the field of artificial intelligence, as “a subfield of computer science that gives computers the ability to learn without being explicitly programmed.”

            A machine learning model is built using training data and an algorithm. The function of the model is to take in an input, apply the patterns learned from the training data, and produce an output, such as a prediction.`],
            
            ["Introduction to Computer Science and Machine Learning", 
            `Training data is a collection of information that is a sample of the overall set of data that the machine learning model is expected to predict values for. Training data can consist of a variety of different information depending on the task that a model is constructed for, including text, images, audio, or simply numerical values. 
            
            The purpose of training data is to act as a teacher that shows and teaches the model how to perform its intended task. So, the model can use the patterns it analyzed or learned from the training data to apply them to future unseen data. 
            
            In the previous example with the images of fruits, the training data would be the identification of the fruits and their corresponding images shown to computer so it can recognize what an apple or a banana looks like.`],
            
            ["Introduction to Computer Science and Machine Learning", 
            `In terms of machine learning algorithms, there are four main categories that are commonly used to build machine learning models:
            - Supervised learning
            - Unsupervised learning
            - Semi-supervised learning
            - Reinforcement learning 
            
            We will talk more about these techniques and look at how the most popular algorithms can be applied to the stock market in the upcoming modules.`],
        ],
        QuizPool: [
            ["What is a program?", 
                "A set of instructions that tells a machine how to execute a task", 
                "A study of computers and how we can use them to solve problems", 
                "A machine that takes in an input and produces an output", 
                "A physical component of a computer"],
            ["What is the function of a machine learning model?", 
                "To take in an input, apply the patterns learned from the training data, and produce an output, such as a prediction", 
                "To follow the exact instructions set by programmers to complete a task", 
                "To control a robot",
                "To make human-like machines"],
            ["Which of these are examples of training data?", 
                "All of the choices", 
                "Text", 
                "Images", 
                "Numbers"],
        ],
        QuizSize: 3,
        ModuleImg: 
            ["technology.jpg", "shopping.jpg", "gmail.jpg", "fruits.jpg", "apple.jpg", "ml.jpeg", "data.jpeg", "ml-types.png"],
        Description: "Introduction to Computer Science and Machine Learning"
    },
    
    {
        Title: "MODULE 5",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Supervised Learning", 
            `Of the four machine learning techniques, supervised learning is the most popular and commonly used. Supervised learning algorithms are differentiated from the other algorithms through their exclusive use of “labeled” data. 
            
            Labeled data is raw data that has been provided a tag, label, or class by human annotators to describe it in a meaningful way. The labeled data is used as training data and is fed to a model to help it learn distinguishing patterns in order to produce an output in the form of a prediction.`],

            ["Supervised Learning", 
            `Another way to think about labeled data and supervised learning is to picture a classroom setting. The student is the algorithm, and the teacher is the labels on the data. The teacher teaches the student what each data represents, and the student learns to recognize the common traits that characterize each representation. 
            
            In other words, the teacher is supervising the learning process, hence the name “supervised” learning. Then if someone presents the student with new unlabeled data that the teacher has not specifically shown them before and asks the student to identify it, the student will use the knowledge they have learned in order to guess or predict what the previously unseen data represents.`],
            
            ["Supervised Learning", 
            `In the machine learning model example from the previous module, the algorithm that the computer was using would be classified as supervised learning. If you remember, the computer was shown different images of fruits and we taught it the labels of each fruit in the training phase. This is an example of labeled data. The computer then used what it learned from the labeled data to predict the identification of the fruit in new pictures. 
            
            The labels on the data also define what target answers we want the algorithm to return as output. In the fruit pictures example, since we taught the machine what fruit is in each image, we expect the machine to answer back in the form of a type of fruit when we ask it to identify a new picture of a fruit.`],
            
            ["Supervised Learning", 
            `So, a supervised learning model should look at the data and the labels, and it should come up with a way to analyze for patterns or deduce a relationship between the values using an algorithm. The different ways that a model can attempt to recognize patterns between the data and the labels depend on the task itself and the algorithm we apply to it. 
            
            Supervised learning algorithms can be further split into two sub-categories based on the type of task the model is expected to perform:
            - Classification
            - Regression
            However, there are some algorithms that can be used for both classification and regression tasks.`],
            
            ["Supervised Learning - Classification", 
            `In supervised learning, classification refers to the task where a machine is expected to analyze a set of labeled data, figure out relevant patterns, and output a category as a result in the form of predictions to new unlabeled data. In other words, the machine is using what it learned from the labeled data to classify new data into the appropriate classes. 
            
            For instance, the fruit images example is actually a classification task where the computer is expected to classify each image as some type of fruit using the set of labels and patterns it previously learned.`],

            ["Supervised Learning - Classification", 
            `There are many other applications of classification models used in everyday life. 
            
            The spam filter in your email inbox uses classification to predict whether an email is “spam” or “not spam.” Face and finger recognition systems in smartphones use classification to recognize faces and fingerprints for authentication. Sentiment analysis uses classification to classify whether a text conveys a positive, negative, or neutral tone. Classification can also be used to identify whether or not a patient has a certain disease based on their symptoms. It is also used when converting handwriting to text as an alternative to typing. And finally, classification is used to predict weather conditions based on temperature, humidity, and other factors.`],
            
            ["Supervised Learning - Classification", 
            `There are a large number of algorithms and models that can be used to solve these classification tasks. They include decision tree, random forest, logistic regression, Naïve Bayes, support vector machines, K-nearest neighbors, and neural networks. 
            
            Additionally, not all of the algorithms will perform equally for every task. For example, there are some models that perform better with textual data and some that perform better with a maximum of two categories or classes to predict. 
            
            We will cover and apply some of the most common models in a later module.`],
            
            ["Supervised Learning - Regression", 
            `In supervised learning, a regression task is similar to classification in that the machine takes in and learns from labeled data but, instead of making predictions in the form of a category or label, it makes predictions in the form of numeric values. Additionally, the labels of the input data are also numeric values instead of classes. 
            
            Regression models find relationships in quantitative data in relation to numeric labels in order to produce a prediction.`],
            
            ["Supervised Learning - Regression", 
            `For example, if you are trying to predict the price of a house and you want to build a regression model, some information you might want to include in the training data may be the size of the property or the number of bedrooms. The labels for each data point would be the actual prices for each house. 
            
            You would then apply a regression algorithm which would find the relationship between the attributes, which includes the size of the property and the number of bedrooms, and the labels, which would be the price of the house. 
            
            Perhaps one of the relationships that the algorithm figures out from the training data is that a larger property size results in a higher house price. The model would then apply that knowledge to new data and predict a higher price for larger property sizes and lower prices for smaller property sizes.`],

            ["Supervised Learning - Regression", 
            `There are also many other possible applications of regression models. 
            
            It could be used to find relationships in the business field between the amount of money spent on advertisement and the amount of profit or between a person’s number of work experience in years and their salary and apply them to future endeavors. 
            
            Regression models could also be used in the medical field to look at and apply relationships between a person’s caloric intake and their weight or between the age of a person and their height.`],
            
            ["Supervised Learning - Regression", 
            `Regression algorithms make use of mathematical functions, such as linear and polynomial functions, in order to map the values of the input data to the values of the numerical output. Some common regression algorithms include linear regression, polynomial regression, support vector regression, decision tree regression, and multivariate regression. 
            
            Although these algorithms could be applied to all regression tasks, they may differ in practicality depending on the complexity of the task. We will also cover and apply some of the algorithms in a later module.`],
        ],
        QuizPool: [
            ["What kind of data does a supervised learning model use as training data?",
                "Labeled data", 
                "Unlabeled data", 
                "Raw data", 
                "Numerical data"],
            ["What are the sub-categories of supervised learning?", 
                "Classification and regression", 
                "Annotation and recognition", 
                "Separation and regression", 
                "Recognition and classification"],
            ["Which of the following is a classification algorithm?", 
                "Logistic regression", 
                "Linear regression", 
                "Support vector regression",
                "Polynomial regression"],
            ["Classification models predict in the form of ___ while regression models predict in the form of ___.", 
                "Categories; numerical values", 
                "Numerical values; categories", 
                "Text; numerical values", 
                "Categories; text"],
        ],
        QuizSize: 4,
        ModuleImg: 
            ["label.jpg", "teacher.jpg", "apple-label.jpeg", "sl-types.png", "bins.jpg", "emotions.jpg", "network.jpeg", "line-graph.jpeg", "house.jpg", "busi-graph.jpg", "graphs.jpeg"],
        Description: "Supervised Learning"
    },
    {
        Title: "MODULE 6",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Evaluation of Model Performance", 
            `Before we dive into the different types of algorithms, let’s discuss what makes a good model that works well for a specific task. There are many different algorithms that can be applied to the same task but may have varying levels of performance. Usually, it is best to try out different algorithms and see which one is better suited for the task. So, how can we measure the performance of each algorithm and see which one works better?`],

            ["Evaluation of Model Performance", 
            `In a previous module, we learned that a collection of data is given to a model in order to teach the algorithms how to perform their intended task. However, instead of providing all of that data to the algorithm in the form of training data, we can also split the data into two subsets: training data and test data. 
            
            While the training data is used to help the algorithm learn, the test data is used to evaluate and test how the model will perform on new data. As opposed to providing both the data and correct labels to the algorithm, only the data will be given to the trained model for it to predict the labels. Then, we can compare the predictions from the model to the actual labels and measure its performance.`],
            
            ["Evaluation of Model Performance", 
            `The training set is usually a lot larger in size than the test set. This reason for this is because it is important to properly train a model in order for it to function well. The more data spent to train a model, the better it performs. The test data is just used to check on its progress and performance. The most common splits between training and test sets are 80%-20% and 60%-40%.`],
            
            ["Evaluation of Model Performance", 
            `So, once we give the model the test data and get the results back, how do we evaluate the model’s performance? There are many different ways to evaluate algorithms. The most common evaluation metrics for classification tasks are accuracy, precision, and recall. In order to calculate these metrics, we use a special table called a confusion matrix that will condense the information on what the model predicted and what the actual results should be.`],
            
            ["Evaluation of Model Performance", 
            `The structure of a confusion matrix is shown above in the image. The confusion matrix is set up for a binary classifier, but it can be extended to suit more classes. We have the labels that a model could predict on the horizontal axis and the actual labels in the data set on the vertical axis. 
            
            True positives (TP) are the number of instances where the model predicts positive, and the result is actually positive. For example, going back to our fruit image example, the TP would be the number of times our algorithm correctly predicted that an image is of an apple. 
            
            False positives (FP) are the number of instances where the model predicts positive, but the result is actually negative. An example would be if our algorithm incorrectly predicted that an image is of an apple. 
            
            True negatives (TN) are the number of instances where the model predicts negative, and the result is actually negative. So, that means our algorithm correctly predicted that an image is not of an apple. 
            
            False negatives (FN) are the number of instances where the model predicts negative, but the result is actually positive. That would mean that our algorithm incorrectly predicted that an image is not of an apple.`],
            
            ["Evaluation of Model Performance", 
            `The first evaluation metric we will discuss is accuracy. Accuracy measures how many predictions are correct out of the total amount of predictions. The formula for accuracy using the values from a confusion matrix is: 
            Accuracy = (TP + TN) / (TP + TN + FP + FN). 
            
            Another way to look at the formula is: Number of correct predictions / Total number of predictions. 
            
            Let’s try calculating the accuracy based on the confusion matrix above. This is what we get after plugging in all of the values: 
            Accuracy = (10 + 15) / (10 + 15 + 2 + 5) = 25/32 = 0.78. 
            
            So, in this example, our model achieved an accuracy of 78%.`],
            
            ["Evaluation of Model Performance", 
            `Another popular evaluation metric is precision. Precision measures how many of the positive predictions are actually positive. The formula for precision is: 
            Precision = TP / (TP + FP). 
            
            Now, let’s try calculating the precision of our model. A way to think about precision for this example is: Number of correct predictions for “Apple” / Total number of predictions for “Apple”. 
            
            What we get when we use the formula is: 
            Precision = 10 / (10 + 2) = 10/12 = 0.83. 
            
            So, that means that our model was correct 83% of the times that it predicted “Apple”.`],
            
            ["Evaluation of Model Performance", 
            `The last evaluation metric that we will cover is recall. Recall measures how many of the actual positives are identified correctly. The formula for recall is: 
            Recall = TP / (TP + FN). 
            
            Let’s calculate the recall of our model. We can think of recall in this example as: Number of correct predictions for “Apple” / Total number of actual “Apple” images. 
            
            After plugging in the values in the formula, we get: 
            Recall = 10 / (10 + 5) = 10/15 = 0.67. 
            
            So, our model only correctly identified 67% of all images presented to it with apples.`],
        ],
        QuizPool: [
            ["What is test data?",
                "Data used to evaluate a model's performance", 
                "Data used to train a model", 
                "Data that is labeled", 
                "Data used to calculate accuracy"],
            ["What is a confusion matrix?",
                "Table that displays what a model predicted vs what the actual label is", 
                "Table that shows accuracy, precision, and recall", 
                "Table that contains all of the test data", 
                "Table that contains all of the training data"],
            ['Compute the accuracy if TP = 5, TN = 1, FP = 1, and FN = 5 using the formula Accuracy = (TP + TN) / (TP + TN + FP + FN).', 
                "50%", 
                "30%", 
                "63%", 
                "25%"],
            ['Compute the precision if TP = 5, TN = 1, FP = 1, and FN = 5 using the formula Precision = TP / (TP + FP).', 
                "83%", 
                "57%", 
                "32%", 
                "61%"],
            ['Compute the recall if TP = 5, TN = 1, FP = 1, and FN = 5 using the formula Recall = TP / (TP + FN).', 
                "50%", 
                "41%", 
                "60%", 
                "75%"],
        ],
        QuizSize: 5,
        ModuleImg: 
            ["performance.jpeg", "train-test.png", "data-split.png", "performance.jpeg", "conf-matrx.png", "accuracy.png", "precision.png", "recall.png"],
        Description: "Evaluation of Models"
    },
    {
        Title: "MODULE 7",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Classification Algorithms - Logistic Regression", 
            `One of the simplest classification algorithms is logistic regression. Now you might wonder why it is called “logistic regression” if it is a classification algorithm. Well, logistic regression is technically considered a regression algorithm since it makes use of a mathematical function to output numerical values, but many people think of it as a classification algorithm because the model is mainly applied to classification tasks.
            
            Logistic regression is especially great at solving binary classification tasks. Binary classification is when there are only two categorical outputs that you want to try and predict. Some examples of binary classification might be whether or not an email is spam (spam or not spam) and whether or not a patient has a certain disease (ill or not ill). Typically, any classification tasks that involve yes/no or true/false are binary classification tasks.`],
            
            ["Classification Algorithms - Logistic Regression", 
            `So, why does logistic regression work so well with binary classification? Well, a logistic regression uses a logistic or sigmoid function as its core. A graph of a sigmoid function is shown above, and, as you can see, all values of the function fall between 0 and 1. 
            
            After receiving data, the model implicitly performs calculations on the inputs and passes them through the sigmoid function in order to return outputs between 0 and 1. Since only values between 0 and 1 can be returned, it is easy to think of any inputs that return values of 0.5 or greater as being grouped into one class and any inputs that returns values of 0.49 and lower as being grouped into the second class.`],

            ["Classification Algorithms - Logistic Regression", 
            `Let's try to build a logistic regression model now. The table above show a bit of the data that we will be providing to the model. 
            
            It has stock prices from the year 2018 for Google stocks, which included the daily high, low, opening, and closing prices. We also added the 10-day moving average, the difference between the closing prices of the current day and the prior day, and the difference between the opening price of the current day and the closing price of the prior day. 
            
            As you can see in the green column of the table, each row is also provided a label. The label of “Buy” is assigned to rows where the closing price of the next day is higher than the closing price of the current day. Otherwise, a label of “Sell” is assigned to the row. 
            
            Using this compilation of data, the logistic regression model will attempt to learn when to buy and sell stocks.`],

            ["Classification Algorithms - Logistic Regression", 
            `After giving the data to a logistic regression model, we get the table above when we make the model do some predictions. The “Label” column represents what the actual label should, and the “Prediction” column represents what the logistic regression model predicted the label to be based on its training. 
            
            You can also see how the model performed in the bottom section of the image above. The logistic regression model performed with a 57.02% accuracy. Additionally, we can see that the recall for “Sell” is 69.35%, which is significantly higher than the recall for “Buy” at 44.07%. This means that the model was able to correctly classify a higher number of rows that were actually labeled “Sell”. `],
            
            ["Classification Algorithms - K-Nearest Neighbors", 
            `A second popular classification algorithm is K-nearest neighbors (KNN). This algorithm takes advantage of the simple concept that objects in the same class usually have similar features. The KNN algorithm uses the training data to plot each labeled datapoint on a scatterplot. So, in theory, all points belonging to the same class should be at least somewhat close to each other, though this does not always happen. After the KNN algorithm plots all of the training data, it uses the scatterplot in order to predict the labels of new data.`],
            
            ["Classification Algorithms - K-Nearest Neighbors", 
            `When given new data to predict the class of, the KNN algorithm plots the point and looks for its neighboring points. The “K” in “K-nearest neighbors” represents the number of nearby datapoints that the algorithm will consider when deciding on the class of a new datapoint, and this K value is predetermined and manually set by an individual. 
            
            The KNN algorithm will then examine the labels of the K neighboring datapoints to determine the label of the new datapoint. This is based on frequency, so the label that appears the most gets applied to the new point.`],

            ["Classification Algorithms - K-Nearest Neighbors", 
            `We will use the same data from the logistic regression model example, but this time we will apply the KNN algorithm. In the above scatterplot, we have plotted the data as points on the graph and we have also color-coded them by their “Buy” and “Sell” labels. Now let’s see how the KNN algorithm performed with the same data.`],

            ["Classification Algorithms - K-Nearest Neighbors", 
            `The KNN algorithm that we used has its K set to 3. This means that the algorithm will look at the three nearest datapoints to predict the label of a new datapoint. 
            
            In the table above, we can see how the KNN algorithm performed. The accuracy is 49.59% which is lower than the accuracy for our previous logistic regression model. Additionally, recall for “Sell” was higher in the logistic regression model, but, when using KNN, the recall for “Sell” is lower than even the recall for “Buy”. All of this information tells us that the logistic regression model is better suited for these types of tasks with the provided data.`],
            
            ["Classification Algorithms - Decision Tree", 
            `The last popular classification model we will learn is a decision tree. As the name implies, this model builds a tree of decisions that simulates the flow of decision-making. 
            
            A decision tree starts from a single node, also known as the root node, that represents a condition based on the data. Then, the algorithm would choose and follow a path or branch downwards that would lead to another node with a different condition. 
            
            This process will continue until the algorithm lands on a node and there are no more branches to follow. This node can be referred to as a leaf node, and it does not represent another condition. Instead, reaching a leaf node means that the algorithm has arrived at the end of the decision-making process and has an answer. So, in other words, the leaf nodes represent the class labels determined after a series of decisions.`],

            ["Classification Algorithms - Decision Tree", 
            `A decision tree model constructs the decision tree based on the training data. After analyzing the training data, the model can discern which values of each characteristic play a part in influencing the label of each object. The decision tree model then creates conditions based on what it found. 
            
            The order that each condition appears in the tree is also important. Conditions that appear near the top are more critical in the deduction of a class. So, the decision tree model also calculates the significance of each condition when building the tree with the root node being the most influential condition. 
            
            When provided with new data, the decision tree model goes down the tree following the branches according to the values in the data. The leaf node that it lands on would be the model’s prediction of the label of the new data.`],

            ["Classification Algorithms - Decision Tree", 
            `We will now try to apply a decision tree model on the Google stocks data. In the above image, we have a tree that the decision tree model constructed based on the data. 
            
            The topmost and most important deciding factor seems to be whether the high price in relation to 1038.640. If it is less than or equal to 1038.640, then it is automatically labeled as “Buy”. However, if it is greater than 1038.640, then many branches may be crossed before finding the best label.`],

            ["Classification Algorithms - Decision Tree", 
            `Now let’s take a closer look at how the decision tree model performed compared to the previous models. As you can see in the image above, the decision tree model achieved an accuracy of 69.42% which is the highest among the algorithms that we have covered. In addition, it seems that this model obtained a 100% recall for “Sell” and a 100% precision for “Buy”. Precision for “Sell” is also higher than in the previous models, but it seems that the recall for “Buy” is the lowest of all the models. This means that a the decision tree model mostly labeled the data as “Sell”, but, on the rare cases that it labeled a datapoint as “Buy”, the model is correct.`],
        ],
        QuizPool: [
            ["What is binary classification?",
                "Classification that involves only two categorical outputs that can be predicted", 
                "Classification that involves at least one numerical output that can be predicted", 
                "Classification that involves multiple categorical outputs that can be predicted", 
                "Classification that involves only one categorical output that can be predicted"],
            ["What kind of mathematical function does a logistic regression model use?",
                "Sigmoid function", 
                "Linear function", 
                "Cubic function", 
                "Polynomial function"],
            ['What does the "K" in "K-nearest neighbors" represent?', 
                "Number of nearby datapoints to examine for a prediction", 
                "Number of times the algorithm should run", 
                "Type of equation to use", 
                "Method to calculate distance between datapoints"],
            ["Which of the following is not a part of a decision tree?",
                "Sapling", 
                "Root node", 
                "Leaf node", 
                "Branch"],
            ["What section of a decision tree would an important condition appear in?",
                "Top", 
                "Middle", 
                "Bottom", 
                "Left"],
        ],
        QuizSize: 5,
        ModuleImg: 
            ["binary-class.png", "sigmoid-function.png", "log-reg-data.png", "log-reg-results.png", "scatterplot.png", "knn.png", "knn-scatter.png", "knn-results.png", "tree.png", "dt.png", "dt-result-tree.png", "dt-results.png"],
        Description: "Classification Algorithms"
    },
    {
        Title: "MODULE 8",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Regression Algorithms - Linear Regression", 
            `The most basic and simplest regression algorithm is linear regression. It is also usually the easiest to understand. The linear regression model is defined by its linear function which it applies to data to output a predicted value. The linear function is shown above and can be represented by a simple equation: 
            
            Y = B0 + B1 * X. 
            
            The Y represents the targeted value that we are trying to predict which is known as the dependent variable. 
            The X represents the data value that is provided to the model which is also known as the independent variable. 
            The B0 and B1 represent coefficients that the linear regression model will figure out through training data in order to best go from X to Y.`],

            ["Regression Algorithms - Linear Regression", 
            `The basic linear regression model takes in one variable input and returns a predicted output. When using a linear regression model, it is assumed that the relationship between X and Y is somewhat linear to begin with. If it is not, then the model will not predict accurate values. 
            
            After taking in the training data and estimating the best coefficients for the linear function, the linear regression model can take in a new input X and just calculate Y using the equation with the learned coefficients.`],
            
            ["Regression Algorithms - Linear Regression", 
            `When you want to look at the relationship between multiple independent variables and a single dependent variable, it would be better to use a multiple linear regression model. 
            
            A multiple linear regression model is similar to the simple linear regression model except that the linear equation accommodates for the extra independent variables. So, instead of Y = B0 + B1 * X, the equation used in multiple linear regression is Y = B0 + B1 * X1 + B2 * X2 + … + Bn * Xn, where each X represents the value of each independent variable and n is the number of independent variables. 
            
            The rest of the process for predicting Y is the same as in basic linear regression where the algorithm plugs in the values for each X.`],

            ["Regression Algorithms - Linear Regression", 
            `Now that we have learned about linear regression, let’s try to use it to predict stock prices. In the graph above, we have the closing prices for Microsoft stocks from the year 2017. As you can see, the closing prices have a relatively linear incline. So, let’s apply a linear regression model and see how it fits.`],

            ["Regression Algorithms - Linear Regression", 
            `First, we supply the linear regression model with the data set of closing prices and dates from Microsoft. In this case, the independent variable would be the dates and the dependent variable would be the closing prices. The linear regression model then processed the data and chose the necessary coefficients. 
            
            In the graph above, you can see the line of best fit that the linear regression model came up with. The intercept of the line was chosen to be 61.93 and the slope was chosen to be 0.072, so the overall linear function is Y = 61.93 + 0.072 * X.`],

            ["Regression Algorithms - Linear Regression", 
            `In the graph above, we can see how the linear regression model would predict the closing prices based on the line of best fit. As you can see, the predictions are not very accurate, but, for a simple model, it shows us that the closing prices will continue to increase. It approximates the closing price and we could use that information in our decisions about buying or selling the stocks from Microsoft.`],
            
            ["Regression Algorithms - Polynomial Regression", 
            `Another regression algorithm that we will cover is the polynomial regression model. The polynomial regression model is based off of the linear regression model and adds additional terms to the core equation. Instead of the linear function of Y = B0 + B1 * X, the polynomial regression model uses the polynomial function of Y = B0 + B1 * X + B2 * X^2 + … + Bn * X^n. 
            
            In addition, the degree of the polynomial is to be manually chosen. The rest of process for training and applying the polynomial regression model is the same as in the linear regression model. 
            
            So, what might be so reasons that we choose to use a polynomial regression model over a linear regression model?`],
            
            ["Regression Algorithms - Polynomial Regression", 
            `If you recall, linear regression only works well between independent and dependent variables that have a linear relationship. However, there are many other aspects that people might want to look at the correlation between that may not have a linear relationship. 
            
            For example, if we wanted to predict height based on age, using a linear regression model would not work too well since the relationship between height and age is not linear. 
            
            So, for cases where your input and output variables share a non-linear relationship, polynomial regression would perform with more accuracy. The polynomial regression model will analyze the data and adjust the coefficients to better fit a polynomial function to the data.`],

            ["Regression Algorithms - Polynomial Regression", 
            `Now let’s apply a polynomial regression model. This time we will use the closing prices for the stock of McDonalds from the year 2018. The above graph visualizes this data. As you can see, this time the graph does not appear to follow a linear function. If we try to use linear regression on this data set, we will not get very good results. So, let us use polynomial regression instead.`],

            ["Regression Algorithms - Polynomial Regression", 
            `We will provide the polynomial regression model with the data set of closing prices and dates from McDonalds. The model will process the data in a similar manner as in a linear regression model, but, this time, there will be more coefficients to figure out. 
            
            In the graph to the left, we have shown how a linear regression model would perform. In the graph to the right, we have applied a polynomial regression model instead. We can easily compare the difference in the line of best fit that a linear regression model would build versus a polynomial regression model, and we can see that the line from the polynomial regression has a better fit.`],
        ],
        QuizPool: [
            ["What is the core mathematical equation that the linear regression model uses?", 
                "Y = B0 + B1 * X", 
                "Y = B0 + B1", 
                "Y = B0 + B1 * X + B2 * X^2", 
                "Y = X"],
            ["When would you choose to use a multiple linear regression model over a simple linear regression model?", 
                "When you have multiple independent variables and one dependent variable", 
                "When you have a lot of data", 
                "When you have multiple dependent variables and one independent variable", 
                "When your variables have a linear relationship"],
            ["How is a polynomial regression model different from a linear regression model?", 
                "Performs better with variables in a non-linear relationship", 
                "Uses a sigmoid function", 
                "Works better with more data", 
                "Performs better with variables in a linear relationship"],
            ["Which is an example of variables that have a non-linear relationship?", 
                "Age and height", 
                "Number of hours spent studying and score on test", 
                "Speed of car and distance traveled", 
                "Number of hours spent working and amount of money gained"],
        ],
        QuizSize: 4,
        ModuleImg: 
            ["linear-function.png", "linear-regression.svg", "mlr.png", "lin-reg-line-graph.png", "lin-reg-line.png", "lin-reg-pred.png", "polynomial-function.png", "height.jpeg", "poly-reg-line-graph.png", "poly-reg-compare.png"],
        Description: "Regression Algorithms"
    },

    {
        Title: "MODULE 9",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Unsupervised Learning", 
            `The second type of machine learning that we will learn is unsupervised learning. While supervised learning uses labeled data to train the model, unsupervised learning uses unlabeled data, hence the name “unsupervised learning.” Additionally, while the purpose of a supervised learning model is to make predictions on new data based on its training data, an unsupervised learning model is forced to find patterns in the data on its own and categorize it based on similarities in the data.
            
            So, the purpose of unsupervised learning is to find structure in an unstructured collection of unlabeled data. In many cases, the data can be organized into clusters.`],
            
            ["Unsupervised Learning", 
            `Clustering groups certain datapoints together as a way to show that everything that falls into a particular group shares similar features and possibly the same class. After the model structures and organizes the data into clusters, it is expected that there is an individual that will take the structured data and label each cluster accordingly.
            
            For instance, going back to the fruits example, instead of showing the computer labeled pictures of fruits, say we gave it pictures of the fruits excluding the labels. The computer will have to learn the patterns from only the pictures themselves. The computer might group the pictures showing a round, red fruit into one cluster, some other pictures showing a long, yellow fruit into second cluster, and pictures showing a round, orange fruit into a third cluster. Even after this phase, the computer still has no idea what each group of images actually represents. So, after the computer successfully groups the pictures, we will then manually label each of the clusters as apples, bananas, and oranges.`],
            
            ["Unsupervised Learning", 
            `Unsupervised learning is a great way to group or find patterns in a large set of data, especially when you do not have the manpower or resources to label the data. Of course, there is a trade-off involved.
            
            Since there are no labels in the data, the structuring of the data in an unsupervised learning model may not be very accurate or precise. For instance, in the previous unsupervised learning fruit example, if there was an image of a green apple in the data set, the computer might not group that image in the same cluster that contained the images of red apples. So, unsupervised learning has a difficult time handling data that contains a wide spectrum of the same item or data that is too similar to one another but belongs to different items. 
            
            Additionally, properties of certain items may change over time. It might be difficult to capture that change with an unsupervised learning model, while you could simply add new labeled data to a supervised learning model.`],
            
            ["Unsupervised Learning", 
            `In the present time, there exists astronomical amounts of raw data that would be impossible to manually label. This is where unsupervised learning comes in handy. 
            
            It can be used in recommendation systems to recommend you similar items. For example, Facebook clusters its users based on their friends, and you might be suggested new people to add as a friend based on mutual friends. Image identification is also a big field that uses unsupervised learning, which takes advantage of the clustering of similar features. Unsupervised learning can also be used to detect anomalies in data, which means that it can identity datapoints that do not belong to a cluster. This is very useful to detect cases such as fraudulent bank transactions.`],

            ["Unsupervised Learning Algorithm - K-Means", 
            `One of the most popular unsupervised learning algorithms used for clustering is K-means. The main function of the K-means algorithm is to take in an unlabeled set of data and group the datapoints that are similar together. The “K” in “K-means” represents the number of clusters that the data should be split into, and it is predetermined and manually set by an individual. Additionally, since this is an unsupervised learning algorithm, it is up to an individual to make sense of the outputted clusters through a method like labels.`],

            ["Unsupervised Learning Algorithm - K-Means", 
            `The way that the K-means algorithm works is by grouping datapoints that are close together. In the beginning, a K value is chosen, and the algorithm plots the datapoints of the training data. The K-means algorithm also generates K number of initial points, called centroids, that represents the center of each cluster and have random locations. Then the algorithm assigns each datapoint to the cluster based on the nearest centroid. 
            
            After each datapoint has been grouped into a cluster, the K-means algorithm relocates each centroid by calculating the mean of each cluster and using it to position the centroids in their respective clusters. Since the centroid has changed positions, there may be certain datapoints that are closer to a different centroid. So, each datapoint is reassigned to their nearest centroid, and new centroid positions will be recalculated afterwards. This process continues until the positions of the centroids no longer change due to successful clustering. 
            
            In addition, it is important to note that, since the initial centroid positions are randomly generated, running the K-means algorithm multiple times on the same data set many result in different clustering of datapoints.`],

            ["Unsupervised Learning Algorithm - K-Means", 
            `Now that we have talked about how the K-means algorithm works, we can try applying it. Say we have a data set of the daily stock movements of 22 different companies, and we want to group the companies based on the movements. Some of the companies in the data are Apple, Amazon, Honda, Exxon, and Bank of America. 
            
            To make it easier to visualize, we have plotted a section of the datapoints on the scatterplot above. In order to group the datapoints, we will use the K-means algorithm.`],

            ["Unsupervised Learning Algorithm - K-Means", 
            `To start, we will set K = 6, which mean that the algorithm will assign the datapoints to six different clusters based on their distance to the initial centroids that will be generated. In the scatterplot above, we can see how the K-means algorithm clustered the points. The red dots represent the centroids’ final positions, which are located at the center of each cluster. The other colors represent the different groups that the datapoints fall into.
            
            From the clusters that the K-means algorithm found, we can then analyze for certain traits or similarities. In this case, we found that there were a lot of technology companies, like Apple, Microsoft, and Sony, in one cluster. Additionally, there was a cluster with automobile companies, like Ford and Toyota. Not all clusters show interesting findings, but there was enough information from some clusters hypothesize that that companies within the same field may have similar daily stock movements.`]
        ],
        QuizPool: [
            ["What is the purpose of an unsupervised learning model?", 
                "To find structure or patterns in a collection of unlabeled data",
                "To classify data", 
                "To predict labels based on labeled data", 
                "To teach a machine how to perform certain actions"],
            ["What is clustering?", 
                "Grouping similar datapoints together", 
                "Assigning a label to datapoints", 
                "Finding a pattern in the data set", 
                "Putting random datapoints into groups"],
            ["Which is a disadvantage of unsupervised learning?", 
                "Output or knowledge gained from the model may not be entirely accurate", 
                "Difficult to gather unlabeled data", 
                "Humans have to manually annotate the data set", 
                "Can detect anomalies in the data set"],
            ['What does the "K" in "K-means" represent?', 
                "Number of clusters the algorithm should split the data set into", 
                "Number of nearby datapoints to examine for a prediction", 
                "Number of datapoints", 
                "Number of times the algorithm should run"],
        ],
        QuizSize: 4,
        ModuleImg: 
            ["unlabeled.jpg", "cluster.png", "green-red-apple.jpg", "friend-network.jpg", "clustering2.jpeg", "clustering1.jpeg", "kmeans-before.png", "kmeans-after.png"],
        Description: "Unsupervised Learning"
    },

    {
        Title: "MODULE 10",
        Image: "module-thumbnail.jpeg",
        Pages: [
            ["Semi-supervised Learning", 
            `The third type of machine learning that we will briefly cover is semi-supervised learning. If you recall, supervised learning uses labeled data to train models and unsupervised learning uses unlabeled data. Accordingly, semi-supervised learning uses a mix of both labeled and unlabeled data when training models. 
            
            However, in what cases would we choose to use semi-supervised learning?`],

            ["Semi-supervised Learning", 
            `Most machine learning models are supervised learning models. However, in order to build a supervised learning model, you must have a large amount of labeled training data, and these data must be manually annotated by humans. Having a sizeable, labeled data set is pretty expensive in terms of resources and time. On the other hand, training a model with a small set of labeled data may not produce very good results. 
            
            So, while it would be optimal to train a model using only labeled data, there are many occasions where this might not be feasible.
            
            This is where semi-supervised learning comes in.`],
            
            ["Semi-supervised Learning", 
            `Semi-supervised learning uses a combination of a small set of labeled data and a large set of unlabeled data for training purposes. 
            
            First, you would train the model with the smaller set of labeled data, just like in supervised learning. 
            
            Then, you would use the model to predict the labels of the larger unlabeled data set. These labels might not be as accurate as a hand-annotated label, but they will suffice in this case. 
            
            Finally, you would take the entirety of the set of labeled data and the set of previously unlabeled but now labeled data, and you would use it to retrain the model. 
            
            The goal is to get a final model that would provide better accuracy that a normal supervised learning model with the same small set of labeled data.`],
            
            ["Semi-supervised Learning", 
            `For applications of semi-supervised learning, this type of machine learning can be used for most situations where there is a limited set of labeled data and a large supply of unlabeled data. So, it is possible to turn a supervised learning task into a semi-supervised learning task. 
            
            There are cases where using a semi-supervised learning model is more optimal. These cases include document classification, speech analyzation, and website classification. 
            
            Overall, if you are able to build a supervised learning model with an adequate set of labeled training data, it is advised to do so due to its higher accuracy. However, a semi-supervised learning model would be more proficient in circumstances where it is not feasible to obtain a lot of labeled data.
            `],
            
            ["Reinforcement Learning", 
            `The final type of machine learning that we will also only briefly cover is reinforcement learning. Reinforcement learning is unlike any of the other types of machine learning that we have previously discussed. 
            
            Reinforcement learning is used to train an entity on how to behave in a certain environment or when facing certain scenarios. Instead of taking in a training data set with all of the answers provided in the form of labels as in supervised learning, reinforcement learning forgoes a training set all together and uses a trial-and-error approach in order to learn what the correct behavior should be. Rewards and penalties are used to teach the entity which actions are most or least optimal, and the entity reforms their behavior to maximize rewards.`],

            ["Reinforcement Learning", 
            `You can think of reinforcement learning like training a dog. 
            
            Imagine that you just received a dog one day that has not gone through training yet, and you want to teach your dog how to behave in an acceptable manner. Your dog would be the entity undergoing reinforcement learning, and you would be taking on the role of giving rewards or penalties to your dog in order to teach him whether his actions are favorable or not. 
            
            Say your dog chews on your shoes. You then penalize him by scolding him for his actions, and your dog now learns that he should not chew on shoes. Afterwards, your dog successfully performs a trick you have taught him, and you might reward him for his success by giving him a treat. This lets your dog know that performing that trick is something that is praised and will get him more treats, so he will eagerly perform it again in anticipation of the treats. 
            
            After going through more training, your dog now knows which actions are suitable and which actions he should avoid doing. 
            
            This is basically how reinforcement learning works.`],
            
            ["Reinforcement Learning", 
            `Reinforcement learning is used for many different applications. 
            
            The most prominent field that reinforcement learning is used in is robotics. This method of learning is a great way for robots to learn how to interact with their environment. 
            
            Another common area implements reinforcement learning is personalized recommendations. Every time you perform certain actions, such as liking, positively rating, or buying an item, it rewards the recommendation system for showing you the item which gives an indication to show you other similar or related items. 
            
            Reinforcement learning is also applied in games to train artificial intelligence or computer players on how to play the game. The most famous example would be AlphaGo, which has defeated the top players of Go. Another example would be the computer player you play against in a game like chess. 
            
            There are many other applications for reinforcement learning, and researchers are still finding more ways to implement it.`],
            
        ],
        QuizPool: [
            ["What kind of training data does a semi-supervised learning model use?", 
                "Both labeled and unlabeled data", 
                "Only labeled data", 
                "Only unlabeled data", 
                "No data"],
            ["In what situation would you choose to build a semi-supervised model over a supervised model?", 
                "When you have a small set of labeled data and a large set of unlabeled data", 
                "When it is easy to get a lot of labeled data", 
                "When it is hard to get a lot of unlabeled data", 
                "When you have a large set of labeled data and a small set of unlabeled data"],
            ["In reinforcement learning, ___ are used to tell an entity that an action is favorable and ___ are used to tell an entity that an action is not favorable.", 
                "Rewards; penalties", 
                "Gifts; penalties", 
                "Penalties; rewards", 
                "Treats; rewards"],
        ],
        QuizSize: 3,
        ModuleImg: 
            ["semi-sup.png", "data.jpeg", "ssl-data-split.png", "speech.jpg", "trial-error.jpeg", "dog.jpg", "ai-chess.jpg"],
        Description: "Semi-supervised Learning"
    },
];