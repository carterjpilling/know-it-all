import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowleft from '../../pictures/arrow-picture.jpg'

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
          details: `The European Category features some of Europe's great painters including Vincent Van Gogh, Pierre-August Renoir, and Edgar Degas to name a few. The date of the collection ranges from the 14th century through the late 19th. Click Start below to test your knowledge of European Art!`,
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
          details: 'The Art Category features art from Europe, Asia, Africa, North and South America. ',
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
          details: 'Put your knowledge of Paintings to the test. American, French, Italian and other nationalities fill this category. See paintings from the modern, renaissance, baroque, and latest century.',
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
          details: `While American art might be relatively newer, it will certainly test your knowledge of the American continent's art.`,
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
      <div className='game-container'>
        <div className='left-side-game-container'>
          <img className='picture-container' src={'https://images.metmuseum.org/CRDImages/ep/original/DP145929.jpg'} alt='Renoir Painting' onClick={() => catInformationSwitcher('european')} />
        </div>
        <div className='right-side-game-container'>
          <div className='right-top-container'>
            <img src={'https://images.metmuseum.org/CRDImages/gr/original/DT6494.jpg'} alt='Art Painting' onClick={() => catInformationSwitcher('art')} />
            <img src={'https://images.metmuseum.org/CRDImages/ep/original/DT46.jpg'} alt='Dancers Painting' onClick={() => catInformationSwitcher('paintings')} />
          </div>
          <div className='right-bottom-container'>
            <img src={'https://images.metmuseum.org/CRDImages/ad/original/DP-15303-017.jpg'} alt='American Art Painting' onClick={() => catInformationSwitcher('american')} />
          </div>
        </div>

      </div>

      {box === true &&
        <div className='pop-up-game-box' >
          <div>
            <button onClick={() => displayLastPicture()}>  </button>
            <img className='left-arrow' />
            <img src={gameInfo.images[currentIndex.index]} alt={gameInfo.categoryName} />
            <img src={'https://static.thenounproject.com/png/196764-200.png'} />
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