import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const CSSJS = () => {
  return (
    <div>
      <Title>Styled Components</Title>
      <h2 style={{ color: 'red' }}>Hello World</h2>
    </div>
  )
}

export default CSSJS
