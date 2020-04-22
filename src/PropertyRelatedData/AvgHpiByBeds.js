import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import config from '../config'
import { DESERT_STORM } from '../colors'

const Container = styled.div`
	grid-area: chart4;
	background: ${DESERT_STORM};
`
const AvgHpiByBeds = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('./data.json')
			const data = await res.json()
			const { avgHpiByBeds, propertyInfo } = data

			const chart = am4core.createFromConfig(
				config.chart('section2'),
				'avgHpiByBedsChart',
				am4charts.XYChart
			)

			chart.legend = new am4charts.Legend()
			chart.legend.parent = chart.tooltipContainer
			chart.legend.config = config.legend()
			chart.id = 'avgHpiByBedsChart'

			const label = chart.createChild(am4core.Label)
			label.config = config.label('section2')
			label.text = `Avg ${propertyInfo.selected} HPI by Beds`

			const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
			dateAxis.config = config.dateAxis('section2')

			const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
			valueAxis.config = config.valueAxis('min')

			const series1 = chart.series.push(new am4charts.LineSeries())
			series1.name = '1BR'
			series1.data = avgHpiByBeds.br1
			series1.config = config.line('series1')

			const series2 = chart.series.push(new am4charts.LineSeries())
			series2.name = '2BR'
			series2.data = avgHpiByBeds.br2
			series2.config = config.line('series2')

			const series3 = chart.series.push(new am4charts.LineSeries())
			series3.name = '3BR'
			series3.data = avgHpiByBeds.br3
			series3.config = config.line('series3')

			const series4 = chart.series.push(new am4charts.LineSeries())
			series4.name = '4BR'
			series4.data = avgHpiByBeds.br4
			series4.config = config.line('series4')

			chart.events.on('ready', () => {
				window.chartCount++
			})
			return () => {
				chart.dispose()
			}
		}
		fetchData()
	}, [])

	return (
		<Container
			id={'avgHpiByBedsChart'}
			style={{ width: '100%', height: 350 }}
		/>
	)
}

export default AvgHpiByBeds
