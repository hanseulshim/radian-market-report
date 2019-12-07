import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { avgSaleToListRatio } from '../data/propertyData'
import config from '../config'
am4core.useTheme(am4themesAnimated)

const { selectedProperty, zipComparison1, zipComparison2 } = avgSaleToListRatio
const { avgSaleToListRatioConfig, sectionOneChartConfig } = config

const AvgSaleToListRatio = () => {
  useEffect(() => {
    const chart = am4core.create(avgSaleToListRatioConfig.id, am4charts.XYChart)

    const label = chart.createChild(am4core.Label)
    label.text = avgSaleToListRatioConfig.title
    label.config = sectionOneChartConfig.label

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    const range = valueAxis.axisRanges.create()
    range.value = 0
    range.grid.strokeWidth = 4
    range.grid.strokeOpacity = 1
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '#%'

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )
    chart.seriesContainer.zIndex = -1
    selectedPropertySeries.data = selectedProperty
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty
    selectedPropertySeries.strokeWidth = 0

    const comparisonProperty1 = chart.series.push(new am4charts.LineSeries())
    comparisonProperty1.data = zipComparison1
    comparisonProperty1.config = sectionOneChartConfig.comparisonProperty1

    const comparisonProperty2 = chart.series.push(new am4charts.LineSeries())
    comparisonProperty2.data = zipComparison2
    comparisonProperty2.config = sectionOneChartConfig.comparisonProperty2

    return () => {
      chart.dispose()
    }
  }, [])

  return (
    <div
      id={avgSaleToListRatioConfig.id}
      style={{ width: '100%', height: avgSaleToListRatioConfig.height }}
    ></div>
  )
}

export default AvgSaleToListRatio
