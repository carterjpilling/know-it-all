SELECT g.id, g.points_earned, u.username, gr.name, gt.name
FROM games g 
JOIN genre gr ON g.genre_id = gr.genre_id
JOIN game_type gt ON g.type_id = gt.type_id
JOIN users u ON g.player_id = u.id
WHERE u.id = $1;