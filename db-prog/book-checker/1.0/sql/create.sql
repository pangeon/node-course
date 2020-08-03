CREATE DATABASE programming_books CHARACTER SET UTF8mb4 collate utf8mb4_bin;

CREATE TABLE items (
    id INT(11) AUTO_INCREMENT,
    author TEXT NOT NULL,
    title TEXT NOT NULL,
    kind TEXT NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB
DEFAULT CHARACTER SET = UTF8mb4;