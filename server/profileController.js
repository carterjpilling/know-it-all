module.exports = {
  getProfilePictures: async (req, res) => {
    const db = req.app.get('db')
    const pictures = await db.get_profilepictures()
    res.status(200).send(pictures)
  },
  updateProfilePictures: async (req, res) => {

  },
  getTitles: async (req, res) => {

  },
  updateTitle: async (req, res) => {

  },
  addPoints: async (req, res) => {

  }
}