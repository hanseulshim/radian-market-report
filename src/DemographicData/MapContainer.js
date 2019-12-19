import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { demographicData } from '../data/data.json'
import RatingsContainer from './RatingsContainer'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import bbox from '@turf/bbox'
import union from '@turf/union'
import { polygon } from '@turf/helpers'
import WebMercatorViewport from 'viewport-mercator-project'

const { SINBAD, STEEL_BLUE } = config.colors

const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = demographicData

const Container = styled.div`
  flex: 3;
`

const Icon = styled.div`
  background: #000;
  border-radius: 50%;
  padding: 3px;
  border: 2px solid #fff;
`

const IconLabel = styled.div`
  color: #fff;
  font-weight: bold;
  width: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MapTitle = styled.div`
  font-size: 150%;
  font-weight: bold;
  position: relative;
  top: 10px;
  left: 10px;
`

const MapInfo = styled.div`
  font-weight: bold;
  position: relative;
  top: -15px;
  left: 75%;
  width: 200px;
`

const MapContainer = () => {
  const [map, setMap] = useState(null)
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 500
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
            data: selectedProperty.map.geoJson
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
            data: comparisonProperty1.map.geoJson
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
            data: comparisonProperty2.map.geoJson
          },
          paint: {
            'line-color': SINBAD,
            'line-width': 4
          }
        })
        const unionPolygon = union(
          polygon(
            comparisonProperty1.map.geoJson.features[0].geometry.coordinates
          ),
          polygon(
            selectedProperty.map.geoJson.features[0].geometry.coordinates
          ),
          polygon(
            comparisonProperty2.map.geoJson.features[0].geometry.coordinates
          )
        )
        const extent = bbox(unionPolygon)
        const { longitude, latitude, zoom } = new WebMercatorViewport(
          viewport
        ).fitBounds(
          [
            [extent[0], extent[1]],
            [extent[2], extent[3]]
          ],
          { padding: { top: 100, bottom: 100, left: 75, right: 350 } }
        )
        setViewPort({
          ...viewport,
          longitude,
          latitude,
          zoom
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
        <MapTitle>Market Averages</MapTitle>
        <MapInfo>Comparison numbers are based on annual change</MapInfo>
        <Marker
          latitude={selectedProperty.locations.home.latitude}
          longitude={selectedProperty.locations.home.longitude}
          offsetLeft={-15}
          offsetTop={-25}
        >
          <Icon>
            <FontAwesomeIcon icon={faHome} color="white" size="lg" />
          </Icon>
        </Marker>
        {selectedProperty.locations.schools.map((school, i) => (
          <Marker
            key={i}
            latitude={school.latitude}
            longitude={school.longitude}
            offsetLeft={-15}
            offsetTop={-15}
          >
            <Icon>
              <IconLabel>{school.label}</IconLabel>
            </Icon>
          </Marker>
        ))}
      </MapGL>
    </Container>
  )
}

export default MapContainer
