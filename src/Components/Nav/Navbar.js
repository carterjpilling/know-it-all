import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import './Navbar.scss'
import { logoutUser, getUser } from '../../reducks/authReducer'
import axios from 'axios'
import hamburger from '../pictures/hamburger.png'
import { connect } from 'react-redux'

//logout will need to exist here.
function Nav(props) {
  const [menu, setMenu] = useState(false)
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

  function toggleMenu() {
    setMenu(!menu)
  }


  if (props.location.pathname !== '/') {
    return (
      <div>
        <img src={hamburger} className='hamburger' alt='hamburger-icon' onClick={() => toggleMenu()} />
        <header className='nav-header'>
          {/* <Link to='/'>Login Page</Link> */}




          <div>
            <p>{props.user.points}</p>
            <p>{props.user.username}</p>
            <img className='img-profile-picture' src={props.user.profile_picture} alt={'user profile'} />
          </div>
        </header>
        {menu === false ? null : <div className='hamburger-menu'>
          <img src={hamburger} className='hamburger' alt='hamburger-icon' onClick={() => toggleMenu()} />
          <Link onClick={() => toggleMenu()} to='/homepage'>Home</Link>
          <div>
            <img src={'data:image/png;base64,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'} />
            <button>Random Game</button>
          </div>
          <Link onClick={() => toggleMenu()} to='/profile/statistics'>Stats</Link>
          <Link onClick={() => toggleMenu()} to='/profile'>Profile</Link>
          <button onClick={() => triggerLogout()}>Signout</button>
        </div>}
      </div>
    )
  } else {
    return (null)
  }
}
const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, { logoutUser, getUser })(Nav))
