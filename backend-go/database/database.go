package database

import (
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func SetupDatabase() {
	db, err := gorm.Open(sqlite.Open("database.db"))
	if err != nil {
		log.Fatal(err)
	}
	db.AutoMigrate(&Message{})
	DB = db
}
