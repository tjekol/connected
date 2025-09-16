package data

import (
	"database/sql"
	"fmt"
	"log"
)

type User struct {
	ID					int `json:"id"`
	Username		string `json:"username"`
	Password		string `json:"password"`
	Name		string `json:"name"`
}

func GetUsers(db *sql.DB) ([]User, error) {
	rows, err := db.Query("SELECT * FROM user")
	if err != nil {
		log.Fatalf("Error running SELECT * FROM user: %v", err)
	}
	defer rows.Close()

	var users []User
	for rows.Next() {
		var user User
		if err := rows.Scan(&user.ID, &user.Username, &user.Password, &user.Name); err != nil {
			log.Fatal(err)
		}
		users = append(users, user)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}

	return users, nil
}

func CreateUser(db *sql.DB, user User) (*User, error) {
	query := "INSERT INTO user (username, password, name) VALUES (?, ?, ?)"
	result, err := db.Exec(query, user.Username, user.Password, user.Name)
	if err != nil {
		return nil, fmt.Errorf("error inserting user: %v", err)
	}
	
	// Get the last inserted ID
	id, err := result.LastInsertId()
	if err != nil {
		return nil, fmt.Errorf("error getting last insert ID: %v", err)
	}
	
	// Set the ID and return the user
	user.ID = int(id)
	return &user, nil
}