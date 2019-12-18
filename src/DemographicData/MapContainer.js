import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { demographicData } from '../data/data.json'
import RatingsContainer from './RatingsContainer'
import config from '../config'
import car from '../assets/car.svg'

const { SINBAD, STEEL_BLUE } = config.colors

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = demographicData

const Container = styled.div`
  flex: 3;
`
const Icon = styled.img`
  width: 50px;
  height: 50px;
`

const MapContainer = () => {
  const [map, setMap] = useState(null)
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 500,
    latitude: 39.0297191169293,
    longitude: -77.20208644869089,
    zoom: 11
  })

  useEffect(() => {
    if (map) {
      const mapRef = map.getMap()
      mapRef.on('load', () => {
        mapRef.addLayer({
          id: 'selectedProperty',
          type: 'line',
          source: {
            type: 'geojson',
            data: selectedProperty.map
          },
          paint: {
            'line-color': '#000',
            'line-width': 4
          }
        })
        mapRef.addLayer({
          id: 'comparisonProperty1',
          type: 'line',
          source: {
            type: 'geojson',
            data: comparisonProperty1.map
          },
          paint: {
            'line-color': STEEL_BLUE,
            'line-width': 4
          }
        })
        mapRef.addLayer({
          id: 'comparisonProperty2',
          type: 'line',
          source: {
            type: 'geojson',
            data: comparisonProperty2.map
          },
          paint: {
            'line-color': SINBAD,
            'line-width': 4
          }
        })
      })
    }
  }, [map])

  const _onViewportChange = viewport => setViewPort({ ...viewport })
  return (
    <Container>
      <RatingsContainer />
      <MapGL
        {...viewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiZGV2Ym9vc3QiLCJhIjoiY2s0YXRhYWlvMDZ0czNkcGVldWJqbWVwcSJ9.Rl-LdYMQDN5TxD-233i3iA'
        }
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={_onViewportChange}
        ref={el => setMap(el)}
      >
        <Marker
          latitude={39.0297191169293}
          longitude={-77.20208644869089}
          offsetLeft={-100}
          offsetTop={-10}
        >
          <Icon src={car} />
        </Marker>
      </MapGL>
    </Container>
  )
}

export default MapContainer
