import { CredentialsContext } from "../../App";
import { useHistory } from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect
  } from "react-router-dom";
  import DragChart from '../TestingDragChart'
  import {modulesData} from '../../components/modulesData'
  import '../../components/quiz.css'
import * as Styled from '../../components/StyledButton'

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};

export default function Quiz5() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
  const [username, setUsername] = useState(credentials && credentials.username);
  const [module, setModule] = useState("100"); 
  const [error, setError] = useState("");

	const questions = [
		{
			questionText: modulesData[4].QuizPool[0][0],
			answerOptions: [
				{ answerText: modulesData[4].QuizPool[0][1], isCorrect: true },
				{ answerText: modulesData[4].QuizPool[0][2], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[0][3], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[0][4], isCorrect: false },
			],
		},
		{
			questionText: modulesData[4].QuizPool[1][0],
			answerOptions: [
				{ answerText: modulesData[4].QuizPool[1][1], isCorrect: true },
				{ answerText: modulesData[4].QuizPool[1][2], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[1][3], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[1][4], isCorrect: false },
			],
		},
		{
			questionText: modulesData[4].QuizPool[2][0],
			answerOptions: [
				{ answerText: modulesData[4].QuizPool[2][1], isCorrect: true },
				{ answerText: modulesData[4].QuizPool[2][2], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[2][3], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[2][4], isCorrect: false },
			],
		},
		{
			questionText: modulesData[4].QuizPool[3][0],
			answerOptions: [
				{ answerText: modulesData[4].QuizPool[3][1], isCorrect: true },
				{ answerText: modulesData[4].QuizPool[3][2], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[3][3], isCorrect: false },
				{ answerText: modulesData[4].QuizPool[3][4], isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	var tokens = 0;

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const Quiz5 = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/Quiz5`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        module,
      }),
    })
      .then(handleErrors)
      .then(() => {
        setCredentials({
          username,
          module,
        });
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const history = useHistory();

	return (
        <>
		<div className='app'>
			{showScore ? (
                <>
				<center>
				<div className='score-section'>
					You scored {score} out of {questions.length} <br/>
					You earned {tokens = tokens + score * 5} tokens
				</div>
				</center>
                <div className="nextMod">
				<form onClick={Quiz5}>
                <h4 id = "leftMod"><Link to="/modules/4/0"><Styled.Button>Restart</Styled.Button></Link></h4>
				<h4 id = "rightMod"><Link to="/modules/5/0"><Styled.Button>Next Module</Styled.Button></Link></h4>
				</form>
				<br/>
				</div>
				<center>
				<div className="credits">
                        <p className="credits_total" id="credits_total"> Total tokens: {tokens}</p>
                </div>
				</center>
                </>
			) : (
				<>
					<div className='question-section'>
					<h2 align="center">Quiz 5</h2>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        <DragChart/>
        </>
	);
}