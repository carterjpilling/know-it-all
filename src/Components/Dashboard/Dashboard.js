import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {

  const [box, setBox] = useState(false)
  const [gameInfo, setGameInfo] = useState({ images: [], details: '', link: '', categoryName: '' })
  const [currentIndex, setCurrentIndex] = useState({ index: 0 })


  function displayBox() {
    setBox(!box)
  }

  function displayNextPicture() {
    if (currentIndex.index >= gameInfo.images.length - 1) {
      setCurrentIndex({
        index: 0
      })
    } else {
      setCurrentIndex({
        index: (currentIndex.index + 1)
      })
    }
  }

  function displayLastPicture() {
    if (currentIndex.index <= 0) {
      setCurrentIndex({
        index: gameInfo.length - 1
      })
    } else {
      setCurrentIndex({
        index: (currentIndex.index - 1)
      })
    }
  }





  function catInformationSwitcher(cat) {
    displayBox()
    const EUROPEAN = 'european'
    const ART = 'art'
    const PAINTINGS = 'paintings'
    const AMERICAN = 'american'

    switch (cat) {
      case EUROPEAN:
        setGameInfo({
          ...gameInfo,
          images: [
            "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-039.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/DP231550.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/EP371.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/DT1408.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/DP145948.jpg"],
          details: `Category European features some of Europe's great painters including Vincent Van Gogh, Pierre-August Renoir, and Edgar Degas to name a few. The date of the collection ranges from the 14th century through the late 19th. Click Start below to test your knowledge of European Art!`,
          link: '/game/european/title',
          categoryName: 'European Artwork'
        })
        break
      case ART:
        setGameInfo({
          ...gameInfo,
          images: [
            "https://images.metmuseum.org/CRDImages/ad/original/DT72.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/DP273977.jpg",
            "https://images.metmuseum.org/CRDImages/as/original/DT237.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-025.jpg",
            "https://images.metmuseum.org/CRDImages/is/original/DP241048.jpg"],
          details: '',
          link: '/game/displayed/title',
          categoryName: 'General Art'
        })
        break
      case PAINTINGS:
        setGameInfo({
          ...gameInfo,
          images: [
            "https://images.metmuseum.org/CRDImages/ep/original/DT28_DT29.jpg",
            "https://images.metmuseum.org/CRDImages/ep/original/DT1992.jpg",
            "https://images.metmuseum.org/CRDImages/ad/original/DT2784.jpg",
            "https://images.metmuseum.org/CRDImages/as/original/DP153754.jpg",
            "https://images.metmuseum.org/CRDImages/rl/original/DT707.jpg"],
          details: '',
          link: '/game/permanent/title',
          categoryName: 'Paintings'
        })
        break
      case AMERICAN:
        setGameInfo({
          ...gameInfo,
          images: [
            "https://images.metmuseum.org/CRDImages/ad/original/ap66.242.12.jpg",
            "https://images.metmuseum.org/CRDImages/ad/original/ADA3842.jpg",
            "https://images.metmuseum.org/CRDImages/ad/original/AW.HandA.Rauschner.2017.jpg",
            "https://images.metmuseum.org/CRDImages/ad/original/DP265419.jpg",
            "https://images.metmuseum.org/CRDImages/ad/original/DT2040.jpg"],
          details: '',
          link: '/game/american/title',
          categoryName: 'American'
        })
        break
      default:
        return null
    }
  }





  return (
    <div className='dashboard-container'>
      <p>Click on an Image to Start a Game!</p>
      <div>
        <div>
          <img src={'https://images.metmuseum.org/CRDImages/ep/original/DP-14936-039.jpg'} alt='Renoir Painting' onClick={() => catInformationSwitcher('european')} />
        </div>
        <div>
          <img src={'https://images.metmuseum.org/CRDImages/gr/original/DT6494.jpg'} alt='Art Painting' onClick={() => catInformationSwitcher('art')} />
        </div>
        <div>
          <img src={'https://images.metmuseum.org/CRDImages/ep/original/DT46.jpg'} alt='Dancers Painting' onClick={() => catInformationSwitcher('paintings')} />
        </div>
        <div>

          <img src={'https://images.metmuseum.org/CRDImages/ad/original/DP-15303-017.jpg'} alt='American Art Painting' onClick={() => catInformationSwitcher('american')} />
        </div>
      </div>

      {box === true &&
        <div className='pop-up-game-box' >
          <div>
            <button onClick={() => displayLastPicture()}> Back </button>
            <img src={gameInfo.images[currentIndex.index]} alt={gameInfo.categoryName} />
            <button onClick={() => displayNextPicture()}> Forward </button>
          </div>
          <p>{gameInfo.details}</p>
          <div className='pop-up-box-button-container'>
            <button onClick={() => displayBox()}>Cancel</button>
            <Link to={gameInfo.link}>Play the Game!</Link>
          </div>
        </div>
      }

    </div>

  )
}

export default Dashboard