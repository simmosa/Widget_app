CREATE DATABASE wizard;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password TEXT
);

INSERT INTO users (first_name, last_name, email, password) VALUES ('user', 'user', 'user@user.com', 'user');


-- CREATE TABLE widgets (
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     settings TEXT
-- );

-- CREATE TABLE widgets-used (
--     id SERIAL PRIMARY KEY,
--     user_id TEXT,
--     config TEXT
-- );

