package api

import (
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"it1shka.com/skylight/backend-go/database"
)

func getMessages(ctx *gin.Context) {
	lng, err := strconv.ParseFloat(ctx.Query("lng"), 64)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid longitude"})
		return
	}
	lat, err := strconv.ParseFloat(ctx.Query("lat"), 64)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid latitude"})
		return
	}
	messages := database.GetMessages(lng, lat)
	ctx.JSON(200, messages)

}

func newMessage(ctx *gin.Context) {
	authorName := ctx.PostForm("authorName")
	authorId, err := strconv.ParseUint(ctx.PostForm("authorId"), 10, 32)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid author id"})
		return
	}
	lat, err := strconv.ParseFloat(ctx.PostForm("lat"), 64)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid latitude"})
		return
	}
	lng, err := strconv.ParseFloat(ctx.PostForm("lng"), 64)
	if err != nil {
		ctx.JSON(400, gin.H{"error": "invalid longitude"})
		return
	}
	content := ctx.PostForm("content")
	message := database.CreateMessage(authorName, uint(authorId), lat, lng, content)
	ctx.JSON(200, message)
}

func getIdentifier(ctx *gin.Context) {
	ctx.JSON(200, gin.H{"id": time.Now().UnixNano()})
}
