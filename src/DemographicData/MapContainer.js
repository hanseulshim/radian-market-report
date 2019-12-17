import React from 'react'
import styled from 'styled-components'
import RatingsContainer from './RatingsContainer'

const Container = styled.div`
  flex: 3;
`

const Map = styled.div`
  width: 100%;
  height: 500px;
  text-align: center;
  font-size: 300%;
  font-weight: bold;
  background-image: linear-gradient(red, yellow, green);
`

const MapContainer = () => {
  return (
    <Container>
      <RatingsContainer />
      <Map>IM GOING TO BE THE BEST MAP EVER</Map>
    </Container>
  )
}

export default MapContainer
