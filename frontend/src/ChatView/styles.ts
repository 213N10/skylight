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