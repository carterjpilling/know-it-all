UPDATE users
SET points = (points + $1)
WHERE id = $2;