\c crypto

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    owned_coins VARCHAR[]
);