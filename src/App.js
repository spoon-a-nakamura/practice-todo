import React from 'react'
import TodoList from './components/TodoList'
import styled from '@emotion/styled'

function App() {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2em;
`
export default App
