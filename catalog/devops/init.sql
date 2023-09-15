DROP DATABASE IF EXISTS catalog;
CREATE DATABASE catalog;

\connect catalog;

CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price NUMERIC,
  width INTEGER,
  height INTEGER,
  length INTEGER,
  weight INTEGER
);

INSERT INTO public.products (name, price, width, height, length, weight) VALUES ('Livro', 2000, 100, 30, 10, 3);
INSERT INTO public.products (name, price, width, height, length, weight) VALUES ('Monitor', 3000, 50, 50, 50, 22);
INSERT INTO public.products (name, price, width, height, length, weight) VALUES ('Mouse', 1000, 10, 10, 10, 0.9);
