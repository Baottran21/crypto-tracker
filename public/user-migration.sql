\c crypto

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    firstName VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    owned_coins INTEGER[]
);