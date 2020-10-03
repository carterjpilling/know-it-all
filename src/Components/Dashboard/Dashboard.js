import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {

  const [box, setBox] = useState(false)

  function displayBox() {
    setBox(!box)
  }






  return (
    <div className='dashboard-container'>
      {/* <Game chosenCategory={category} /> */}
      <div><div>
        <img src={'https://images.metmuseum.org/CRDImages/ep/original/DP-14936-039.jpg'} alt='Renoir Painting' onClick={() => displayBox()} />
        <Link to={'/game/european/title'}>
          European Art On Display - Title
      </Link>
        <Link to={'/game/european/artist'}>
          European Art On Display - Artist
      </Link>
        <Link to={'/game/european/date'}>
          European Art On Display - Date
      </Link>
      </div>
        <div>
          <Link to={'/game/displayed/title'}>
            ALl Displayed Art - Title
      </Link>
          <Link to={'/game/displayed/artist'}>
            ALl Displayed Art - Artist
      </Link>
          <Link to={'/game/displayed/date'}>
            ALl Displayed Art - Date
      </Link>
        </div>
        <div>
          <Link to={'/game/permanent/title'}>
            Painting Collection on Display - Title
      </Link>
          <Link to={'/game/permanent/artist'}>
            Painting Collection on Display - Artist
      </Link>
          <Link to={'/game/permanent/date'}>
            Painting Collection on Display - Date
      </Link>
        </div>
        <div>
          <Link to={'/game/american/artist'}>
            American Collection - Artist
      </Link>
          <Link to={'/game/american/title'}>
            American Collection - Title
      </Link>
          <Link to={'/game/american/date'}>
            American Collection - Date
      </Link>
        </div></div>

      {box === true &&
        <div className='pop-up-game-box' >
          <img />
        </div>
      }

    </div>

  )
}

export default Dashboard