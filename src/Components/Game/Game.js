import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function Game(props) {

  useEffect(() => {
    axios.get(`/api/art/${props.match.params.category}`)
  }, [])
  return (
    <div>
      Game.js
    </div>
  )
}

export default withRouter(Game)