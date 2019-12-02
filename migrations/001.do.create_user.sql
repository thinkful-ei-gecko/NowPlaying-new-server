CREATE TABLE "user"(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);