const axios = require('axios')


module.exports = {
  getArt: async (req, res) => {
    let array = []
    const { category } = req.params

    const EUROPEAN = 'european'
    const VAN_GOGH = 'van_gogh'
    const DISPLAYED_ART = 'displayed_art'
    const PERMANENT_PAINTINGS = 'permanent_paintings'
    const AMERICAN = 'american'


    switch (category) {
      case EUROPEAN:
        await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&medium=Paintings&isOnView=true&q=images').then((res) => {
          array = res.data.objectIDs
          console.log('European Hit')
        })
        break
      case VAN_GOGH:
        await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=Van_Gogh').then((res) => {
          array = res.data.objectIDs
          console.log('Van Gogh hit')
        })
        break
      case DISPLAYED_ART:
        await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isOnView=true&q=images').then((res) => {
          array = res.data.objectIDs
          console.log('Displayed Hit')
        })
        break
      case PERMANENT_PAINTINGS:
        await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&isHighlight=true&q=images').then((res) => {
          array = res.data.objectIDs
          console.log('Perm Hit')
        })
        break
      case AMERICAN:
        await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=1&q=images').then((res) => {
          array = res.data.objectIDs
          console.log('American Hit')
        })
        break
      default:
        return null
    }

    const answerSelection = []

    for (let i = 0; i < 10; i++) {
      let group1 = [{}, {}, {}, {}]

      let rand1
      let rand2
      let rand3
      let rand4

      while (rand1 === undefined) {
        rand1 = array[Math.floor(Math.random() * array.length - 1)]
      }

      while (rand2 === undefined) {
        rand2 = array[Math.floor(Math.random() * array.length - 1)]
      }

      while (rand3 === undefined) {
        rand3 = array[Math.floor(Math.random() * array.length - 1)]
      }

      while (rand4 === undefined) {
        rand4 = array[Math.floor(Math.random() * array.length - 1)]
      }

      const randomArray = [rand1, rand2, rand3, rand4]
      console.log(randomArray)
      const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
      const promiseArr = randomArray.map(async artId => {
        return await axios.get(baseUrl + artId)
      })
      //parallel vs nonparallel
      //promiseAll (arrayOfPromises) waits for all. Doesn't care of order.

      const resArr = await Promise.all(promiseArr)
      resArr.forEach((res, index) => {
        if (res.data.primaryImage === "") {
          group1[index].primaryImage = "Unknown Picture"
        } else {
          group1[index].primaryImage = res.data.primaryImage
        }

        if (res.data.title === "") {
          group1[index].title = "Unknown Title"
        } else {
          group1[index].title = res.data.title
        }

        if (res.data.objectDate === "") {
          group1[index].objectDate = "Unknown Date"
        } else {
          group1[index].objectDate = res.data.objectDate
        }

        if (res.data.artistDisplayName === "") {
          group1[index].artistDisplayName = "Unknown Artist"
        } else {
          group1[index].artistDisplayName = res.data.artistDisplayName
        }
      })
      answerSelection.push(group1)
      console.log('Success')
    }
    res.status(200).send(answerSelection)
  }
}