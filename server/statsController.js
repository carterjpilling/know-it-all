const getTheStats = async (db) => {
  const stats = await db.get_all_stats()
  return stats
}


module.exports = {
  postStats: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.session.user
    //pulled category off of params
    const { type_of_game, points_gained, genre, question_type } = req.body
    // type_of_game : Multiple Choice
    // points_gained: polled off of state on Game.js
    //genre: 1:American, 2:European, 3: Permanent, 4: Displayed (Pulled off of params, uppercased)
    //question_type: 1: Data, 2:Artist Name 3:Title

    const { catId } = genre
    const { qID } = question_type
    console.log(id, catId, points_gained, type_of_game, qID)

    await db.post_stats([id, catId, points_gained, type_of_game, qID])

    // const stats = await getTheStats(db)
    console.log('Stats Hit')
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