DROP DATABASE IF EXISTS freight;
CREATE DATABASE freight;

\connect freight;

CREATE TABLE public.zipcodes (
  code TEXT,
  lat NUMERIC,
  long NUMERIC
);

INSERT INTO public.zipcodes (code, lat, long) VALUES ('20202020', -27.5945, -48.5477);
INSERT INTO public.zipcodes (code, lat, long) VALUES ('30303030', -22.9129, -43.2003);

