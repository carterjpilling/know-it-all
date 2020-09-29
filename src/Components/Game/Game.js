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

  if (category.isLoading ? true : console.log(category.gameArray[page.currentIndex][0].primaryImage)) {
  }

  function displayNextImage() {
    if (page.currentIndex >= category.gameArray - 1) {
      setPage({
        lastIndex: true
      })
    } else {
      setPage({
        currentIndex: page.currentIndex + 1
      })
    }
  }



  return (
    <div>
      {category.isLoading ?
        <p>Loading...</p> :
        <img className='first-picture' src={category.gameArray[page.currentIndex][0].primaryImage} alt='first_picture' />
      }
      {page.lastIndex ? <button>Return to Home</button> : <button onClick={() => { displayNextImage() }}>Next Question</button>}
        Game.js
      {/* <img src={category.gameArray[0][0].primaryImage} alt='reallycoolpicture' /> */}
    </div>
  )
}

export default withRouter(Game)