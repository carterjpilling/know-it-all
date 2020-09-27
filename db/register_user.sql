INSERT INTO users
(title, profile_picture, points, email, username, hash)
VALUES($1,$2,$3,$4,$5,$6)
returning id, title, profile_picture, points, email, username;