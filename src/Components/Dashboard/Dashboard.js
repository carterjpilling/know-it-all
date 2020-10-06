import React from 'react'
import { Link } from 'react-router-dom'


function Dashboard() {

  return (
    <div className='dashboard-container'>
      <div className='art-bar'>
        <p>know.it_all</p>
      </div>
      <div className='game-container'>
        <div className='picture-box-container'>
          <Link to='/profile'>
            <div className='image-wrapper' >
              <img className='category-picture' src={'https://images.metmuseum.org/CRDImages/ep/original/DP145929.jpg'} alt='Renoir Painting' />
            </div>
          </Link>
          <h2>European Art</h2>
        </div >
        <div className='picture-box-container'>
          <Link to='/profile'>
            <div className='image-wrapper' >
              <img className='category-picture' src={'https://images.metmuseum.org/CRDImages/ep/original/DT46.jpg'} alt='Dancers Painting' />
            </div>
          </Link>
          <div>
            <h2>Paintings</h2>
          </div>
        </div>
        <div className='picture-box-container'>
          <Link to='/profile'>
            <div className='image-wrapper'>
              <img className='category-picture' src={'https://images.metmuseum.org/CRDImages/ad/original/DP-15303-017.jpg'} alt='American Art Painting' />
            </div>
          </Link>
          <h2>American Art</h2>
        </div>
      </div>
    </div>

  )
}

export default Dashboard