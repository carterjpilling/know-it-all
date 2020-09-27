import React, { useState, useEffect } from 'react'
import Titles from './Data/Titles'
import Profpictures from './Data/Profpictures'
import axios from 'axios'

function Profile() {
  const [state, setState] = useState({
    profile_pictures: [],
    title: []
  })

  useEffect(() => {
    axios.get('/api/profilepictures')
      .then((res) => {
        console.log(res.data)
        setState(state => ({ ...state, profile_pictures: res.data }))
      })
    axios.get('/api/titles')
      .then((res) => {
        console.log(res.data)
        setState(state => ({ ...state, titles: res.data }))
      })
    console.log(state)
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('api/profilepictures')
  //     setState(result.data)
  //     console.log(result.data)
  //   }
  //   fetchData()
  //   console.log(state)
  // }, [])



  return (
    <div >
      <Titles state={state.titles} />
      <Profpictures state={state.profile_pictures} />
        Profile.js
    </div>
  )


}

export default Profile