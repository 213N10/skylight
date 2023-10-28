package main

import (
	"github.com/gin-gonic/gin"
	"it1shka.com/skylight/backend-go/api"
	"it1shka.com/skylight/backend-go/database"
)

func main() {
	database.SetupDatabase()
	app := gin.Default()
	api.SetupServer(app)
	app.Run(":3005")
}
