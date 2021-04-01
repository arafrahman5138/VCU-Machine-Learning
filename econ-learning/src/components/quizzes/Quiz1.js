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

export default function Quiz1() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
  const [username, setUsername] = useState(credentials && credentials.username);
  const [module, setModule] = useState("100"); 
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

  const Quiz1 = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/Quiz1`, {
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
				<div className='score-section'>
					You scored {score} out of {questions.length} <br/>
					You earned {tokens = tokens + score * 5} tokens
				</div>
				<div className="credits">
                        {/* <p className="credits_earnable" id="credits_earnable">Credits you can earn: 4</p> */}
                        <p className="credits_total" id="credits_total"> Total tokens: {tokens}</p>
                </div>
				<div className="nextMod">
				<form onClick={Quiz1}>
                <h4 id = "leftMod"><Link to="/modules/0/0"><Styled.Button>Restart</Styled.Button></Link></h4>
				<h4 id = "rightMod"><Link to="/modules/1/0"><Styled.Button>Next Module</Styled.Button></Link></h4>
				</form>
				<br/>
				</div>
                </>
			) : (
				<>
					<div className='question-section'>
						<h2 align="center">Quiz 1</h2>
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
		</div> <br/> 
        <DragChart/>
        </>
	);
}