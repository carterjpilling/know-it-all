import React, { useState } from 'react'
import axios from 'axios';
import { loginUser, logoutUser } from '../../reducks/authReducer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


function Login(props) {
  // console.log(props)
  const [state, setState] = useState({
    email: '',
    username: '',
    password: ''
  })
  // const [registerState, setRegisterState] = useState({
  //   email: '',
  //   username: '',
  //   password: ''
  // })

  const { email, username, password } = state;
  function handleChange(e) {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }))
  }

  function handleLogin(e) {
    // e.preventDefault()

    axios
      .post('/api/auth/login', { username, password })
      .then((res) => {
        props.loginUser(res.data)
        props.history.push('/homepage')
      })
  }

  function handleRegister(e) {
    // e.preventDefault()
    axios.post('/api/auth/register', { email, username, password })
      .then((res) => {
        props.loginUser(res.data)
      })
  }

  function handleLogout() {
    axios.post('/api/auth/logout')
      .then(() => props.logoutUser())
  }

  return (
    <div>
      <form>
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

        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
          placeholder='Email' />

      </form>
      <button onClick={() => { handleLogin() }} >Login</button>
      <button onClick={() => { handleRegister() }}>Register</button>
      <button onClick={() => { handleLogout() }}>Logout</button>
    </div>
  )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { loginUser, logoutUser })(withRouter(Login))