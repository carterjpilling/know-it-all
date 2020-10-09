import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import skullImage from '../../assets/skull.jpg'
import americanImage from '../../assets/american.jpg'
import danceImage from '../../assets/dance.jpg'


function Dashboard(props) {
  return (
    <div className='dashboard-container'>
      <div className='art-bar'>
        <h2 className='dash-footer-title'>Do You Know It All?</h2>
        <p>Click on a category to find out!</p>
      </div>
      <div className='game-container'>
        <div className='picture-box-container'>
          {props.isLoggedIn === true ?
            <Link to='/game/european' >
              <div className='image-wrapper' >
                <img className='category-picture' src={skullImage} alt='Renoir Painting' />
              </div>
            </Link>
            :
            <div className='fake-image-wrapper' >
              <img className='category-picture' src={skullImage} alt='Renoir Painting' /> </div>}
          <h2>European Art</h2>
        </div >
        <div className='picture-box-container'>
          {props.isLoggedIn === true ?
            <Link to='/game/permanent'>
              <div className='image-wrapper' >
                <img className='category-picture' src={danceImage} alt='Dancers Painting' />
              </div>
            </Link>
            : <div className='fake-image-wrapper' >
              <img className='category-picture' src={danceImage} alt='Dancers Painting' />
            </div>
          }
          <div>
            <h2>Paintings</h2>
          </div>
        </div>
        <div className='picture-box-container'>
          {props.isLoggedIn === true ?
            <Link to='/game/american'>
              <div className='image-wrapper'>
                <img className='category-picture' src={americanImage} alt='American Art Painting' />
              </div>
            </Link>
            : <div className='fake-image-wrapper'>
              <img className='category-picture' src={americanImage} alt='American Art Painting' />
            </div>}
          <h2>American Art</h2>
        </div>
      </div>
      <div className='art-bar-two'>
        {/* <h2 className='dash-footer-title'>Do You Know It All?</h2>
        <p>Click on a category to find out!</p> */}

      </div>
    </div>

  )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Dashboard)