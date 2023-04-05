-- Active: 1680697877265@@127.0.0.1@3306

-- Práticas

-- Crie o código SQL estruturando as tabelas da prática 1

-- Popule a tabela users com 2 itens

-- Popule a tabela phones com 3 itens

-- Crie a query de consulta com junção das duas tabelas

CREATE TABLE
    users (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

CREATE TABLE
    phones (
        id TEXT PRIMARY KEY NOT NULL,
        phone_number TEXT UNIQUE NOT NULL,
        user_id TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );

INSERT INTO
    users (id, name, email, password)
VALUES (
        "u001",
        "Suzane",
        "suzane@gmail.com",
        "Su@123456"
    ), (
        "u002",
        "Bryan",
        "bryan@gmail.com",
        "Bryan@123456"
    );

SELECT * FROM users;

INSERT INTO
    phones (id, phone_number, user_id)
VALUES (
        "p001",
        "(21) 99999-99990",
        "u001"
    ), (
        "p002",
        "(21) 98765-4321",
        "u002"
    ), (
        "p003",
        "(21) 91234-5678",
        "u002"
    );

SELECT * FROM phones;

SELECT * FROM users INNER JOIN phones ON phones.user_id = users.id;