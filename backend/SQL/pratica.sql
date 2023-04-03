-- Active: 1680527007050@@127.0.0.1@3306

CREATE TABLE
    books (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        author TEXT NOT NULL,
        page_count INTEGER,
        price REAL NOT NULL
    );

SELECT * FROM books;

DROP TABLE books;

-- PRÁTICA GUIADA 3

-- Popular tabela

INSERT INTO
    books (
        id,
        name,
        author,
        page_count,
        price
    )
VALUES (
        "8503012928",
        "O Quinze",
        "Rachel de Queiroz",
        208,
        24.95
    );

INSERT INTO
    books (id, name, author, price)
VALUES (
        "8578887239",
        "Dom Casmurro",
        "Machado de Assis",
        46.77
    );

UPDATE books SET page_count = 463 WHERE id = "8578887239";

DELETE FROM books WHERE id = "8503012928";