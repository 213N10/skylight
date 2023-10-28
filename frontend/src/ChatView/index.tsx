import { useRecoilValue } from 'recoil'
import { locationState } from './state'
import * as Styled from './styles'
import EmptyMock from './EmptyMock'

const ChatView = () => {
  const location = useRecoilValue(locationState)!

  return location ? (
    <Styled.ChatOuterContainer>
      <Styled.Chat>
        
      </Styled.Chat>
      <Styled.ChatForm>
        <input required
          placeholder='Write your message here...'
        />
        <button type='submit'>Send</button>
      </Styled.ChatForm>
    </Styled.ChatOuterContainer>
  ) : <EmptyMock />
}

export default ChatView