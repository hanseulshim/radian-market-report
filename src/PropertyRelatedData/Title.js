import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Profile from '../assets/profile.png'
import { propertyData } from '../data/data.json'
import { doc } from '../pdf'

const { stats } = propertyData

const Container = styled.div`
  margin-bottom: 25px;
  background: #f6f6f5;
  padding: 50px 50px 25px 50px;
  display: flex;
  justify-content: space-between;
`

const Date = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`
const Report = styled.div`
  font-size: 150%;
`
const Section = styled.div`
  font-weight: bold;
  font-size: 340%;
`

const ProfileContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 75px;
  height: 75px;
  position: absolute;
  top: -15px;
  left: -75px;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 175%;
  position: absolute;
  top: ${props => (props.first ? '15px' : '40px')};
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
      <div>
        <Report>Market Report</Report>
        <Section>Property Related Data</Section>
      </div>
      <div>
        <Date>{moment().format('MMMM DD, YYYY')}</Date>
        <ProfileContainer>
          <Image src={Profile} />
          <Name first>{stats.agentFirst}</Name>
          <Name>{stats.agentLast}</Name>
        </ProfileContainer>
      </div>
    </Container>
  )
}

export default Title
