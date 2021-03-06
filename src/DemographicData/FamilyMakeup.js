import React, { useState, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'

// eslint-disable-next-line camelcase
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import styled from 'styled-components'
import config from '../config'
import Text from '../common/Text'
import { BLACK, NEPTUNE, AZURE } from '../colors'
import { hex2rgba } from '../helper'
import single from '../assets/icon_fam_1.svg'
import singleParent from '../assets/icon_fam_1-1.svg'
import couple from '../assets/icon_fam_2.svg'
import singleChild from '../assets/icon_fam_2-1.svg'
import twoChild from '../assets/icon_fam_2-2.svg'

const Container = styled.div`
	grid-area: chart4;
	display: flex;
	flex-direction: column;
	padding-bottom: 2em;
`

const Title = styled(Text)`
	margin-bottom: 15px;
`

const ChartRow = styled.div`
	display: flex;
`

const ChartContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 290px;
`
const Chart = styled.div`
  width: 230px;
  height: 230px;
  position:relative
  background-color: ${(props) =>
		props.id === 'selectedFamilyMakeupChart'
			? hex2rgba(BLACK, 0.2)
			: props.id === 'comparable1FamilyMakeupChart'
			? hex2rgba(AZURE, 0.2)
			: props.id === 'comparable2FamilyMakeupChart'
			? hex2rgba(NEPTUNE, 0.2)
			: ''};
  border-radius: 50%;
`

const FamilyMakeup = () => {
	const [propertyInfo, setPropertyInfo] = useState({})
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('./data.json')
			const data = await res.json()
			const familyMakeup = data.familyMakeup
			setPropertyInfo(data.propertyInfo)

			Object.keys(familyMakeup).map((zip) => {
				const bubbleConfig = config.getBubbleConfig(zip)

				const chart = am4core.createFromConfig(
					config.chart(),
					bubbleConfig.divId,
					am4plugins_forceDirected.ForceDirectedTree
				)
				const series = chart.series.push(
					new am4plugins_forceDirected.ForceDirectedSeries()
				)

				chart.id = bubbleConfig.divId

				series.data = familyMakeup[zip]
				series.dataFields.value = 'value'
				series.dataFields.name = 'name'
				series.minRadius = 25
				series.maxRadius = 45

				const icon = series.nodes.template.createChild(am4core.Image)
				icon.horizontalCenter = 'middle'
				icon.verticalCenter = 'middle'
				icon.maxHeight = 60

				// Add adapter functions for dynamic icon images and sizes
				icon.adapter.add('pixelHeight', (pixelHeight, target) => {
					if (target.dataItem && target.dataItem.value > 0.1) {
						return target.dataItem.value * 100
					} else return 20
				})
				icon.adapter.add('href', (href, target) => {
					if (
						target.dataItem.dataContext &&
						target.dataItem.dataContext.category
					) {
						switch (target.dataItem.dataContext.category) {
							case 'single':
								return single
							case 'single-parent':
								return singleParent
							case 'couple':
								return couple
							case '1-child':
								return singleChild
							case '2-child':
								return twoChild
						}
					}
				})

				// Configure circles. Fill Opacity is linked to value in data
				series.nodes.template.circle.fill = am4core.color(
					hex2rgba(bubbleConfig.color)
				)
				series.nodes.template.adapter.add(
					'fillOpacity',
					(fillOpacity, target) => {
						if (target.dataItem.dataContext && target.dataItem.value > 0.1) {
							return target.dataItem.value * 1.5
						} else return 0.2
					}
				)
				series.nodes.template.outerCircle.disabled = true
				series.nodes.template.circle.stroke = am4core.color(
					hex2rgba(bubbleConfig.color)
				)
				series.nodes.template.propertyFields.strokeOpacity = 'value'
				series.nodes.template.outerCircle.stroke = false

				chart.events.on('ready', () => {
					window.chartCount++
				})
				return () => {
					chart.dispose()
				}
			})
		}
		fetchData()
	}, [])

	return (
		<Container>
			<Title subChartTitle>Family Makeup</Title>
			<ChartRow>
				<ChartContainer>
					<Chart id={'selectedFamilyMakeupChart'} />
					<Text subChartTitle style={{ marginLeft: '0', marginTop: '2px' }}>
						{propertyInfo.selected}
					</Text>
				</ChartContainer>
				<ChartContainer>
					<Chart id={'comparable1FamilyMakeupChart'} />
					<Text subChartTitle style={{ marginLeft: '0', marginTop: '2px' }}>
						{propertyInfo.comparable1}
					</Text>
				</ChartContainer>
				<ChartContainer>
					<Chart id={'comparable2FamilyMakeupChart'} />
					<Text subChartTitle style={{ marginLeft: '0', marginTop: '2px' }}>
						{propertyInfo.comparable2}
					</Text>
				</ChartContainer>
			</ChartRow>
		</Container>
	)
}

export default FamilyMakeup
