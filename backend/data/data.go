package data

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/go-sql-driver/mysql"
)

type User struct {
	id        int
	username  string
	password     string
	name string
}

var db *sql.DB

func main() {
	user := os.Getenv("DBUSER")
	pass := os.Getenv("DBPASS")
	if user == "" || pass == "" {
		log.Fatal("Environment variables DBUSER and DBPASS must be set")
	}

	// connection properties
	cfg := mysql.NewConfig()
	cfg.User = user
	cfg.Passwd = pass
	cfg.Net = "tcp"
	cfg.Addr = "localhost:3307"
	cfg.DBName = "connected"

	// Open DB
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatalf("Error opening DB: %v", err)
	}
	defer db.Close()

	// Ping DB
	if err := db.Ping(); err != nil {
		log.Fatalf("Error connecting to DB: %v", err)
	}

	fmt.Println("Successfully connected to MySQL database!")

	showTables(db)

	showUsers(db)

	db.Close()
}

func showTables(db *sql.DB) {
	rows, err := db.Query("SHOW TABLES")
	if err != nil {
		log.Fatalf("Error running SHOW TABLES: %v", err)
	}
	defer rows.Close()

	var table string
	fmt.Println("Tables in the database:")
	for rows.Next() {
		if err := rows.Scan(&table); err != nil {
			log.Fatal(err)
		}
		fmt.Println(" -", table)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}

func showUsers(db *sql.DB) {
	rows, err := db.Query("SELECT * FROM user")
	if err != nil {
		log.Fatalf("Error running SELECT * FROM user: %v", err)
	}
	defer rows.Close()

	fmt.Println("Users in the database:")
	for rows.Next() {
		var user User
		if err := rows.Scan(&user.id, &user.username, &user.password, &user.name); err != nil {
			log.Fatal(err)
		}
		fmt.Printf(" - id: %d, username: %s, password: %s, name: %s\n",
			user.id, user.username, user.password, user.name)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}