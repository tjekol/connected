DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id        INT AUTO_INCREMENT NOT NULL,
  username       VARCHAR(128) NOT NULL,
  password       VARCHAR(255) NOT NULL,
  name           VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`)
);

-- CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(128) NOT NULL, 
-- password VARCHAR(255) NOT NULL, name VARCHAR(128) NOT NULL, PRIMARY KEY (`id`));

INSERT INTO user
  (username, password, name)
VALUES
  ('tj', 'Krakow', 'Thea'),
  ('kas', 'Bella', 'Kassa'),
  ('trymster', 'Hansa', 'Trymmelum');
