import { useRecoilValue } from 'recoil'
import { locationState } from './state'
import EmptyMock from './EmptyMock'

const ChatView = () => {
  const location = useRecoilValue(locationState)

  return location ? (
    <h1>This is a chat view</h1>
  ) : <EmptyMock />
}

export default ChatView