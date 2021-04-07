import React from 'react'
import * as Styled from './styles'

const PageHeader = ({ title }) => {
  return (
    <Styled.ColoredBackground>
      <h1>{title}</h1>
    </Styled.ColoredBackground>
  )
}

export default PageHeader
