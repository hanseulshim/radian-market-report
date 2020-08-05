import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import bbox from '@turf/bbox'
import union from '@turf/union'
import { polygon } from '@turf/helpers'
import WebMercatorViewport from 'viewport-mercator-project'
import MapStat from './MapStat'
import { NEPTUNE, AZURE, BLACK } from '../colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
	grid-area: map;
	margin: -10px -50px;
	margin-top: 25px;
`

const Icon = styled.div`
	background: #000;
	border-radius: 50%;
	padding: 5px;
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

const MapContainer = () => {
	const [map, setMap] = useState(null)
	const [mapData, setMapData] = useState({})
	const [viewport, setViewPort] = useState({
		width: '100%',
		height: 820
	})

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('./data.json')
			const data = await res.json()
			setMapData(data.mapData)
			const mapData = data.mapData

			if (map) {
				const mapRef = map.getMap()
				mapRef.on('load', () => {
					mapRef.addLayer({
						id: 'selected',
						type: 'line',
						source: {
							type: 'geojson',
							data: mapData.selected.geoJson
						},
						paint: {
							'line-color': BLACK,
							'line-width': 4
						}
					})
					mapRef.addLayer({
						id: 'comparable1',
						type: 'line',
						source: {
							type: 'geojson',
							data: mapData.comparable1.geoJson
						},
						paint: {
							'line-color': AZURE,
							'line-width': 4
						}
					})
					mapRef.addLayer({
						id: 'comparable2',
						type: 'line',
						source: {
							type: 'geojson',
							data: mapData.comparable2.geoJson
						},
						paint: {
							'line-color': NEPTUNE,
							'line-width': 4
						}
					})
					const unionPolygon = union(
						polygon(
							mapData.comparable1.geoJson.features[0].geometry.coordinates
						),
						polygon(mapData.selected.geoJson.features[0].geometry.coordinates),
						polygon(
							mapData.comparable2.geoJson.features[0].geometry.coordinates
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
						{ padding: { top: 300, bottom: 50, left: 0, right: 350 } }
					)
					window.chartCount++
					setViewPort({
						...viewport,
						longitude,
						latitude,
						zoom
					})
				})
			}
		}
		fetchData()
	}, [map])

	const _onViewportChange = (viewport) => setViewPort({ ...viewport })
	return (
		<Container>
				<MapGL
					{...viewport}
					mapboxApiAccessToken={
						'pk.eyJ1IjoiZGV2Ym9vc3QiLCJhIjoiY2s0YXRhYWlvMDZ0czNkcGVldWJqbWVwcSJ9.Rl-LdYMQDN5TxD-233i3iA'
					}
					mapStyle="mapbox://styles/mapbox/light-v10"
					onViewportChange={_onViewportChange}
					ref={(el) => setMap(el)}
					preserveDrawingBuffer
				>
					{mapData.properties ? (
						<>
					<MapStat />
					<Marker
						latitude={mapData.properties.home.latitude}
						longitude={mapData.properties.home.longitude}
						offsetLeft={-15}
						offsetTop={-25}
					>
						<Icon>
							<FontAwesomeIcon icon={faHome} color="white" size="lg" />
						</Icon>
					</Marker>
					{mapData.properties &&
						mapData.properties.schools.map((school, i) => (
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
						))}</>
						) : (
							'Loading'
						)}
				</MapGL>
		</Container>
	)
}

export default MapContainer
