module.exports = {
  getProfilePictures: async (req, res) => {
    const db = req.app.get('db')
    const pictures = await db.get_profilepictures()
    res.status(200).send(pictures)
  },

  updateProfilePicture: async (req, res) => {
    const db = req.app.get('db')
    const { new_picture } = req.body
    const { id } = req.params

    req.session.user.profile_picture = new_picture
    await db.update_picture([new_picture, id])
    res.status(200).send(req.session.user)

  },

  getTitles: async (req, res) => {
    const db = req.app.get('db')
    const titles = await db.get_titles()
    res.status(200).send(titles)

  },

  updateTitle: async (req, res) => {
    const db = req.app.get('db')
    const { new_title } = req.body
    const { user_id } = req.params

    req.session.user.title = new_title
    await db.update_title([new_title, user_id])

    res.status(200).send(req.session.user)
  },

  addPoints: async (req, res) => {
    const db = req.app.get('db')
    const { new_points } = req.body
    const { id } = req.session.user

    req.session.user.points = (req.session.user.points + new_points)

    await db.add_points([new_points, id])

    res.status(200)
  }
}