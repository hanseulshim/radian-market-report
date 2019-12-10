import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { propertyData } from '../data/data.json'
import config from '../config'
am4core.useTheme(am4themesAnimated)
const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2
} = propertyData

const { marketStrengthConfig, sectionOneChartConfig } = config

const MarketStrength = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      {
        paddingTop: 40,
        paddingBottom: 5,
        xAxes: [
          {
            type: 'ValueAxis',
            min: 0,
            max: 400,
            strictMinMax: true,
            renderer: {
              labels: {
                radius: 0
              }
            },
            axisRanges: [
              {
                value: -1,
                endValue: 400,
                axisFill: {
                  fillOpacity: 1,
                  fill: '#FFF',
                  y: 10,
                  radius: -35
                }
              }
            ]
          }
        ]
      },
      marketStrengthConfig.id,
      am4charts.GaugeChart
    )
    chart.id = marketStrengthConfig.id

    const label = chart.createChild(am4core.Label)
    label.text = marketStrengthConfig.title
    label.config = sectionOneChartConfig.label
    label.horizontalCenter = 'middle'
    label.fontWeight = 'bold'
    label.x = '50%'
    label.y = -35

    const comparisonProperty2Hand = chart.hands.push(new am4charts.ClockHand())
    comparisonProperty2Hand.config = sectionOneChartConfig.hand
    comparisonProperty2Hand.stroke =
      sectionOneChartConfig.comparisonProperty2.stroke
    comparisonProperty2Hand.fill =
      sectionOneChartConfig.comparisonProperty2.fill
    comparisonProperty2Hand.value = comparisonProperty2.marketStrength

    const comparisonProperty1Hand = chart.hands.push(new am4charts.ClockHand())
    comparisonProperty1Hand.config = sectionOneChartConfig.hand
    comparisonProperty1Hand.stroke =
      sectionOneChartConfig.comparisonProperty1.stroke
    comparisonProperty1Hand.fill =
      sectionOneChartConfig.comparisonProperty1.fill
    comparisonProperty1Hand.value = comparisonProperty1.marketStrength

    const selectedPropertyHand = chart.hands.push(new am4charts.ClockHand())
    selectedPropertyHand.config = sectionOneChartConfig.hand
    selectedPropertyHand.stroke = sectionOneChartConfig.soldProperties.stroke
    selectedPropertyHand.fill = sectionOneChartConfig.soldProperties.fill
    selectedPropertyHand.value = selectedProperty.marketStrength

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <>
      <div
        id={marketStrengthConfig.id}
        style={{ width: '100%', height: marketStrengthConfig.height }}
      ></div>
    </>
  )
}

export default MarketStrength
