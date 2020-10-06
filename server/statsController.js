const getTheStats = async (db) => {
  const stats = await db.get_all_stats()
  return stats
}


module.exports = {
  postStats: async (req, res) => {
    console.log('hit stats')
    const db = req.app.get('db')
    const { id } = req.session.user
    const { type_of_game, points_gained, genre } = req.body
    const { catId } = genre
    const question_type = 1

    await db.post_stats([id, catId, points_gained, type_of_game, question_type])

    res.sendStatus(200)
  },
  deleteStats: async (req, res) => {
    const db = req.app.get('db')

    const { id } = req.session.user

    await db.delete_user_stats([id])

    res.sendStatus(200)
  },
  getUserStats: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.session.user

    const stats = await db.get_user_stats([id])
    res.status(200).send(stats)
  },
  getAllStats: async (req, res) => {
    const db = req.app.get('db')
    const stats = await getTheStats(db)
    res.status(200).send(stats)
  }

}