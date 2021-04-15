CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
)

INSERT INTO posts (name, description)
VALUES ('POST 1', 'Hola como estan')

INSERT INTO posts (name, description)
VALUES ('POST 2', 'Hola como estans')

INSERT INTO posts (name, description)
VALUES ('POST 3', 'Hola como estanss')