const bcrpyt = require('bcryptjs')
/*
email: john@gmail.com
username: john
password: john
*/

module.exports = {
  registerUser: async (req, res) => {
    const db = req.app.get('db')
    const { email, username, password } = req.body

    const [userEmail] = await db.check_email([email])
    const [user] = await db.check_user([username])

    if (user) {
      return res.status(409).send('Username already exists.')
    }

    if (userEmail) {
      return res.status(409).send('Email already in use.')
    }

    const profile_picture = `https://robothash.org/${username}?set=set5.png`
    const title = 'Owner of Little Knowledge'
    const status = null
    const points = 0


    const salt = bcrpyt.genSaltSync(10)
    const hash = bcrpyt.hashSync(password, salt)

    const [newUser] = await db.register_user([title, profile_picture, status, points, email, username, hash])

    req.session.user = newUser

    res.status(200).send(req.session.user)
  },
  loginUser: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body
    const [existingUser] = await db.check_user([username])

    if (!existingUser) {
      return res.status(404).send('User not found.')
    }

    const isAuthenticated = bcrpyt.compareSync(password, existingUser.hash)

    if (!isAuthenticated) {
      return res.status(403).send('Incorrect password or email.')
    }

    delete existingUser.hash

    req.session.user = existingUser
    res.status(200).send(req.session.user)


  },
  logoutUser: async (req, res) => {
    req.session.destroy()
    return res.sendStatus(200)

  },
  getUser: async (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.status(404).send('No session found.')
    }
  }
}