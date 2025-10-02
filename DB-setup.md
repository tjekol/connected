# Database setup

### Docker

1. go get -u github.com/go-sql-driver/mysql
2. docker run -d -p 3307:3306 --name connected -e MYSQL_ROOT_PASSWORD=Bella mysql:latest
3. docker exec -it connected mysql -u root -p

pass: Bella

### Mysql

1. Create database

   ```
   CREATE DATABASE connected;
   SHOW DATABASES;
   USE connected;
   ```

2. Create table

   ```
   CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(128) NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(128) NOT NULL, PRIMARY KEY (`id`));

   DESCRIBE user;
   ```

3. Insert users
   ```
   INSERT INTO user
    (username, password, name)
   VALUES
    ('tj', 'Krakow', 'Thea'),
    ('kas', 'Bella', 'Kassa'),
    ('trymster', 'Hansa', 'Trymmelum');
   ```
4. Display tables and table
   `show tables;`
   `select * from user;`

### Use database with Go

1. Start server

```
DBUSER="root" DBPASS="Bella" go run server.go
```
