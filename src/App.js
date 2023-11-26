import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  let [question, setQuestion] = useState(" ")
  let [category, setCategory] = useState(" ")
  let [points, setPoints] = useState(0)
  let [value, setValue] = useState(0)
  let [answer, setAnswer] = useState(" ")
  let [hideAnswer, toggleAnswer] = useState(true)

  const reset = () => {
    setQuestion(" ")
    setCategory(" ")
    setPoints(0)
    setValue(0)
    setAnswer(" ")
    toggleAnswer(true)
  }




  const getData = () => {
    axios.get('https://jservice.io/api/random').then((response)=> {
      setQuestion(response.data[0].question)
      setCategory(response.data[0].category.title)
      setValue(response.data[0].value)
      setAnswer(response.data[0].answer)
      toggleAnswer(true)
    });

  };

  const showAnswer = () => {
   toggleAnswer(false)

  }

const increasePoints = () => {
  setPoints(points + value)
  
}

const decreasePoints = () => {
  setPoints(points - value)
}

  useEffect(() => {

  },[]);

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h1 id="jServiceTitle" className='number'>Jeopardy</h1>
            </div>
            <div className="col-1 mt-4">
              <button className="btn btn-dark reset" onClick= {reset}>Reset</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 id='trivia'>Trivia</h2>
            </div>
          </div>
          <div className="row triviaBox py-4">
            <div className="col">
              <h2 className="number">Value: {value} </h2>
            </div>
            <div className="col">
              <h2>Category: {category}</h2>
            </div>
          </div>
          {/* trivia content */}
          <div className="row triviaBox py-5">
            <div className="col-12">
              <p className="triviaContent">Prompt -- {question}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button className="btn btn-dark"  onClick={showAnswer}>Show Answer</button>
            </div>
              <div className="col answerText">
                  {(hideAnswer) ? <p>Answer is hidden</p> : <p><strong>{answer}</strong></p>}
              </div>
              <div className="col">
                <button className="btn btn-primary" onClick={getData}>Get New Trivia</button>
              </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4">
              <button className="btn btn-success" onClick={increasePoints}>Increase</button>
            </div>
            <div className="col-12 mt-4 mb-2">
              <h2 className="number">Points: {points}</h2>
            </div>
            <div className="col-12">
              <button className="btn btn-danger" onClick={decreasePoints}>Decrease</button>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}


export default App;
