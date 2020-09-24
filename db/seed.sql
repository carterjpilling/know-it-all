CREATE TABLE users(
id SERIAL PRIMARY KEY,
title TEXT,
profile_picture TEXT,
status VARCHAR(100),
points INT,
email TEXT,
username VARCHAR(25)
);

CREATE TABLE genre_id(
genre_id SERIAL PRIMARY KEY,
name TEXT
);

CREATE TABLE games(
id SERIAL PRIMARY KEY,
player_id INTEGER REFERENCES users (id),
genre_id INTEGER REFERENCES genre_id (genre_id),
points_earned INTEGER,
type_id INTEGER REFERENCES game_type(type_id)
);

CREATE TABLE players_in_game(
id SERIAL PRIMARY KEY,
game_id INTEGER REFERENCES games(id),
player_id INTEGER REFERENCES users(id)
);

CREATE TABLE game_type(
type_id SERIAL PRIMARY KEY,
name TEXT
);

CREATE TABLE users_auth(
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
hash text);