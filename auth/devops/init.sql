DROP DATABASE IF EXISTS auth;
CREATE DATABASE auth;

\connect auth;

CREATE TABLE users (
  email TEXT,
  password TEXT,
  salt TEXT
);

INSERT INTO public.users (email, password, salt) VALUES ('teste@teste.com', 'dbf5902b2b7c39115b2daa5361f52ae9c21fe1ab618758b634e16c6066db574ca3cdfcdf67442cc154e566d9a5ff08af1eb72c45531e05bffecea8283556ce0a1ecbfe7473eaa86d7ec5ce4349c1a97222e8640bbd8f8fd8fe75ca4ee274e413b7e35384', '6b5dd31d06476aa500b02cc691558fef991e0492');
