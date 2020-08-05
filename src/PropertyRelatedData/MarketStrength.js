import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import styled from 'styled-components'
import { DESERT_STORM, AZURE, NEPTUNE, BLACK } from '../colors'
import config from '../config'

const Chart = styled.div`
	background: ${DESERT_STORM};
	padding-top: 15px;
`

const hand = {
	pin: {
		radius: 7,
	},
	y: 0,
	startWidth: 14,
}

const MarketStrength = () => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('./data.json')
			const data = await res.json()
			const { marketStrength } = data

			const chart = am4core.createFromConfig(
				{
					paddingTop: 40,
					paddingBottom: 10,
					fontSize: 14,
					xAxes: [
						{
							type: 'ValueAxis',
							min: 0,
							max: 100,
							strictMinMax: true,
							renderer: {
								labels: {
									radius: 5,
								},
							},
							axisRanges: [
								{
									value: -1,
									endValue: 100,
									axisFill: {
										fillOpacity: 1,
										fill: '#FFF',
										y: 10,
										radius: -35,
									},
								},
							],
						},
					],
				},
				'marketStrengthChart',
				am4charts.GaugeChart
			)
			chart.id = 'marketStrengthChart'

			const label = chart.createChild(am4core.Label)
			label.text = 'Market Strength'
			label.config = config.label()
			label.horizontalCenter = 'middle'
			label.x = '50%'
			label.y = label.y - 5

			const comparisonProperty2Hand = chart.hands.push(
				new am4charts.ClockHand()
			)
			comparisonProperty2Hand.config = hand
			comparisonProperty2Hand.stroke = NEPTUNE
			comparisonProperty2Hand.fill = NEPTUNE
			comparisonProperty2Hand.value = marketStrength.comparable2

			const comparisonProperty1Hand = chart.hands.push(
				new am4charts.ClockHand()
			)
			comparisonProperty1Hand.config = hand
			comparisonProperty1Hand.stroke = AZURE
			comparisonProperty1Hand.fill = AZURE
			comparisonProperty1Hand.value = marketStrength.comparable1

			const selectedPropertyHand = chart.hands.push(new am4charts.ClockHand())
			selectedPropertyHand.config = hand
			selectedPropertyHand.stroke = BLACK
			selectedPropertyHand.fill = BLACK
			selectedPropertyHand.value = marketStrength.selected

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
		<Chart
			id={'marketStrengthChart'}
			style={{ width: '100%', height: 200 }}
		></Chart>
	)
}

export default MarketStrength
