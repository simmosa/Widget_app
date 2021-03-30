CREATE DATABASE wizard;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password TEXT
);
INSERT INTO users (first_name, last_name, email, password) VALUES ('user', 'user', 'user@user.com', 'user');