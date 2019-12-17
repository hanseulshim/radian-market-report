import React from 'react'
import styled from 'styled-components'
import { demographicData } from '../data/data.json'

const { summaryList } = demographicData

const Container = styled.div`
  flex: 1;
  margin-right: 15px;
`

const Section = styled.div`
  margin-top: ${props => (props.index === 0 ? '0px' : '25px')};
`

const Title = styled.div`
  font-size: 125%;
  font-weight: bold;
`

const Summary = () => {
  return (
    <Container>
      {summaryList.map((summary, i) => (
        <Section index={i} key={i}>
          <Title>{summary.title}</Title>
          <div>{summary.content}</div>
        </Section>
      ))}
    </Container>
  )
}

export default Summary
