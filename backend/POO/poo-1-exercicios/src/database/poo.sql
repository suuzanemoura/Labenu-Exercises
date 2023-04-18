-- Active: 1681748670792@@127.0.0.1@3306

CREATE TABLE
    videos (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        title TEXT NOT NULL,
        duration INTEGER NOT NULL,
        upload_at TEXT DEFAULT(DATETIME()) NOT NULL
    );

SELECT * FROM VIDEOS;

DROP TABLE videos;