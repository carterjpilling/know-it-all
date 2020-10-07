import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../reducks/authReducer'
import { connect } from 'react-redux'
import skullImage from '../../assets/skull.jpg'
import americanImage from '../../assets/american.jpg'
import danceImage from '../../assets/dance.jpg'


function Dashboard(props) {

  useEffect(() => {
    props.getUser()
  }, [])
  console.log(props.user.points)

  return (
    <div className='dashboard-container'>
      <div className='art-bar'>
        <p>know.it_all</p>
      </div>
      <div className='game-container'>
        <div className='picture-box-container'>
          <Link to='/game/european'>
            <div className='image-wrapper' >
              <img className='category-picture' src={skullImage} alt='Renoir Painting' />
            </div>
          </Link>
          <h2>European Art</h2>
        </div >
        <div className='picture-box-container'>
          <Link to='/game/permanent'>
            <div className='image-wrapper' >
              <img className='category-picture' src={danceImage} alt='Dancers Painting' />
            </div>
          </Link>
          <div>
            <h2>Paintings</h2>
          </div>
        </div>
        <div className='picture-box-container'>
          <Link to='/game/american'>
            <div className='image-wrapper'>
              <img className='category-picture' src={americanImage} alt='American Art Painting' />
            </div>
          </Link>
          <h2>American Art</h2>
        </div>
      </div>
    </div>

  )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { getUser })(Dashboard)