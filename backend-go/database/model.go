package database

import (
	"fmt"
	"sort"

	"gorm.io/gorm"
)

type Message struct {
	gorm.Model
	AuthorName string  `json:"authorName"`
	AuthorId   uint    `json:"authorId"`
	Lng        float64 `json:"lng" gorm:"index" column:"lng"`
	Lat        float64 `json:"lat" gorm:"index" column:"lat"`
	Content    string  `json:"content"`
}

func (Message) TableName() string {
	return "messages"
}

func GetMessages(lat, long float64) []Message {
	var messages []Message

	query := `
		SELECT *, 
		((lat - ?) * (lat - ?) + (lng - ?) * (lng - ?)) as distance
		FROM messages
		ORDER BY distance
		LIMIT ?;
	`

	if err := DB.Raw(query, lat, lat, long, long, 100).Scan(&messages).Error; err != nil {
		fmt.Println(err)
		return []Message{}
	}

	sort.Slice(messages, func(i, j int) bool {
		return messages[i].CreatedAt.After(messages[j].CreatedAt)
	})

	return messages
}

func CreateMessage(authorName string, authorId uint, lat, long float64, content string) Message {
	message := Message{
		AuthorName: authorName,
		AuthorId:   authorId,
		Lng:        long,
		Lat:        lat,
		Content:    content,
	}
	DB.Create(&message)
	return message
}
