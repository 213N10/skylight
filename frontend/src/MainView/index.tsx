import * as Styled from './styles'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { nameState, randomName } from './state'

const MainView = () => {
  const [name, setName] = useRecoilState(nameState)

  return (
    <Styled.MainContainer>
      <Styled.NameInputContainer>
        <label htmlFor='name-input'>Your nickname: </label>
        <input 
          value={name}
          onChange={event => setName(event.target.value)}
          onDoubleClick={() => setName(randomName())}
          id='name-input'
          placeholder='Be creative!'
        />
      </Styled.NameInputContainer>
      <Link to='/...todo...'>Use my location</Link>
      <Link to='/...todo...'>Choose on map</Link>
    </Styled.MainContainer>
  )
}

export default MainView