Create database everydaysensei;

create table sensei(
    id INT NOT NULL,
    lat INT(255),
    long INT(255),
    name VARCHAR(50),
    email VARCHAR(55),
    bio VARCHAR(1000),
    skill id INT(5),
    skill_level INT(5),
    credits INT(255),
    rating INT(10) 
);

create table student (
    id INT NOT NULL,
    lat INT(255),
    long INT(255),
    name VARCHAR(50),
    email VARCHAR(55),
    bio VARCHAR(1000),
    skill id INT(5),
    skill_level INT(5),
    credits INT(255)
);

create table skills (
    skill id INT(5),
    skill VARCHAR(50)
);