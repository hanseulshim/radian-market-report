import React from 'react'
import styled from 'styled-components'
import PropertyRelatedData from './PropertyRelatedData'
import DemographicData from './DemographicData'
import * as am4core from '@amcharts/amcharts4/core'
am4core.options.commercialLicense = true

const Container = styled.div`
	max-width: 1200px;
	margin: auto;
	background: #fff;
	position: relative;
`

const App = () => {
	window.chartCount = 0

	return (
		<Container>
			<PropertyRelatedData />
			<DemographicData />
		</Container>
	)
}

export default App
