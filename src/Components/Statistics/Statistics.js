import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { ResponsiveBar } from '@nivo/bar'
import './Statistics.css'


function Statistics(props) {
  const [allStats, setStats] = useState({ responses: [], isLoading: false })
  const [databank, setDatabank] = useState({ dataArr: [] })
  const [userStats, setUserStats] = useState({ responses: [] })
  const [userDataBank, setUserDataBank] = useState({ dataArr: [] })
  const [allGraphKeys, setAllGraphKeys] = useState({
    date: 'date',
    artist: 'artist',
    title: 'title'
  })
  const [userGraphKeys, setUserGraphKeys] = useState({
    date: 'date',
    artist: 'artist',
    title: 'title'
  })




  useEffect(() => {
    axios.get('/api/stats').then((res) => {
      setStats({ responses: res.data, isLoading: true })
    })

  }, [])

  useEffect(() => {
    if (allStats.isLoading === true) {
      getAverages()
      if (props.isLoggedIn === true) {
        getUserStats()

      }
    }
  }, [allStats])

  useEffect(() => {
    if (allStats.isLoading === true) {
      userAverage()
    }
  }, [userStats])

  function toggleUserGraphType(type) {
    if (userGraphKeys[type] === null) {
      setUserGraphKeys({
        ...userGraphKeys,
        [type]: type,
        [type]: type,
        [type]: type
      })
    } else {
      setUserGraphKeys({
        ...userGraphKeys,
        [type]: null,
        [type]: null,
        [type]: null
      })
    }
  }
  //toggleUserCategories is not functioning.
  //0 American, 1. European, 2. Permanent. 3 All Displayed
  function toggleUserCategories(index, cat) {
    let obj = [{}, {}, {}, {}]
    if (userDataBank.dataArr[index].category === cat) {
      userDataBank.dataArr.splice(index, null, obj[index])
    } else {
      obj[index] = userDataBank.dataArr.splice(index, 1)
    }
    console.log(userDataBank.dataArr.splice(index, 1))
    console.log(obj[index])
  }
  function toggleAllCategories() {
  }


  function toggleAllGraphType(type) {
    if (allGraphKeys[type] === null) {
      setAllGraphKeys({
        ...allGraphKeys,
        [type]: type,
        [type]: type,
        [type]: type
      })
    } else {
      setAllGraphKeys({
        ...allGraphKeys,
        [type]: null,
        [type]: null,
        [type]: null
      })
    }
  }

  function getUserStats() {
    const userArr = []
    allStats.responses.map((e) => {
      if (e.user_id === props.user.id) {
        userArr.push(e)
      }

    })
    setUserStats({ responses: userArr })

  }

  function deleteUserStats() {
    axios.delete('/api/stats')
  }

  function userAverage() {
    const AMERICAN = 'American'
    const EUROPEAN = 'European'
    const PERMANENT_PAINTINGS = 'Permanant'
    const DISPLAYED_ART = 'Displayed'
    const VAN_GOGH = 'Van_Gogh'

    const DATE = 'Date'
    const ARTIST = 'Artist Name'
    const TITLE = 'Title'

    let americDate = []
    let americArtist = []
    let americTitle = []

    let euroDate = []
    let euroArtist = []
    let euroTitle = []

    let permDate = []
    let permArtist = []
    let permTitle = []

    let dispDate = []
    let dispArtist = []
    let dispTitle = []

    let americPoints = []
    let euroPoints = []
    let permPoints = []
    let disPoints = []


    for (let i = 0; i < userStats.responses.length; i++) {
      switch (userStats.responses[i].category) {
        case AMERICAN:
          americPoints.push(userStats.responses[i].points_earned)
          switch (userStats.responses[i].question_type) {
            case DATE:
              americDate.push(userStats.responses[i].points_earned)
              break
            case ARTIST:
              americArtist.push(userStats.responses[i].points_earned)
              break
            case TITLE:
              americTitle.push(userStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case EUROPEAN:
          euroPoints.push(userStats.responses[i].points_earned)
          switch (userStats.responses[i].question_type) {
            case DATE:
              euroDate.push(userStats.responses[i].points_earned)
              break
            case ARTIST:
              euroArtist.push(userStats.responses[i].points_earned)
              break
            case TITLE:
              euroTitle.push(userStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case PERMANENT_PAINTINGS:
          permPoints.push(userStats.responses[i].points_earned)
          switch (userStats.responses[i].question_type) {
            case DATE:
              permDate.push(userStats.responses[i].points_earned)
              break
            case ARTIST:
              permArtist.push(userStats.responses[i].points_earned)
              break
            case TITLE:
              permTitle.push(userStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case DISPLAYED_ART:
          disPoints.push(userStats.responses[i].points_earned)
          switch (userStats.responses[i].question_type) {
            case DATE:
              dispDate.push(userStats.responses[i].points_earned)
              break
            case ARTIST:
              dispArtist.push(userStats.responses[i].points_earned)
              break
            case TITLE:
              dispTitle.push(userStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case VAN_GOGH:
          break
        default:
          return null
      }
    }

    const gameObject = { americDate, americArtist, americTitle, euroDate, euroArtist, euroTitle, permDate, permArtist, permTitle, dispDate, dispArtist, dispTitle, americPoints, euroPoints, permPoints, disPoints }

    for (let prop in gameObject) {
      let average = 0
      let length = 0
      if (gameObject[prop].length > 0) {
        average = gameObject[prop].reduce((prev, curr) => prev + curr) / gameObject[prop].length
        length = gameObject[prop].length
      }
      gameObject[prop] = { average, length }
    }
    setUserDataBank({
      dataArr: [
        {
          category: "General Art",
          average: gameObject.disPoints.average,
          gamesPlayed: gameObject.disPoints.length,
          date: gameObject.dispDate.average,
          dateGames: gameObject.dispDate.length,
          artist: gameObject.dispArtist.average,
          artistGames: gameObject.dispArtist.length,
          title: gameObject.dispTitle.average,
          titleGames: gameObject.dispTitle.length
        },
        {
          category: "American",
          average: gameObject.americPoints.average,
          gamesPlayed: gameObject.americPoints.length,
          date: gameObject.americDate.average,
          dateGames: gameObject.americDate.length,
          artist: gameObject.americArtist.average,
          artistGames: gameObject.americArtist.length,
          title: gameObject.americTitle.average,
          titleGames: gameObject.americTitle.length

        },
        {
          category: "European",
          average: gameObject.euroPoints.average,
          gamesPlayed: gameObject.euroPoints.length,
          date: gameObject.euroDate.average,
          dateGames: gameObject.euroDate.length,
          artist: gameObject.euroArtist.average,
          artistGames: gameObject.euroArtist.length,
          title: gameObject.euroTitle.average,
          titleGames: gameObject.euroTitle.length
        },
        {
          category: "General Paintings",
          average: gameObject.permPoints.average,
          gamesPlayed: gameObject.permPoints.length,
          date: gameObject.permDate.average,
          dateGames: gameObject.permDate.length,
          artist: gameObject.permArtist.average,
          artistGames: gameObject.permArtist.length,
          title: gameObject.permTitle.average,
          titleGames: gameObject.permTitle.length
        }

      ]
    })
  }

  function getAverages() {
    const AMERICAN = 'American'
    const EUROPEAN = 'European'
    const PERMANENT_PAINTINGS = 'Permanant'
    const DISPLAYED_ART = 'Displayed'
    const VAN_GOGH = 'Van_Gogh'

    const DATE = 'Date'
    const ARTIST = 'Artist Name'
    const TITLE = 'Title'

    let americDate = []
    let americArtist = []
    let americTitle = []

    let euroDate = []
    let euroArtist = []
    let euroTitle = []

    let permDate = []
    let permArtist = []
    let permTitle = []

    let dispDate = []
    let dispArtist = []
    let dispTitle = []


    let americPoints = []
    let euroPoints = []
    let permPoints = []
    let disPoints = []


    for (let i = 0; i < allStats.responses.length; i++) {
      switch (allStats.responses[i].category) {
        case AMERICAN:
          americPoints.push(allStats.responses[i].points_earned)
          switch (allStats.responses[i].question_type) {
            case DATE:
              americDate.push(allStats.responses[i].points_earned)
              break
            case ARTIST:
              americArtist.push(allStats.responses[i].points_earned)
              break
            case TITLE:
              americTitle.push(allStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case EUROPEAN:
          euroPoints.push(allStats.responses[i].points_earned)
          switch (allStats.responses[i].question_type) {
            case DATE:
              euroDate.push(allStats.responses[i].points_earned)
              break
            case ARTIST:
              euroArtist.push(allStats.responses[i].points_earned)
              break
            case TITLE:
              euroTitle.push(allStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case PERMANENT_PAINTINGS:
          permPoints.push(allStats.responses[i].points_earned)
          switch (allStats.responses[i].question_type) {
            case DATE:
              permDate.push(allStats.responses[i].points_earned)
              break
            case ARTIST:
              permArtist.push(allStats.responses[i].points_earned)
              break
            case TITLE:
              permTitle.push(allStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case DISPLAYED_ART:
          disPoints.push(allStats.responses[i].points_earned)
          switch (allStats.responses[i].question_type) {
            case DATE:
              dispDate.push(allStats.responses[i].points_earned)
              break
            case ARTIST:
              dispArtist.push(allStats.responses[i].points_earned)
              break
            case TITLE:
              dispTitle.push(allStats.responses[i].points_earned)
              break
            default:
              return null
          }
          break
        case VAN_GOGH:
          break
        default:
          return null
      }
    }

    const gameObject = { americDate, americArtist, americTitle, euroDate, euroArtist, euroTitle, permDate, permArtist, permTitle, dispDate, dispArtist, dispTitle, americPoints, euroPoints, permPoints, disPoints }

    for (let prop in gameObject) {
      let average = 0
      let length = 0
      if (gameObject[prop].length > 0) {
        average = gameObject[prop].reduce((prev, curr) => prev + curr) / gameObject[prop].length
        length = gameObject[prop].length
      }
      gameObject[prop] = { average, length }
    }
    setDatabank({
      dataArr: [
        {
          category: "General Art",
          average: gameObject.disPoints.average,
          gamesPlayed: gameObject.disPoints.length,
          date: gameObject.dispDate.average,
          dateGames: gameObject.dispDate.length,
          artist: gameObject.dispArtist.average,
          artistGames: gameObject.dispArtist.length,
          title: gameObject.dispTitle.average,
          titleGames: gameObject.dispTitle.length
        },
        {
          category: "American",
          average: gameObject.americPoints.average,
          gamesPlayed: gameObject.americPoints.length,
          date: gameObject.americDate.average,
          dateGames: gameObject.americDate.length,
          artist: gameObject.americArtist.average,
          artistGames: gameObject.americArtist.length,
          title: gameObject.americTitle.average,
          titleGames: gameObject.americTitle.length

        },
        {
          category: "European",
          average: gameObject.euroPoints.average,
          gamesPlayed: gameObject.euroPoints.length,
          date: gameObject.euroDate.average,
          dateGames: gameObject.euroDate.length,
          artist: gameObject.euroArtist.average,
          artistGames: gameObject.euroArtist.length,
          title: gameObject.euroTitle.average,
          titleGames: gameObject.euroTitle.length
        },
        {
          category: "General Paintings",
          average: gameObject.permPoints.average,
          gamesPlayed: gameObject.permPoints.length,
          date: gameObject.permDate.average,
          dateGames: gameObject.permDate.length,
          artist: gameObject.permArtist.average,
          artistGames: gameObject.permArtist.length,
          title: gameObject.permTitle.average,
          titleGames: gameObject.permTitle.length
        }
      ]
    })
  }

  if (allStats.isLoading === true) {
    return (
      <div className='grandparent-statistics-container'>
        <div className='statistics-container'>
          <button onClick={() => deleteUserStats()}>Delete stats.</button>
          <div>
            <button onClick={() => toggleUserGraphType('artist')}>Toggle Artist Game Type</button>
            <button onClick={() => toggleUserGraphType('title')}>Toggle Title Game Type</button>
            <button onClick={() => toggleUserGraphType('date')}>Toggle Date Game Type</button>
          </div>
          <div>
            <button onClick={() => toggleUserCategories(0, 'American', 'American')}>Toggle American Category</button>
          </div>
          <ResponsiveBar data={userDataBank.dataArr}
            keys={['average']}
            indexBy="category"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={{ scheme: 'category10' }}
            colorBy="index"
            defs={[

            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Category',
              legendPosition: 'middle',
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Average Score',
              legendPosition: 'middle',
              legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[

            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
        <div className='statistics-container'>
          {/* <div>
            <button onClick={() => toggleAllGraphType('artist')}>Toggle Artist Game Type</button>
            <button onClick={() => toggleAllGraphType('title')}>Toggle Title Game Type</button>
            <button onClick={() => toggleAllGraphType('date')}>Toggle Date Game Type</button>
          </div> */}
          <ResponsiveBar data={databank.dataArr}
            keys={['average']}
            indexBy="category"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={{ scheme: 'category10' }}
            colorBy="index"
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: 'fries'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'sandwich'
                },
                id: 'lines'
              }
            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Category',
              legendPosition: 'middle',
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Average Score',
              legendPosition: 'middle',
              legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[

            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}


const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Statistics)