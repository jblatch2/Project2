DROP DATABASE IF EXISTS profile_DB;
CREATE DATABASE profile_DB;
USE profile_DB;

CREATE TABLE members
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    email VARCHAR(65),
    avatar VARCHAR(140),
    zodiac VARCHAR(35),
    password VARCHAR(140),
    subject VARCHAR(35),
    notes VARCHAR(250),
    prefer VARCHAR(35),
    primary key(id)
    
)