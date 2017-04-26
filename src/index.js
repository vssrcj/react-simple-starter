import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const App = () => (
   <Container>
      React Simple Starter
   </Container>
)

const Container = styled.div`
   font-size: 20px;
   padding: 10px;
`

ReactDOM.render(
   <App />,
   document.querySelector('#app')
)
