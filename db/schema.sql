### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name CHAR(100),
    devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
