CREATE DATABASE wizard;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE usersWidgets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    widgets TEXT
);

-- INSERT INTO users (first_name, last_name, email, password) VALUES ('user2', 'user2', 'user2@user.com', '$2b$10$ud3ibmMEdsJpBSlArfF0IOV6oLrtgiaYTVNjC3HDYTUaWj5ignwqy');



-- CREATE TABLE widgets-used (
--     id SERIAL PRIMARY KEY,
--     user_id TEXT,
--     config TEXT
-- );

