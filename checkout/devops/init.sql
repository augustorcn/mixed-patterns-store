DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

\connect checkout;

CREATE TABLE coupons (
  id SERIAL PRIMARY KEY,
  code TEXT,
  percentage NUMERIC,
  expireDate TIMESTAMP
);

INSERT INTO coupons (code, percentage, expireDate) VALUES ('DISC10', 10, '2024-07-22T00:00:00.000');
INSERT INTO coupons (code, percentage, expireDate) VALUES ('DISC20', 20, '2024-07-22T00:00:00.000');
INSERT INTO coupons (code, percentage, expireDate) VALUES ('EXPIRATED10', 10, '2020-07-22T00:00:00.000');

CREATE TABLE orders  (
  id TEXT,
  code TEXT,
  cpf TEXT,
  total NUMERIC,
  freight NUMERIC
);

CREATE TABLE item (
  idOrder TEXT,
  idProduct INTEGER,
  price NUMERIC,
  quantity INTEGER
);
