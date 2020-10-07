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
    setMenu(false)
    console.log('Nice')
  }, [])


  function triggerLogout() {
    axios.post('/api/auth/logout').then(() => {
      props.history.push('/')
      props.logoutUser()
    })
    setMenu(false)
  }

  function toggleMenu() {
    setMenu(!menu)
  }


  if (props.location.pathname !== '/') {
    return (
      <div className='nav-header'>
        <div className='hamburger-container'>
          <img src={hamburger} className='hamburger' alt='hamburger-icon' onClick={() => toggleMenu()} />
        </div>
        <div className='nav-title'>Know It All</div>

        {/* <Link to='/'>Login Page</Link> */}




        <div className='nav-profile-container'>
          <p>{props.user.points} Points</p>
          {/* <p>{props.user.username}</p> */}
          <div className='nav-prof-image-container'>
            <img className='img-profile-picture' src={props.user.profile_picture} alt={'user profile'} />
          </div>
        </div>

        {menu === false ? null : <div className='hamburger-menu'>
          <div className='nav-dropdown-hamburger-div'>
            <img src={hamburger} className='hamburger' alt='hamburger-icon' onClick={() => toggleMenu()} />
          </div>
          <li className='nav-menu-button-container'>
            <Link className='nav-links' onClick={() => toggleMenu()} to='/homepage'>
              <div className='nav-homepage-button'>
                <MdHome />
                <p>
                  Home
                </p>
              </div>
            </Link>
            <Link className='nav-links'>
              <div className='nav-homepage-button'>
                <GiPerspectiveDiceSixFacesRandom />
                <p>
                  Random Game
                </p>
              </div >
            </Link>
            <Link className='nav-links' onClick={() => toggleMenu()} to='/profile/statistics'>
              <div className='nav-homepage-button'>
                <AiOutlineBarChart />
                <p>
                  Stats
                </p>
              </div>
            </Link>

            <Link className='nav-links' onClick={() => toggleMenu()} to='/profile'>
              <div className='nav-homepage-button'>
                <CgProfile />
                <p>
                  Profile
                  </p>
              </div>
            </Link>

            <Link className='nav-links' onClick={() => triggerLogout()}>
              <div className='nav-homepage-button'>
                <GoSignOut />
                <p>
                  Signout
                </p>
              </div>
            </Link>
          </li>
        </div>}
      </div>
    )
  } else {
    return (null)
  }
}
const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, { logoutUser, getUser })(Nav))
