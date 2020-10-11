import React, { useState } from 'react'
import axios from 'axios';
import { loginUser, logoutUser } from '../../reducks/authReducer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


function Login(props) {
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const { username, password } = state;
  function handleChange(e) {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }))
  }

  function handleLogin(e) {
    setError(false)
    axios
      .post('/api/auth/login', { username, password })
      .then((res) => {
        props.loginUser(res.data)
        props.history.push('/homepage')
      })
      .catch(() => {
        setError(true)
        setState({
          username: '',
          password: ''
        })
      })
  }

  return (
    <div className='login-body'>
      <div className='login-box'>
        <form className='login-form'>
          <div className='login-text-box'>
            <h3>Login below.</h3>
          </div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={handleChange}
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
        </form>
        <button className='login-button' onClick={() => { handleLogin() }} >Login</button>
        {error === true && <p className='login-error-message'>
          Incorrect username or password.
            </p>}
      </div>
    </div>
  )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { loginUser, logoutUser })(withRouter(Login))