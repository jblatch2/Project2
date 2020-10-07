DROP DATABASE IF EXISTS temp_db;
CREATE DATABASE temp_db;
USE temp_db;

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