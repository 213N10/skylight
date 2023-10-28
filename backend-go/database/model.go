package database

type Message struct {
	ID         uint    `json:"id" gorm:"primaryKey,autoIncrement"`
	AuthorName string  `json:"authorName"`
	AuthorId   uint    `json:"authorId"`
	Lng        float64 `json:"lng" gorm:"index"`
	Lat        float64 `json:"lat" gorm:"index"`
	Content    string  `json:"content"`
}

func GetMessages(lat, long float64) []Message {
	var messages []Message
	DB.Where("lat BETWEEN ? AND ?", lat-0.01, lat+0.01).
		Where("lng BETWEEN ? AND ?", long-0.01, long+0.01).
		Find(&messages)
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
