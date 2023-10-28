import { useRecoilValue } from 'recoil'
import { locationState } from './state'
import * as Styled from './styles'
import EmptyMock from './EmptyMock'
import { FormEvent, useEffect, useRef, useState } from 'react'
import API, { Message } from '../API'
import { nameState } from '../MainView/state'

const ChatView = () => {
  const name = useRecoilValue(nameState)
  const location = useRecoilValue(locationState)
  const [messages, setMessages] = useState<Message[]>([])
  const [userPrompt, setUserPrompt] = useState("")
  const [id, setId] = useState<number>(Date.now())
  const mock = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    API.getId().then(newId => setId(prevId => newId ?? prevId))
    const interval = setInterval(() => {
      if (location === null) return
      API.getMessages(location.lat, location.lng).then(messages => {
        if (!messages) return
        setMessages(messages)
      })
      // scrollToBottom()
    }, 250)
    return () => clearInterval(interval)
  }, [location])

  const submitMessage = (event: FormEvent) => {
    event.preventDefault()
    if (location === null) return
    API.newMessage(name, id, location.lat, location.lng, userPrompt)
    setUserPrompt("")
  }

  return location ? (
    <Styled.ChatOuterContainer>
      <Styled.Chat>
        {
          messages.map(message => {
            return <MessageElement {...message} />
          })
        }
        <div ref={mock}></div>
      </Styled.Chat>
      <Styled.ChatForm onSubmit={submitMessage}>
        <input required
          value={userPrompt}
          onChange={event => setUserPrompt(event.target.value)}
          placeholder='Write your message here...'
        />
        <button type='submit'>Send</button>
      </Styled.ChatForm>
    </Styled.ChatOuterContainer>
  ) : <EmptyMock />
}

const MessageElement = ({content, lat, lng}: Message) => {
  return (
    <h1>{content}, {lat}, {lng}</h1>
  )
}

export default ChatView