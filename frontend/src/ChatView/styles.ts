import styled from 'styled-components'

export const MockContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em 3em;
  & > * + * {
    margin-top: 0.5em;
  }
  line-height: 1.2;
  text-align: center;
`

export const ChatOuterContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const Chat = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`

export const ChatForm = styled.form`
  display: flex;
  font-size: 1.2em;
  box-shadow: #63636333 0px 2px 8px 0px;
  border: 1px solid #ccc;
  & > input {
    flex: 1;
    font-size: inherit;
    border: none;
    padding: 0.5em 1em;
    outline: none;
  }
  & > button {
    font-size: inherit;
    padding: 0 0.5em;
    color: white;
    border: none;
    background-color: #9d9d9d;
    transition: 0.2s background-color ease-in-out;
    &:hover {
      background-color: #c7215b;
    }
  }
`