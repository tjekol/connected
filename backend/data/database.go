package data

import (
	"database/sql"
	"log"
	"os"

	"github.com/go-sql-driver/mysql"
)

func InitDB() (*sql.DB, error) {
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

	// Ping DB
	if err := db.Ping(); err != nil {
		log.Fatalf("Error connecting to DB: %v", err)
	}

	// fmt.Println("Successfully connected to MySQL database!")
	// db.Close()
	return db, nil
}
