import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { doc } from '../pdf'

const Container = styled.div`
  margin-bottom: 25px;
  background: #f6f6f5;
  padding: 50px 50px 25px 50px;
`

const Date = styled.div`
  text-align: right;
`
const Report = styled.div`
  font-size: 150%;
`
const Section = styled.div`
  font-weight: bold;
  font-size: 340%;
`

const Button = styled.button`
  border: none;
  margin-bottom: 10px;
  background-color: green;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: white;

  &:hover {
    background: #ccc;
  }
`

const Title = () => {
  return (
    <Container>
      {/* <Button onClick={() => doc.save('test.pdf')}>EXPORT PDF</Button> */}
      <Date>{moment().format('MMMM DD, YYYY')}</Date>
      <Report>Market Report</Report>
      <Section>Property Related Data</Section>
    </Container>
  )
}

export default Title
