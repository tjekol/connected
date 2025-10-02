package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/tjekol/backend/data"
	"github.com/tjekol/backend/handlers"
)

var db *sql.DB

func main() {

	var err error
	db, err = data.InitDB()
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	defer db.Close()

	handlers.SetDB(db)

	// Set up routes
	router := mux.NewRouter()
	router.HandleFunc("/", handler).Methods("GET")
	router.HandleFunc("/user", handlers.GetUsers).Methods("GET")
	router.HandleFunc("/user/{id}", handlers.GetUser).Methods("GET")
	router.HandleFunc("/user", handlers.CreateUser).Methods("POST")

	fmt.Println("Server starting on localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World!")
}
