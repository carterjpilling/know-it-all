import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Game.css'

function Game(props) {

  const [category, setCategory] = useState({
    title: false,
    artist: false,
    date: false,
    gameArray: [],
    isLoading: true
  })

  const [page, setPage] = useState({ currentIndex: 0, })

  const [answers, setAnswers] = useState({ responses: [] })

  const [points, setPoints] = useState({ roundPoints: 0 })

  const [buttonEnabler, setButtonEnabler] = useState(false)


  useEffect(() => {
    console.log(props.match.params.type)
    axios.get(`/api/art/${props.match.params.category}`).then((res) => {
      setPage(() => {
        return { ...page, currentIndex: 0 }
      })
      setCategory((prevState) => {
        return { ...prevState, [props.match.params.type]: true, gameArray: res.data, isLoading: false }
      })
    })
  }, [])

  useEffect(() => {
    const { isLoading, title, artist, date, gameArray } = category
    const { currentIndex } = page
    if (currentIndex !== 10) {
      if (isLoading !== true) {

        const responseArr = []
        if (title === true) {
          responseArr.push(
            { response: gameArray[currentIndex][0].title, id: gameArray[currentIndex][0].objectID },
            { response: gameArray[currentIndex][1].title, id: gameArray[currentIndex][1].objectID },
            { response: gameArray[currentIndex][2].title, id: gameArray[currentIndex][2].objectID },
            { response: gameArray[currentIndex][3].title, id: gameArray[currentIndex][3].objectID }
          )
        }

        if (artist === true) {
          responseArr.push(
            { response: gameArray[currentIndex][0].artistDisplayName, id: gameArray[currentIndex][0].objectID },
            { response: gameArray[currentIndex][1].artistDisplayName, id: gameArray[currentIndex][1].objectID },
            { response: gameArray[currentIndex][2].artistDisplayName, id: gameArray[currentIndex][2].objectID },
            { response: gameArray[currentIndex][3].artistDisplayName, id: gameArray[currentIndex][3].objectID }
          )
          console.log('Hit Artist If')
        }

        if (date === true) {
          responseArr.push(
            { response: gameArray[currentIndex][0].objectDate, id: gameArray[currentIndex][0].objectID },
            { response: gameArray[currentIndex][1].objectDate, id: gameArray[currentIndex][1].objectID },
            { response: gameArray[currentIndex][2].objectDate, id: gameArray[currentIndex][2].objectID },
            { response: gameArray[currentIndex][3].objectDate, id: gameArray[currentIndex][3].objectID }
          )
        }
        const shuffledRes = getShuffled(responseArr)
        setAnswers({ responses: shuffledRes })
      }
    }
  }, [category, page])

  function displayNextImage() {
    setPage({ currentIndex: page.currentIndex + 1 })
    setButtonEnabler(false)
  }

  function resetGame() {
    setCategory({
      title: false,
      artist: false,
      date: false,
      gameArray: [],
      isLoading: true
    })
    setAnswers({ responses: [] })
    setPage({ currentIndex: 0 })
  }

  function checkAnswer(ans) {
    console.log(ans)
    if (ans === category.gameArray[page.currentIndex][0].objectID) {
      setPoints({
        roundPoints: (points.roundPoints += 10)
      })
    }
    setButtonEnabler(true)
  }

  function submitRound() {
    axios.post('/api/stats', {
      type_of_game: 1,
      points_gained: points.roundPoints,
      genre: 1
    })
  }

  const getShuffled = arr => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
  };

  const multipleChoiceResponses = answers.responses.map((element, index) => {
    return (
      <div key={index}>
        <button onClick={() => checkAnswer(element.id)} disabled={buttonEnabler} className={category.gameArray[page.currentIndex] && element.id === category.gameArray[page.currentIndex][0].objectID && buttonEnabler === true ? 'correct-answer' : 'incorrect-answer'}>{element.response}</button>
      </div>
    )

  })

  return (
    <div>
      {page.currentIndex === 10 ? <div>
        <Link to={'/homepage'} onClick={() => { resetGame() }}>Back to Home</Link>
        <button onClick={() => submitRound()}>Submit Points</button>
      </div> : <>{category.isLoading ?
        <p>Loading...</p> : <div>
          <img className='first-picture' src={category.gameArray[page.currentIndex][0].primaryImage} alt='first_picture' />
          {multipleChoiceResponses}
        </div>
      }
          <div>
            {buttonEnabler === false ? null : <button onClick={() => { displayNextImage() }}>Next Question</button>}
            <h3>Points:{points.roundPoints}</h3>
            <p>Question {page.currentIndex + 1}/10</p>

          </div></>}
    </div >
  )
}

export default withRouter(Game)