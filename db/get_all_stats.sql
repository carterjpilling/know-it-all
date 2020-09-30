SELECT g.id, g.points_earned, u.username, gr.name AS Category, gt.name as Game_Type, qt.name AS question_type
FROM games g 
JOIN genre gr ON g.genre_id = gr.genre_id
JOIN game_type gt ON g.type_id = gt.type_id
JOIN users u ON g.player_id = u.id
JOIN question_type qt ON qt.id = g.game_question_type 