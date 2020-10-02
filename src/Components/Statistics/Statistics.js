import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


function Statistics(props) {
  const [allStats, setStats] = useState({ responses: [], isLoading: false })
  const [databank, setDatabank] = useState({ dataArr: [] })
  const [userStats, setUserStats] = useState({ responses: [] })
  const [userDataBank, setUserDataBank] = useState({ dataArr: [] })

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

  function getUserStats() {
    const userArr = []
    allStats.responses.map((e) => {
      if (e.user_id === props.user.id) {
        userArr.push(e)
      }

    })
    setUserStats({ responses: userArr })

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


    for (let i = 0; i < userStats.responses.length; i++) {
      switch (userStats.responses[i].category) {
        case AMERICAN:
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

    const gameObject = { americDate, americArtist, americTitle, euroDate, euroArtist, euroTitle, permDate, permArtist, permTitle, dispDate, dispArtist, dispTitle }

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
          category: "American",
          date: gameObject.americDate.average,
          dateGames: gameObject.americDate.length,
          artist: gameObject.americArtist.average,
          artistGames: gameObject.americArtist.length,
          title: gameObject.americTitle.average,
          titleGames: gameObject.americTitle.length

        },
        {
          category: "European",
          date: gameObject.euroDate.average,
          dateGames: gameObject.euroDate.length,
          artist: gameObject.euroArtist.average,
          artistGames: gameObject.euroArtist.length,
          title: gameObject.euroTitle.average,
          titleGames: gameObject.euroTitle.length
        },
        {
          category: "Permanent Pieces",
          date: gameObject.permDate.average,
          dateGames: gameObject.permDate.length,
          artist: gameObject.permArtist.average,
          artistGames: gameObject.permArtist.length,
          title: gameObject.permTitle.average,
          titleGames: gameObject.permTitle.length
        },
        {
          category: "All Displayed Pieces",
          date: gameObject.dispDate.average,
          dateGames: gameObject.dispDate.length,
          artist: gameObject.dispArtist.average,
          artistGames: gameObject.dispArtist.length,
          title: gameObject.dispTitle.average,
          titleGames: gameObject.dispTitle.length
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


    for (let i = 0; i < allStats.responses.length; i++) {
      switch (allStats.responses[i].category) {
        case AMERICAN:
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

    const gameObject = { americDate, americArtist, americTitle, euroDate, euroArtist, euroTitle, permDate, permArtist, permTitle, dispDate, dispArtist, dispTitle }

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
          category: "American",
          date: gameObject.americDate.average,
          dateGames: gameObject.americDate.length,
          artist: gameObject.americArtist.average,
          artistGames: gameObject.americArtist.length,
          title: gameObject.americTitle.average,
          titleGames: gameObject.americTitle.length

        },
        {
          category: "European",
          date: gameObject.euroDate.average,
          dateGames: gameObject.euroDate.length,
          artist: gameObject.euroArtist.average,
          artistGames: gameObject.euroArtist.length,
          title: gameObject.euroTitle.average,
          titleGames: gameObject.euroTitle.length
        },
        {
          category: "Permanent Pieces",
          date: gameObject.permDate.average,
          dateGames: gameObject.permDate.length,
          artist: gameObject.permArtist.average,
          artistGames: gameObject.permArtist.length,
          title: gameObject.permTitle.average,
          titleGames: gameObject.permTitle.length
        },
        {
          category: "All Displayed Pieces",
          date: gameObject.dispDate.average,
          dateGames: gameObject.dispDate.length,
          artist: gameObject.dispArtist.average,
          artistGames: gameObject.dispArtist.length,
          title: gameObject.dispTitle.average,
          titleGames: gameObject.dispTitle.length
        }
      ]
    })
  }

  if (allStats.isLoading === true) {
    return (
      <div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}


const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Statistics)