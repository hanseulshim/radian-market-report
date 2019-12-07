import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import { avgListToSaleRatio } from '../data/propertyData'
import config from '../config'
am4core.useTheme(am4themesAnimated)

const { zipSelected, zipComparison1, zipComparison2 } = avgListToSaleRatio
const { avgSaleToListRatio, sectionOneChartConfig } = config

const AvgListToSaleRatio = () => {
  useEffect(() => {
    const chart = am4core.create(avgSaleToListRatio.id, am4charts.XYChart)

    const label = chart.createChild(am4core.Label)
    label.text = avgSaleToListRatio.title
    label.config = sectionOneChartConfig.label

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.config = sectionOneChartConfig.dateAxis

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.config = sectionOneChartConfig.valueAxis
    valueAxis.numberFormatter.numberFormat = '#%'

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries()
    )
    selectedPropertySeries.data = zipSelected
    selectedPropertySeries.config = sectionOneChartConfig.selectedProperty

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
      id={avgSaleToListRatio.id}
      style={{ width: '100%', height: avgSaleToListRatio.height }}
    ></div>
  )
}

export default AvgListToSaleRatio
