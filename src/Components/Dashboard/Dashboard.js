import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {









  return (
    <div>
      {/* <Game chosenCategory={category} /> */}
      <Link to={'/game/european/title'}>MET European Art On Display - Title</Link>
      <Link to={'/game/european/artist'}> MET European Art On Display - Artist</Link>
      <Link to={'/game/displayed/date'}> MET Displayed Art - Date</Link>
      <Link to={'/game/permanent/artist'}> MET Permanent Painting Collection on Display - Artist</Link>
      <Link to={'/game/permanent/title'}> MET Permanent Painting Collection on Display - Title</Link>
      <Link to={'/game/american/title'}> MET American Collection - Title</Link>
    </div>
  )
}

export default Dashboard