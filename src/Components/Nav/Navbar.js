import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logoutUser, getUser } from '../../reducks/authReducer'
import axios from 'axios'
import { MdHome } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBarChart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { connect } from 'react-redux'

function Nav(props) {
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    if (!props.isLoggedIn) {
      props.getUser().catch((err) => {
        props.history.push('/')
      })
    }
    setMenu(false)
  }, [])

  const newArr = ['european', 'american', 'permanent']
  function randomGame() {
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    props.history.push(`/game/${newArr[0]}`)
    console.log(newArr)
    toggleMenu()
    return newArr
  }

  function triggerLogout() {
    axios.post('/api/auth/logout').then(() => {
      props.logoutUser()
      window.location.reload()
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
          {props.isLoggedIn === true ? <GiHamburgerMenu className='hamburger' onClick={() => toggleMenu()} /> : null}
        </div>
        <div className='nav-title'>
          <Link className='nav-words-title' to='/homepage'>
            <p >KNOW IT ALL</p>
          </Link></div>
        {props.isLoggedIn === true ?
          <div className='nav-profile-container'>
            <p>{props.user.points} Points</p>
            <div className='nav-prof-image-container'>
              <img className='img-profile-picture' src={props.user.profile_picture} alt={'user profile'} />
            </div>

          </div>
          : <div className='nav-profile-container'>
            <div className='nav-register-container' >
              {props.location.pathname !== '/register' &&
                <Link to='/register'>
                  <h3 className='nav-register-button'>Register</h3>
                </Link>
              }
              {props.location.pathname !== '/login' &&
                <Link to='/login'>
                  <h3 className='nav-register-button'>
                    Login
                </h3>
                </Link>
              }
            </div>
          </div>}

        {menu === false ? null : <div className='hamburger-menu'>
          <div className='nav-dropdown-hamburger-div'>
            {props.isLoggedIn === true ? <GiHamburgerMenu className='hamburger-two' alt='hamburger-icon' onClick={() => toggleMenu()} /> : null}

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

            <div onClick={() => randomGame()} className='nav-homepage-button'>
              <GiPerspectiveDiceSixFacesRandom />
              <p>
                Random Game
                </p>
            </div >

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


            <div onClick={() => triggerLogout()} className='nav-homepage-button'>
              <GoSignOut />
              <p>
                Signout
                </p>
            </div>

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
