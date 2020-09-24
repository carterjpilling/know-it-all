INSERT INTO users
(title, profile_picture, status, points, email, username, hash)
VALUES($1,$2,$3,$4,$5,$6,$7)
returning id, title, profile_picture, status, points, email, username;