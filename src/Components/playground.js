const answerSelection = [
  [{
    "primaryImage": "https://images.metmuseum.org/CRDImages/rl/original/DT3154.jpg",
    "title": "Madame Roulin and Her Baby",
    "objectDate": "1889",
    "artistDisplayName": "Vincent van Gogh"
  },
  {
    "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DT1947.jpg",
    "title": "Shoes",
    "objectDate": "1895",
    "artistDisplayName": "Vincent van Gogh"
  }, {
    "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DP-19279-001.jpg",
    "title": "La Berceuse (Woman Rocking a Cradle; Augustine-Alix Pellicot Roulin, 1851–1930)",
    "objectDate": "1890",
    "artistDisplayName": "Vincent van Gogh"
  }, {
    "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
    "title": "Wheat Field with Cypresses",
    "objectDate": "1880",
    "artistDisplayName": "Vincent van Gogh"
  }],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}, {}]
]

// getVanGogh: async (req, res) => {
//   const answerSelection = []
//   let array = []


//   //Van Gogh 210 Responses 9.25.20. Pulling Titles. 
//   await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=Van_Gogh').then((res) => {
//     array = res.data.objectIDs
//   })


//   for (let i = 0; i < 10; i++) {
//     let group1 = [{}, {}, {}, {}]

//     const rand1 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand2 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand3 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand4 = array[Math.floor(Math.random() * array.length - 1)]

//     const randomArray = [rand1, rand2, rand3, rand4]

//     const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


//     for (let i = 0; i < 4; i++) {
//       await axios.get(baseUrl + randomArray[i]).then((res) => {
//         // group1[i].objectId = res.data.objectId
//         // console.log(res.data.objectId)
//         if (res.data.primaryImage === "") {
//           group1[i].primaryImage = "Unknown Picture"
//         } else {
//           group1[i].primaryImage = res.data.primaryImage
//         }

//         if (res.data.title === "") {
//           group1[i].title = "Unknown Title"
//         } else {
//           group1[i].title = res.data.title
//         }

//         if (res.data.objectDate === "") {
//           group1[i].objectDate = "Unknown Date"
//         } else {
//           group1[i].objectDate = res.data.objectDate
//         }

//         if (res.data.artistDisplayName === "") {
//           group1[i].artistDisplayName = "Unknown Artist"
//         } else {
//           group1[i].artistDisplayName = res.data.artistDisplayName
//         }
//       })
//     }

//     answerSelection.push(group1)
//   }

//   res.status(200).send(answerSelection)
// },
// europeanArtistPaintings: async (req, res) => {
//   console.log('european hit')
//   const answerSelection = []
//   let array = []

//   //On display European Art (11), Results 180 9.25.20. Pulling Artist Name
//   await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&medium=Paintings&isOnView=true&q=images').then((res) => {
//     array = res.data.objectIDs
//   })


//   for (let i = 0; i < 10; i++) {
//     let group1 = [{}, {}, {}, {}]
//     console.log(array)
//     console.log(i)

//     const rand1 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand2 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand3 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand4 = array[Math.floor(Math.random() * array.length - 1)]

//     const randomArray = [rand1, rand2, rand3, rand4]

//     const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


//     for (let i = 0; i < 4; i++) {
//       await axios.get(baseUrl + randomArray[i]).then((res) => {
//         // group1[i].objectId = res.data.objectId
//         // console.log(res.data.objectId)
//         if (res.data.primaryImage === "") {
//           group1[i].primaryImage = "Unknown Picture"
//         } else {
//           group1[i].primaryImage = res.data.primaryImage
//         }

//         if (res.data.title === "") {
//           group1[i].title = "Unknown Title"
//         } else {
//           group1[i].title = res.data.title
//         }

//         if (res.data.objectDate === "") {
//           group1[i].objectDate = "Unknown Date"
//         } else {
//           group1[i].objectDate = res.data.objectDate
//         }

//         if (res.data.artistDisplayName === "") {
//           group1[i].artistDisplayName = "Unknown Artist"
//         } else {
//           group1[i].artistDisplayName = res.data.artistDisplayName
//         }
//       })
//     }

//     answerSelection.push(group1)
//   }

//   res.status(200).send(answerSelection)
// },

// onDisplayHighlights: async (req, res) => {
//   const answerSelection = []
//   let array = []

//   //On display highlights (permanant collect), not restricted to paintings. Results 263 9.25.20. Pulling objectDate.
//   await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isOnView=true&q=images').then((res) => {
//     array = res.data.objectIDs
//   })


//   for (let i = 0; i < 10; i++) {
//     let group1 = [{}, {}, {}, {}]


//     const rand1 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand2 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand3 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand4 = array[Math.floor(Math.random() * array.length - 1)]

//     const randomArray = [rand1, rand2, rand3, rand4]

//     const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


//     for (let i = 0; i < 4; i++) {
//       await axios.get(baseUrl + randomArray[i]).then((res) => {
//         // group1[i].objectId = res.data.objectId
//         // console.log(res.data.objectId)
//         if (res.data.primaryImage === "") {
//           group1[i].primaryImage = "Unknown Picture"
//         } else {
//           group1[i].primaryImage = res.data.primaryImage
//         }

//         if (res.data.title === "") {
//           group1[i].title = "Unknown Title"
//         } else {
//           group1[i].title = res.data.title
//         }

//         if (res.data.objectDate === "") {
//           group1[i].objectDate = "Unknown Date"
//         } else {
//           group1[i].objectDate = res.data.objectDate
//         }

//         if (res.data.artistDisplayName === "") {
//           group1[i].artistDisplayName = "Unknown Artist"
//         } else {
//           group1[i].artistDisplayName = res.data.artistDisplayName
//         }
//       })
//     }

//     answerSelection.push(group1)
//   }

//   res.status(200).send(answerSelection)
// },


// allPaintingsHighlights: async (req, res) => {
//   const answerSelection = []
//   let array = []

//   //Met highlights (permanant collect, not necessarily on view), restricted to paintings. Results 125 9.25.20. Pulling artist Display Name.
//   await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&isHighlight=true&q=images').then((res) => {
//     array = res.data.objectIDs
//   })


//   for (let i = 0; i < 10; i++) {
//     let group1 = [{}, {}, {}, {}]

//     const rand1 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand2 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand3 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand4 = array[Math.floor(Math.random() * array.length - 1)]

//     const randomArray = [rand1, rand2, rand3, rand4]

//     const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


//     for (let i = 0; i < 4; i++) {
//       await axios.get(baseUrl + randomArray[i]).then((res) => {
//         // group1[i].objectId = res.data.objectId
//         // console.log(res.data.objectId)
//         if (res.data.primaryImage === "") {
//           group1[i].primaryImage = "Unknown Picture"
//         } else {
//           group1[i].primaryImage = res.data.primaryImage
//         }

//         if (res.data.title === "") {
//           group1[i].title = "Unknown Title"
//         } else {
//           group1[i].title = res.data.title
//         }

//         if (res.data.objectDate === "") {
//           group1[i].objectDate = "Unknown Date"
//         } else {
//           group1[i].objectDate = res.data.objectDate
//         }

//         if (res.data.artistDisplayName === "") {
//           group1[i].artistDisplayName = "Unknown Artist"
//         } else {
//           group1[i].artistDisplayName = res.data.artistDisplayName
//         }
//       })
//     }

//     answerSelection.push(group1)
//   }

//   res.status(200).send(answerSelection)
// },
// allDisplayedArt: async (req, res) => {
//   const answerSelection = []
//   let array = []

//   //All displayed art at the met, restricted to nothing. Results 1916 9.25.20. Pulling objectDate.
//   await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=images').then((res) => {
//     array = res.data.objectIDs
//   })

//   for (let i = 0; i < 10; i++) {
//     let group1 = [{}, {}, {}, {}]

//     const rand1 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand2 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand3 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand4 = array[Math.floor(Math.random() * array.length - 1)]

//     const randomArray = [rand1, rand2, rand3, rand4]

//     const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


//     for (let i = 0; i < 4; i++) {

//       await axios.get(baseUrl + randomArray[i]).then((res) => {
//         // group1[i].objectId = res.data.objectId
//         // console.log(res.data.objectId)
//         if (res.data.primaryImage === "") {
//           group1[i].primaryImage = "Unknown Picture"
//         } else {
//           group1[i].primaryImage = res.data.primaryImage
//         }

//         if (res.data.title === "") {
//           group1[i].title = "Unknown Title"
//         } else {
//           group1[i].title = res.data.title
//         }

//         if (res.data.objectDate === "") {
//           group1[i].objectDate = "Unknown Date"
//         } else {
//           group1[i].objectDate = res.data.objectDate
//         }

//         if (res.data.artistDisplayName === "") {
//           group1[i].artistDisplayName = "Unknown Artist"
//         } else {
//           group1[i].artistDisplayName = res.data.artistDisplayName
//         }
//       })
//     }

//     answerSelection.push(group1)
//   }

//   res.status(200).send(answerSelection)
// },
// americanWing: async (req, res) => {
//   const answerSelection = []
//   let array = []

//   //Entire collection of American Art the Met, restricted to nothing. Results 126 9.25.20. Pulling title.
//   await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=1&q=images').then((res) => {
//     array = res.data.objectIDs
//   })

//   for (let i = 0; i < 10; i++) {
//     let group1 = [{}, {}, {}, {}]

//     const rand1 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand2 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand3 = array[Math.floor(Math.random() * array.length - 1)]
//     const rand4 = array[Math.floor(Math.random() * array.length - 1)]

//     const randomArray = [rand1, rand2, rand3, rand4]

//     const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'


//     for (let i = 0; i < 4; i++) {
//       await axios.get(baseUrl + randomArray[i]).then((res) => {
//         // group1[i].objectId = res.data.objectId
//         // console.log(res.data.objectId)
//         if (res.data.primaryImage === "") {
//           group1[i].primaryImage = "Unknown Picture"
//         } else {
//           group1[i].primaryImage = res.data.primaryImage
//         }

//         if (res.data.title === "") {
//           group1[i].title = "Unknown Title"
//         } else {
//           group1[i].title = res.data.title
//         }

//         if (res.data.objectDate === "") {
//           group1[i].objectDate = "Unknown Date"
//         } else {
//           group1[i].objectDate = res.data.objectDate
//         }

//         if (res.data.artistDisplayName === "") {
//           group1[i].artistDisplayName = "Unknown Artist"
//         } else {
//           group1[i].artistDisplayName = res.data.artistDisplayName
//         }
//       })
//     }

//     answerSelection.push(group1)
//   }

//   res.status(200).send(answerSelection)
// }
// }
//         // const getShuffled = arr => {
//         //   const newArr = arr.slice()
//         //   for (let i = newArr.length - 1; i > 0; i--) {
//         //     const rand = Math.floor(Math.random() * (i + 1));
//         //     [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
//         //   }
//         //   return newArr
//         // };
/*
Use SASS properties to give all images same likeness.
STEPS TO MAKING POP UP BOX
XXDecide on box dimensions / Size
xMake box appear
xMake Nothing Appear behind box.
Make box appear with dynamic information
Cancel Button, That makes Box Dissappear

Each Div<
Game Category and Type
Picture of game
Information about each game
Have play game button Link
>

Bonus - Area outside of box becomes gray
Clicking outside of box closes the box.
*/