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
  import '../../components/quiz.css'
  import * as Styled from '../../components/StyledButton'

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};

export default function Quiz2() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
  const [username, setUsername] = useState(credentials && credentials.username);
  const [error, setError] = useState("");

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [tokens, setTokens] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			setTokens((score + 1) * 5);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const storeQuiz2 = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/Quiz2`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        tokens,
      }),
    })
      .then(handleErrors)
      .then(() => {
        setCredentials({
          username,
          tokens,
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
					You earned {tokens} tokens
				</div>
				</center>
                <div className="nextMod">
				<form onClick={storeQuiz2}>
                <h4 id = "leftMod"><Link to="/modules/1/0"><Styled.Button>Restart</Styled.Button></Link></h4>
				<h4 id = "rightMod"><Link to="/modules/2/0"><Styled.Button>Next Module</Styled.Button></Link></h4>
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
					<h2 align="center">Quiz 2</h2>
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