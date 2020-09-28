import React, { useState, useEffect } from 'react'
import Game from '../Game/Game'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {

  const [category, setCategory] = useState({
    title: false,
    artist: false,
    date: false
  })

  useEffect(() => {
    setCategory({
      title: false,
      artist: false,
      date: false
    })
  }, [])





  return (
    <div>
      {/* <Game chosenCategory={category} /> */}
      <Link to={'/game/european'}>MET European Art On Display - Title</Link>
      <Link to={'/game/european'}> MET European Art On Display - Artist</Link>
      <Link to={'/game/displayed_art'}> MET Displayed Art - Date</Link>
      <Link to={'/game/permanent_paintings'}> MET Permanent Painting Collection on Display - Artist</Link>
      <Link to={'/game/permanent_paintings'}> MET Permanent Painting Collection on Display - Title</Link>
      <Link to={'/game/american'}> MET American Collection - Title</Link>
    </div>
  )
}

export default Dashboard