import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import './Navbar.scss'
import { logoutUser, getUser } from '../../reducks/authReducer'
import axios from 'axios'
import hamburger from '../pictures/hamburger.png'
import { MdHome } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
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
          <Link onClick={() => toggleMenu()} to='/homepage'><MdHome />Home</Link>
          <div>

            <GiPerspectiveDiceSixFacesRandom /> <button>Random Game</button>
          </div>
          <Link onClick={() => toggleMenu()} to='/profile/statistics'><AiOutlineBarChart />Stats</Link>
          <Link onClick={() => toggleMenu()} to='/profile'><CgProfile />Profile</Link>
          <button onClick={() => triggerLogout()}> <GoSignOut />Signout</button>
        </div>}
      </div>
    )
  } else {
    return (null)
  }
}
const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, { logoutUser, getUser })(Nav))
