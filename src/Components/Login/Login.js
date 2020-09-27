import React, { useState } from 'react'
import axios from 'axios';
import { loginUser } from '../../reducks/authReducer'
import { connect } from 'react-redux'


function Login(props) {
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const { username, password } = state;

  function handleChange(e) {
    const { name, value } = e.target;
    setState(state => ({ ...state, [name]: value }))
  }

  function handleLogin() {
    axios
      .post('/api/auth/register', { username, password })
      .then((res) => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
  }

  return (
    <div>

    </div>
  )
}

export default connect(null, { loginUser })(Login)