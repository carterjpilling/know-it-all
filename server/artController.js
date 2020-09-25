const axios = require('axios')

module.exports = {
  getVanGogh: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //Van Gogh 210 Responses 9.25.20. Pulling Titles. 
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=Van_Gogh').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

    answerSelection.push(id)

    //Need to write something so that they don't pull the same data. Maybe a splice or a if ( !== ).
    //Need to have a catch if the artist has no name. 

    await axios.get(baseUrl + rand1).then((ans1) => {
      answerSelection.push(ans1.data.title)

    })

    await axios.get(baseUrl + rand2).then((ans2) => {

      answerSelection.push(ans2.data.title)

    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      answerSelection.push(ans3.data.title)

    })

    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  },
  europeanArtistPaintings: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //On display European Art (11), Results 180 9.25.20. Pulling Artist Name
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&medium=Paintings&isOnView=true&q=images').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

    answerSelection.push(id)

    await axios.get(baseUrl + rand1).then((ans1) => {
      answerSelection.push(ans1.data.artistDisplayName)

    })

    await axios.get(baseUrl + rand2).then((ans2) => {

      answerSelection.push(ans2.data.artistDisplayName)

    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      answerSelection.push(ans3.data.artistDisplayName)

    })

    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  },
  onDisplayHighlightsName: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //On display highlights (permanant collect), not restricted to paintings. Results 263 9.25.20. Pulling objectTitle.
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isOnView=true&q=images').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


    await axios.get(baseUrl + rand1).then((ans1) => {
      if (ans1.data.objectName === "") {
        answerSelection.push("Unknown Title")
      } else {
        answerSelection.push(ans1.data.objectName)
      }
    })

    answerSelection.push(id)

    await axios.get(baseUrl + rand2).then((ans2) => {
      if (ans2.data.objectName === "") {
        answerSelection.push("Unknown Title")
      } else {
        answerSelection.push(ans2.data.objectName)
      }
    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      if (ans3.data.objectName === "") {
        answerSelection.push("Unknown Title")
      } else {
        answerSelection.push(ans3.data.objectName)
      }
    })


    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  },
  onDisplayHighlightsDate: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //On display highlights (permanant collect), not restricted to paintings. Results 263 9.25.20. Pulling objectDate.
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isOnView=true&q=images').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


    await axios.get(baseUrl + rand1).then((ans1) => {
      answerSelection.push(ans1.data.objectDate)

    })

    answerSelection.push(id)

    await axios.get(baseUrl + rand2).then((ans2) => {

      answerSelection.push(ans2.data.objectDate)

    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      answerSelection.push(ans3.data.objectDate)

    })


    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  },


  allPaintingsHighlights: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //Met highlights (permanant collect, not necessarily on view), restricted to paintings. Results 125 9.25.20. Pulling artist Display Name.
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&isHighlight=true&q=images').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


    await axios.get(baseUrl + rand1).then((ans1) => {
      if (ans1.data.artistDisplayName === "") {
        answerSelection.push("Unknown Artist")
      } else {
        answerSelection.push(ans1.data.artistDisplayName)
      }
    })

    answerSelection.push(id)

    await axios.get(baseUrl + rand2).then((ans2) => {
      if (ans2.data.artistDisplayName === "") {
        answerSelection.push("Unknown Artist")
      } else {
        answerSelection.push(ans2.data.artistDisplayName)
      }
    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      if (ans3.data.artistDisplayName === "") {
        answerSelection.push("Unknown Artist")
      } else {
        answerSelection.push(ans3.data.artistDisplayName)
      }
    })


    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  },
  allDisplayedArt: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //All displayed art at the met, restricted to nothing. Results 1916 9.25.20. Pulling objectDate.
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=images').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


    await axios.get(baseUrl + rand1).then((ans1) => {
      if (ans1.data.objectDate === "") {
        answerSelection.push("Unknown Date")
      } else {
        answerSelection.push(ans1.data.objectDate)
      }
    })

    answerSelection.push(id)

    await axios.get(baseUrl + rand2).then((ans2) => {
      if (ans2.data.objectDate === "") {
        answerSelection.push("Unknown Date")
      } else {
        answerSelection.push(ans2.data.objectDate)
      }
    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      if (ans3.data.objectDate === "") {
        answerSelection.push("Unknown Date")
      } else {
        answerSelection.push(ans3.data.objectDate)
      }
    })


    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  },
  americanWing: async (req, res) => {
    const { id } = req.body
    const answerSelection = []
    let array = []

    //Entire collection of American Art the Met, restricted to nothing. Results 126 9.25.20. Pulling title.
    await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=1&q=images').then((res) => {
      array = res.data.objectIDs
    })


    const rand1 = array[Math.floor(Math.random() * array.length - 1)]
    const rand2 = array[Math.floor(Math.random() * array.length - 1)]
    const rand3 = array[Math.floor(Math.random() * array.length - 1)]

    const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


    await axios.get(baseUrl + rand1).then((ans1) => {
      if (ans1.data.objectName === "") {
        answerSelection.push("Unknown Title")
      } else {
        answerSelection.push(ans1.data.objectName)
      }
    })

    answerSelection.push(id)

    await axios.get(baseUrl + rand2).then((ans2) => {
      if (ans2.data.objectName === "") {
        answerSelection.push("Unknown Title")
      } else {
        answerSelection.push(ans2.data.objectName)
      }
    })

    await axios.get(baseUrl + rand3).then((ans3) => {
      if (ans3.data.objectName === "") {
        answerSelection.push("Unknown Title")
      } else {
        answerSelection.push(ans3.data.objectName)
      }
    })


    const getShuffled = arr => {
      const newArr = arr.slice()
      for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
      }
      return newArr
    };

    const randomSelection = getShuffled(answerSelection)

    res.status(200).send(randomSelection)
  }
}