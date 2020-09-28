import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function Game(props) {

  const [category, setCategory] = useState({
    title: false,
    artist: false,
    date: false,
    gameArray: [],
    isLoading: true
  })




  useEffect(() => {
    console.log(props.match.params.type)
    axios.get(`/api/art/${props.match.params.category}`).then((res) => {
      console.log(res.data)
      setCategory((prevState) => {
        return { ...prevState, [props.match.params.type]: true, gameArray: res.data, isLoading: false }
      })
    })
    // console.log(category)
  }, [])
  // console.log(category)
  if (category.isLoading ? true : console.log(category.gameArray[0][0].primaryImage)) {

  }
  // const arrayIndex = category.gameArray[0]
  // console.log(arrayIndex)
  // console.log(category.gameArray[0][0])
  // console.log(category.gameArray[0][0].primaryImage)


  return (
    <div>
      {category.isLoading === true && (
        <p>Loading...</p>
      )}
        Game.js
      {/* <img src={category.gameArray[0][0].primaryImage} alt='reallycoolpicture' /> */}
    </div>
  )
}

export default withRouter(Game)