\c crypto

DROP TABLE IF EXISTS user_coins;

CREATE TABLE user_coins (
    users_id INT REFERENCES users(users_id),
    coins_id INT REFERENCES coins(coins_id),
    PRIMARY KEY (users_id, coins_id)
);