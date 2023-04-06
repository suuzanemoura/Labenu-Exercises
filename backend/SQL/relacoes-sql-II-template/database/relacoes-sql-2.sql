-- Active: 1680783487677@@127.0.0.1@3306

-- Práticas

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL
    );

INSERT INTO
    users (id, name, email, password)
VALUES (
        "U001",
        "Su",
        "suzane@email.com",
        "Su@123"
    ), (
        "U002",
        "Bryan",
        "bryan@email.com",
        "Bryan@123"
    ), (
        "U003",
        "Fulano",
        "fulaninho@email.com",
        "Fu@123"
    );

SELECT * FROM users;

CREATE TABLE
    follows (
        follower_id TEXT NOT NULL,
        followed_id TEXT NOT NULL,
        FOREIGN KEY (follower_id) REFERENCES users(id),
        FOREIGN KEY (followed_id) REFERENCES users(id)
    );

INSERT INTO
    follows (follower_id, followed_id)
VALUES ("U001", "U002"), ("U001", "U003"), ("U002", "U001");

SELECT *
FROM users
    INNER JOIN follows ON follows.follower_id = users.id;

SELECT *
FROM users
    LEFT JOIN follows ON follows.follower_id = users.id;

SELECT
    users.id AS userId,
    users.name AS userName,
    users.email,
    users.created_at,
    follows.follower_id AS followerId,
    follows.followed_id AS followedId,
    usersFollowed.name AS followedName
FROM users
    LEFT JOIN follows ON follows.follower_id = users.id
    INNER JOIN users AS usersFollowed ON follows.followed_id = usersFollowed.id;