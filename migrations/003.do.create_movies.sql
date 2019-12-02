CREATE TABLE "movies" (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title TEXT NOT NULL,
  event_description TEXT,
  date_created DATE DEFAULT now() NOT NULL
);