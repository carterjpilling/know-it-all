import React, { useState } from 'react'



function Dashboard() {


  const [gameInfo, setGameInfo] = useState({ images: [], details: '', link: '', categoryName: '' })




  function catInformationSwitcher(cat) {

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
      <div className='art-bar'>
        <p>art.</p>
      </div>
      <div className='game-container'>
        <div className='picture-box-container'>
          <div className='image-wrapper'>
            <img className='category-picture' src={'https://images.metmuseum.org/CRDImages/ep/original/DP145929.jpg'} alt='Renoir Painting' onClick={() => catInformationSwitcher('european')} />
          </div>
          <h2>European Art</h2>
          {/* <p>The European Category features some of Europe's great painters including Vincent Van Gogh, Pierre-August Renoir, and Edgar Degas to name a few. The date of the collection ranges from the 14th century through the late 19th. Click Start below to test your knowledge of European Art!</p> */}

        </div >
        <div className='picture-box-container'>
          <div className='image-wrapper'>
            <img className='category-picture' src={'https://images.metmuseum.org/CRDImages/ep/original/DT46.jpg'} alt='Dancers Painting' onClick={() => catInformationSwitcher('paintings')} />
          </div>
          <div>
            <h2>Paintings</h2>
          </div>
          {/* <p>Put your knowledge of Paintings to the test. American, French, Italian and other nationalities fill this category. See paintings from the modern, renaissance, baroque, and latest century.</p> */}

        </div>
        <div className='picture-box-container'>
          <div className='image-wrapper'>
            <img className='category-picture' src={'https://images.metmuseum.org/CRDImages/ad/original/DP-15303-017.jpg'} alt='American Art Painting' onClick={() => catInformationSwitcher('american')} />
          </div>
          <h2>American Art</h2>
          {/* <p>While American art might be relatively newer, it will certainly test your knowledge of the American continent's art.</p> */}

        </div>
      </div>


    </div>

  )
}

export default Dashboard