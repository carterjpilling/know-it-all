require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const profileCtrl = require('./profileController')
const statsCtrl = require('./statsController')
const artCtrl = require('./artController')

const app = express()

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
}))

app.post('/api/auth/register', authCtrl.registerUser)
app.post('/api/auth/login', authCtrl.loginUser)
app.post('/api/auth/logout', authCtrl.logoutUser)
app.get('/api/auth/me', authCtrl.getUser)

//Profile Endpoints
app.get('/api/profilepictures', profileCtrl.getProfilePictures)
app.put('/api/user/picture/:user_id', profileCtrl.updateProfilePicture)
app.get('/api/titles', profileCtrl.getTitles)
app.put('/api/user/title/:user_id', profileCtrl.updateTitle)
app.put('/api/user/points/:user_id', profileCtrl.addPoints)

//Stats Controller
app.post('/api/stats', statsCtrl.postStats)
app.delete('/api/stats', statsCtrl.deleteStats)
app.get('/api/user/stats', statsCtrl.getUserStats)
app.get('/api/stats', statsCtrl.getAllStats)

//Art Controller
//Van Gogh 210 Responses 9.25.20. Pulling Titles. 
app.get('/api/art/vangogh', artCtrl.getVanGogh)
//On display European Art (11), Results 180 9.25.20. Pulling Artist Name
app.get('/api/art/european', artCtrl.europeanArtistPaintings)
//On display highlights (permanant collect), not restricted to paintings. Results 263 9.25.20. Pulling objectTitle.
app.get('/api/art/displayedname', artCtrl.onDisplayHighlightsName)
//On display highlights (permanant collect), not restricted to paintings. Results 263 9.25.20. Pulling objectDate.
app.get('/api/art/displayeddate', artCtrl.onDisplayHighlightsDate)
//Met highlights (permanant collect, not necessarily on view), restricted to paintings. Results 125 9.25.20. Pulling artist Display Name.
app.get('/api/art/paintinghighlights', artCtrl.allPaintingsHighlights)
//All displayed art at the met, restricted to nothing. Results 1916 9.25.20. Pulling objectDate.
app.get('/api/art/alldisplayed', artCtrl.allDisplayedArt)
//Entire collection of American Art the Met, restricted to nothing. Results 126 9.25.20. Pulling title.
app.get('/api/art/american', artCtrl.americanWing)



massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('DB is alive!')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is alive!`))
})