import React, { useState } from 'react'
import axios from 'axios';
import { loginUser } from '../../reducks/authReducer'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Register(props) {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: ''
  })

  const { email, username, password } = state;
  function handleChange(e) {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }))
  }


  function handleRegister(e) {
    axios.post('/api/auth/register', { email, username, password })
      .then((res) => {
        props.loginUser(res.data)
        props.history.push('/homepage')
      })
  }

  return (
    <div className='register-body'>
      <div className='register-box'>
        <form >
          <div className='register-text-box'>
            <h3>Are you a know it all?
            </h3>
            <h3>
              Register below.
              </h3>
          </div>
          <div>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleChange}
            /></div>
          <div>
            <input
              type='text'
              name='email'
              value={email}
              onChange={handleChange}
              placeholder='Email' />
          </div>

        </form>
        <button className='register-button' onClick={() => { handleRegister() }}>Register</button>
        {/* <div>
          <p>Already registered? Click <Link to='/homepage'>here</Link> to Login</p>
          <button>Login</button>
        </div> */}
      </div>
    </div>
  )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { loginUser })(withRouter(Register))
