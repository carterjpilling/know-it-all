import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import './Navbar.scss'
import { logoutUser, getUser } from '../../reducks/authReducer'
import axios from 'axios'
import { connect } from 'react-redux'

//logout will need to exist here.
function Nav(props) {

  useEffect(() => {
    if (!props.isLoggedIn) {
      props.getUser().catch((err) => {
        props.history.push('/')
      })
    }
    console.log('Nice')
  }, [])


  function triggerLogout() {
    axios.post('/api/auth/logout').then(() => {
      props.history.push('/')
      props.logoutUser()
    })

  }


  if (props.location.pathname !== '/') {
    return (
      <header className='nav-header'>
        <Link to='/'>Login Page</Link>
        <Link to='/homepage'>Home Page</Link>
        <Link to='/profile/statistics'>Stats Page</Link>
        <Link to='/profile'>Profile Page</Link>
        <button onClick={() => triggerLogout()}>Signout</button>
        <div>
          <p>{props.user.points}</p>
          <p>{props.user.username}</p>
          <img className='img-profile-picture' src={props.user.profile_picture} alt={'user profile'} />
        </div>
      </header>
    )
  } else {
    return (null)
  }
}
const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, { logoutUser, getUser })(Nav))
