import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Statistics() {
  const [allStats, setStats] = useState({ responses: [], isLoading: false })
  const [databank, setDatabank] = useState({ dataArr: [] })

  useEffect(() => {
    axios.get('/api/stats').then((res) => {
      setStats({ responses: res.data, isLoading: true })
      console.log('hit setStats')
    })

  }, [])

  useEffect(() => {
    if (allStats.isLoading === true) {
      getAverages()
    }
  }, [allStats])


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
    console.log(gameObject.americTitle)
    //gameObject.americTitle.average
    //gameObject.americTitle.length
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
    console.log(databank.dataArr)
  }
  console.log(databank.dataArr)

  if (allStats.isLoading === true) {
    return (
      <div>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default Statistics

/*
GOAL:
[{

  "category":'American',
  'Artist-Name: AVG-DATA,
  'Title: AVG-DATA,
  'Data': AVG-DATA,

},
{},{},{}]
*/