-- Para MySql phpMyAdmin con wamp server
CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE tasks (
    id INT primary key not null AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT  
);

INSERT INTO tasks (title, description) VALUES
    ('tasks 1 ','some description1'),
    ('tasks 2 ','some description2');
