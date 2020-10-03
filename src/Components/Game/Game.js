import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../reducks/authReducer'
import './Game.css'

function Game(props) {

  const [category, setCategory] = useState({
    gameArray: [],
    isLoading: true
  })

  const [page, setPage] = useState({ currentIndex: 0, })

  const [answers, setAnswers] = useState({ responses: [] })

  const [points, setPoints] = useState({ roundPoints: 0 })

  const [buttonEnabler, setButtonEnabler] = useState(false)

  const [questionType, setQuestionType] = useState([])

  useEffect(() => {

  }, [page])

  function randomQuestionType(arr) {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    setQuestionType({ newArr })
  }

  useEffect(() => {
    axios.get(`/api/art/${props.match.params.category}`).then((res) => {
      setPage({ currentIndex: 0 })
      setCategory((prevState) => {
        return { ...prevState, gameArray: res.data, isLoading: false }
      })
    })
  }, [])
  useEffect(() => {
    randomQuestionType(['title', 'artist', 'date'])
  }, [page])

  useEffect(() => {
    const { isLoading, gameArray } = category
    const { newArr } = questionType
    const { currentIndex } = page


    if (currentIndex !== 10) {
      if (isLoading !== true) {
        const responseArr = []
        if (newArr[0] === 'title') {
          responseArr.push(
            { response: gameArray[currentIndex][0].title, id: gameArray[currentIndex][0].objectID },
            { response: gameArray[currentIndex][1].title, id: gameArray[currentIndex][1].objectID },
            { response: gameArray[currentIndex][2].title, id: gameArray[currentIndex][2].objectID },
            { response: gameArray[currentIndex][3].title, id: gameArray[currentIndex][3].objectID }
          )
        }

        if (newArr[0] === 'artist') {
          responseArr.push(
            { response: gameArray[currentIndex][0].artistDisplayName, id: gameArray[currentIndex][0].objectID },
            { response: gameArray[currentIndex][1].artistDisplayName, id: gameArray[currentIndex][1].objectID },
            { response: gameArray[currentIndex][2].artistDisplayName, id: gameArray[currentIndex][2].objectID },
            { response: gameArray[currentIndex][3].artistDisplayName, id: gameArray[currentIndex][3].objectID }
          )
        }

        if (newArr[0] === 'date') {
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
  }, [category, questionType])

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

  function profilePoints() {
    axios.put('/api/user/points', {
      new_points: points.roundPoints
    })
  }

  function checkAnswer(ans) {
    if (ans === category.gameArray[page.currentIndex][0].objectID) {
      setPoints({
        roundPoints: (points.roundPoints += 10)
      })
    }
    setButtonEnabler(true)
  }

  function submitRound() {

    const EUROPEAN = 'european'
    const VAN_GOGH = 'van_gogh'
    const DISPLAYED_ART = 'displayed'
    const PERMANENT_PAINTINGS = 'permanent'
    const AMERICAN = 'american'

    let catObj

    switch (props.match.params.category) {
      case AMERICAN:
        catObj = { catId: 1 }
        break
      case EUROPEAN:
        catObj = { catId: 2 }
        break
      case PERMANENT_PAINTINGS:
        catObj = { catId: 3 }
        break
      case DISPLAYED_ART:
        catObj = { catId: 4 }
        break
      case VAN_GOGH:
        catObj = { catId: 5 }
        break
      default:
        return null
    }

    const DATE = 'date'
    const ARTIST = 'artist'
    const TITLE = 'title'

    let gameObj

    switch (props.match.params.type) {
      case DATE:
        gameObj = { qID: 1 }
        break
      case ARTIST:
        gameObj = { qID: 2 }
        break
      case TITLE:
        gameObj = { qID: 3 }
        break
      default:
        return null
    }
    axios.post('/api/stats', {
      type_of_game: 2,
      points_gained: points.roundPoints,
      genre: catObj,
      question_type: gameObj
    })
    resetGame()
    profilePoints()
    props.getUser()
    props.history.push('/homepage')
  };

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
  });

  return (
    <div>
      {page.currentIndex === 10 ? <div>
        <button onClick={() => submitRound()}>Submit Round</button>
      </div> : <>{category.isLoading ?
        <p>Loading...</p> : <div>
          <img className='first-picture' src={category.gameArray[page.currentIndex][0].primaryImage} alt='first_picture' />
          <h1>{`Guess the ${questionType.newArr[0]} of this art.`}</h1>
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
const mapStateToProps = (reduxState) => reduxState


export default withRouter(connect(mapStateToProps, { getUser })(Game))