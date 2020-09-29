import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './Game.css'

function Game(props) {

  const [category, setCategory] = useState({
    title: false,
    artist: false,
    date: false,
    gameArray: [],
    isLoading: true
  })

  const [page, setPage] = useState({
    currentIndex: 0,
    lastIndex: false
  })

  const [answers, setAnswers] = useState({
    response1: 0,
    response2: 0,
    response3: 0,
    response4: 0
  })

  useEffect(() => {
    console.log(props.match.params.type)
    axios.get(`/api/art/${props.match.params.category}`).then((res) => {
      console.log(res.data)
      setPage(() => {
        return { ...page, currentIndex: 0, lastIndex: false }
      })
      setCategory((prevState) => {
        return { ...prevState, [props.match.params.type]: true, gameArray: res.data, isLoading: false }
      })
    })
  }, [])

  useEffect(() => {
    const { isLoading, title, artist, date } = category
    if (isLoading !== true) {
      if (title === true) {
        setAnswers(() => {
          return { response1: 1, response2: 2, response3: 3, response4: 4 }
        })
      }

      if (artist === true) {
        setAnswers(() => {
          return { response1: 5, response2: 6, response3: 7, response4: 8 }
        })
      }

      if (date === true) {
        setAnswers(() => {
          return { response1: 9, response2: 10, response3: 11, response4: 12 }
        })
      }
    }
  }, [category])

  // function loadAnswers() {
  // }

  // if (category.isLoading === true) {
  //   loadAnswers()
  // }

  // if (category.isLoading ? true : console.log(category.gameArray[page.currentIndex][0].primaryImage)) {
  // }

  function displayNextImage() {
    setPage({
      currentIndex: page.currentIndex + 1
    })
  }



  return (
    <div>
      {page.currentIndex === 10 ? <button>Game Over</button> : <>{category.isLoading ?
        <p>Loading...</p> : <img className='first-picture' src={category.gameArray[page.currentIndex][0].primaryImage} alt='first_picture' />
      }
        {page.currentIndex === 10 ? <button>Return to Home</button> : <button onClick={() => { displayNextImage() }}>Next Question</button>}</>}
        Game.js
      {/* <img src={category.gameArray[0][0].primaryImage} alt='reallycoolpicture' /> */}
    </div>
  )
}

export default withRouter(Game)