import React, { useState, useEffect } from 'react'
import Titles from './Data/Titles'
import Profpictures from './Data/Profpictures'
import axios from 'axios'

function Profile() {
  const [state, setState] = useState({
    profile_pictures: [],
    titles: []
  })

  useEffect(() => {
    axios.get('/api/profilepictures')
      .then((picres) => {
        axios.get('/api/titles')
          .then((titlesres) => {
            setState(state => ({ ...state, titles: titlesres.data, profile_pictures: picres.data }))
          })
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
      <Titles titlesData={state.titles} />
      <Profpictures profilePictures={state.profile_pictures} />
    </div>
  )


}

export default Profile