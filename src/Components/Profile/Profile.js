import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { getUser } from '../../reducks/authReducer'
import { connect } from 'react-redux'
import axios from 'axios'

function Profile(props) {
  axios.get('/api/auth/me').then().catch(() => {
    props.history.push('/homepage')
  })



  const [state, setState] = useState({
    profile_pictures: [],
    titles: []
  })

  const [profileChange, setProfileChange] = useState({
    new_picture: props.user.profile_picture,
    new_title: props.user.title
  })

  useEffect(() => {
    axios.get('/api/profilepictures')
      .then((picRes) => {
        axios.get('/api/titles')
          .then((titlesRes) => {
            setState(state => ({ ...state, titles: titlesRes.data, profile_pictures: picRes.data }))
          })
      })
    console.log(state)
  }, [])


  function updatePicture(pic) {
    setProfileChange({
      ...profileChange,
      new_picture: pic
    })
  }

  function updateTitle(title) {
    setProfileChange({
      ...profileChange,
      new_title: title
    })
  }

  function saveProfileChanges() {
    axios.put('/api/user/picture', {
      new_picture: profileChange.new_picture
    })
    axios.put('/api/user/title', {
      new_title: profileChange.new_title
    })
      .then(() => {
        props.getUser()
        props.history.push('/homepage')
      })

  }


  const profPicturesMap = state.profile_pictures.map((element, index) => {
    return (

      <div key={index}>
        <img className='profile-images' src={element.image} onClick={() => updatePicture(element.image)} alt={element.image} />
      </div>
    )
  })

  const profTitleMap = state.titles.map((element, index) => {
    return (
      <div key={index}>
        <p onClick={() => updateTitle(element.title)}>{element.title}</p>
      </div>
    )
  })

  return (
    <div className='profile-body'>
      <p>Click on a image and save changes to change your profile picture.</p>
      <button onClick={() => saveProfileChanges()}>Save Profile Changes</button>
      <div className='prof-images-array'>
        {profPicturesMap}
      </div>
      {/* {profTitleMap} */}
      {/* <Titles titlesData={state.titles} />
      <Profpictures profilePictures={state.profile_pictures} /> */}
    </div>
  )


}
const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, { getUser })(Profile))