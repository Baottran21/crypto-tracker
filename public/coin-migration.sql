\c crypto

DROP TABLE IF EXISTS coins;

CREATE TABLE coins (
    coins_id SERIAL PRIMARY KEY,
    coins_name VARCHAR NOT NULL,
    coins_symbol VARCHAR NOT NULL,
    coins_price INT NOT NULL,
    coins_rank INT NOT NULL
);