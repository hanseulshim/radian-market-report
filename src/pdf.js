import JSPDF from 'jspdf'
import moment from 'moment'
import numeral from 'numeral'
import html2canvas from 'html2canvas'
import * as am4core from '@amcharts/amcharts4/core'

import {
  propertyInfo,
  stats,
  daysOnMarketInfo,
  ageOfPropertiesInfo,
  neighborhoodSummary,
  schoolRatings,
  transitRatings,
  ageVsIncome,
  familyMakeupInfo
} from './data/data.json'
import * as colors from './colors'
import ActiveListingsSold from './assets/ActiveListingsSold.svg'
// import { Roboto, RobotoBold } from './fonts'
import config from './config'

export const buildPDF = async () => {
  const doc = new JSPDF('p', 'mm', 'a4')
  // doc.addFileToVFS('Roboto-Regular.ttf', Roboto)
  // doc.addFileToVFS('Roboto-Bold.ttf', RobotoBold)
  // doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal')
  // doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold')
  // doc.setFont('Roboto')

  // // Helpers
  const width = doc.internal.pageSize.width
  const headerht = 35
  const greyBG = colors.DESERT_STORM
  const margin = 10
  const quarter = width / 4
  const third = width / 3
  const half = width / 2
  const h1 = 20
  const h2 = 18
  const h3 = 14
  const p = 8
  const chartTitle = 12
  const selectedColor = colors.BLACK
  const comp1Color = colors.AZURE
  const comp2Color = colors.NEPTUNE

  // // Dynamic Fields
  const date = moment().format('MMMM DD, YYYY')
  const shortenedDate = date => moment(date).format('MMMM YYYY')

  const selected = propertyInfo.selected.toString()
  const comp1 = propertyInfo.comparable1.toString()
  const comp2 = propertyInfo.comparable2.toString()

  /// /////////// Page 1 /////////////////

  const twoColumns = half + 15
  const statsTableStart = 62.5
  const chartColumnStart = 60

  // Document Header
  doc.setFillColor(greyBG)
  doc.rect(0, 0, width, headerht, 'F')
  doc.setFontSize(h3)
  doc.text('Market Report', margin, 15)
  doc.setFontSize(h1)
  doc.text('Property Related Data', margin, 25)

  // Header Legend
  doc.setFontSize(p)
  doc.setTextColor(colors.WHITE)
  doc.setFillColor(selectedColor)
  doc.rect(width * 0.7, 10, quarter, 5, 'F')
  doc.text('Your Market', width * 0.7 + 2, 13)
  doc.text(selected, width - margin * 2, 13)
  doc.setFillColor(comp1Color)
  doc.rect(width * 0.7, 16, quarter, 5, 'F')
  doc.text('Comparable 1', width * 0.7 + 2, 19.5)
  doc.text(comp1, width - margin * 2, 19.5)
  doc.setFillColor(comp2Color)
  doc.rect(width * 0.7, 22, quarter, 5, 'F')
  doc.setTextColor(colors.BLACK)
  doc.text('Comparable 2', width * 0.7 + 2, 25.5)
  doc.text(comp2, width - margin * 2, 25.5)
  doc.text('Comparables = 3BR, 2.5BT, 2600sqft, etc', width * 0.7, 30)

  // Sub Title
  doc.setFontSize(h2)
  doc.setFontStyle('bold')
  doc.text('How Your Market Stacks Up Against the Rest', margin, 47.5)

  // Table Header
  doc.setFontSize(h3)
  doc.text(shortenedDate(stats.date), margin, 60)

  // Table
  doc.setDrawColor(colors.DUSTY_GRAY)
  doc.setFillColor(colors.BLACK)
  doc.rect(margin, statsTableStart, third - margin, 12, 'F')
  doc.setTextColor(colors.WHITE)
  doc.setFontSize(p)
  doc.setFontStyle('normal')
  doc.text(stats.address, margin + 2, statsTableStart + 5.5)
  doc.text(
    `${stats.city}, ${stats.state} ${stats.zip}`,
    margin + 2,
    statsTableStart + 9
  )
  doc.setFontStyle('bold')
  doc.setFontSize(h3)
  doc.text(
    `$${numeral(stats.price).format('0a')}`,
    margin + 40,
    statsTableStart + 7.5
  )
  // Grey area of Table
  doc.setFillColor(greyBG)
  doc.rect(margin, statsTableStart + 12, third - margin, 80, 'F')
  // Stats Table column headers
  const column1 = margin + 21.5
  const column2 = margin + 35
  const column3 = margin + 48.5
  doc.setFillColor(colors.BLACK)
  doc.setFontStyle('normal')
  doc.rect(margin + 20, statsTableStart + 16, 12.5, 5, 'F')
  doc.setFontSize(p)
  doc.text(selected, column1, statsTableStart + 19)
  doc.setFillColor(colors.AZURE)
  doc.rect(margin + 33.5, statsTableStart + 16, 12.5, 5, 'F')
  doc.text(comp1, column2, statsTableStart + 19)
  doc.setFillColor(colors.NEPTUNE)
  doc.setTextColor(colors.BLACK)
  doc.rect(margin + 47, statsTableStart + 16, 12.5, 5, 'F')
  doc.text(comp2, column3, statsTableStart + 19)
  doc.line(margin + 1, statsTableStart + 22, third, statsTableStart + 22)
  // Stats Table Rows : Row 1
  doc.text('Avg. Listed Price', margin + 2, statsTableStart + 26, {
    maxWidth: margin + 5
  })
  doc.text(
    `$${numeral(stats.selected.avgListedPrice).format('0a')}`,
    column1,
    statsTableStart + 28
  )
  doc.text(
    `$${numeral(stats.comparable1.avgListedPrice).format('0a')}`,
    column2,
    statsTableStart + 28
  )
  doc.text(
    `$${numeral(stats.comparable2.avgListedPrice).format('0a')}`,
    column3,
    statsTableStart + 28
  )
  doc.line(margin + 1, statsTableStart + 31, third, statsTableStart + 31)

  // Stats Table Rows : Row 2
  doc.text('Avg. Sold Price', margin + 2, statsTableStart + 34, {
    maxWidth: margin + 5
  })
  doc.text(
    `$${numeral(stats.selected.avgSoldPrice).format('0a')}`,
    column1,
    statsTableStart + 36
  )
  doc.text(
    `$${numeral(stats.comparable1.avgSoldPrice).format('0a')}`,
    column2,
    statsTableStart + 36
  )
  doc.text(
    `$${numeral(stats.comparable2.avgSoldPrice).format('0a')}`,
    column3,
    statsTableStart + 36
  )
  doc.line(margin + 1, statsTableStart + 39, third, statsTableStart + 39)

  // Stats Table Rows : Row 3
  doc.text('Active Inventory', margin + 2, statsTableStart + 42, {
    maxWidth: margin + 5
  })
  doc.text(
    stats.selected.activeInventory.toString(),
    column1,
    statsTableStart + 44
  )
  doc.text(
    stats.comparable1.activeInventory.toString(),
    column2,
    statsTableStart + 44
  )
  doc.text(
    stats.comparable2.activeInventory.toString(),
    column3,
    statsTableStart + 44
  )
  doc.line(margin + 1, statsTableStart + 47, third, statsTableStart + 47)

  // Stats Table Rows: Row 4
  doc.text('Sold Inventory', margin + 2, statsTableStart + 50, {
    maxWidth: margin + 5
  })
  doc.text(
    stats.selected.soldInventory.toString(),
    column1,
    statsTableStart + 52
  )
  doc.text(
    stats.comparable1.soldInventory.toString(),
    column2,
    statsTableStart + 52
  )
  doc.text(
    stats.comparable2.soldInventory.toString(),
    column3,
    statsTableStart + 52
  )

  // Market Strength Chart
  const marketStrengthChart = await am4core.registry.baseSprites
    .find(c => c.id === 'marketStrengthChart')
    .exporting.getImage('png')
  doc.addImage(
    marketStrengthChart,
    margin,
    statsTableStart + 57,
    third - margin,
    40
  )

  // Page 1 Column Description / Info
  doc.setFontSize(p)
  doc.setFontStyle('bold')
  doc.text(stats.description, margin, statsTableStart + 105, {
    maxWidth: third - margin
  })

  // Median Prices Chart
  doc.setFontStyle('normal')
  const medianPricesChart = await am4core.registry.baseSprites
    .find(c => c.id === 'medianPricesChart')
    .exporting.getImage('png')
  doc.setFontSize(chartTitle)
  doc.text('Median Prices', third + margin, chartColumnStart)
  doc.setDrawColor(colors.BLACK)
  doc.line(
    third + margin,
    62.5,
    third + margin + twoColumns,
    chartColumnStart + 2.5
  )
  doc.addImage(
    medianPricesChart,
    third + margin,
    chartColumnStart + 5,
    twoColumns,
    60
  )

  // Average Sale to List Ratio Chart
  const avgSaleToListRatioChart = await am4core.registry.baseSprites
    .find(c => c.id === 'avgSaleToListRatioChart')
    .exporting.getImage('png')
  doc.text('Avg Sale To List Ratio', third + margin, chartColumnStart + 68)
  doc.line(
    third + margin,
    chartColumnStart + 70.5,
    third + margin + twoColumns,
    chartColumnStart + 70.5
  )
  doc.addImage(
    avgSaleToListRatioChart,
    third + margin,
    chartColumnStart + 72,
    twoColumns,
    30
  )

  // Inventory Chart
  const inventoryChart = await am4core.registry.baseSprites
    .find(c => c.id === 'inventoryChart')
    .exporting.getImage('png')
  doc.text('Inventory', third + margin, chartColumnStart + 105)
  doc.line(
    third + margin,
    chartColumnStart + 107.5,
    third + margin + twoColumns,
    chartColumnStart + 107.5
  )
  doc.addImage(
    inventoryChart,
    third + margin,
    chartColumnStart + 110,
    twoColumns,
    30
  )

  // Average HPI By Beds Chart
  const avgHpiByBedsChart = await am4core.registry.baseSprites
    .find(c => c.id === 'avgHpiByBedsChart')
    .exporting.getImage('png')
  doc.addImage(
    avgHpiByBedsChart,
    margin,
    chartColumnStart + 150,
    half - margin,
    60
  )

  // Average HPI By Square Feet Chart
  const avgHpiBySqFtChart = await am4core.registry.baseSprites
    .find(c => c.id === 'avgHpiBySqFtChart')
    .exporting.getImage('png')
  doc.addImage(
    avgHpiBySqFtChart,
    half + 2.5,
    chartColumnStart + 150,
    half - margin,
    60
  )

  /// /////////// Page 2 /////////////////

  doc.addPage('p', 'mm', 'a4')
  const page2ChartColumnLeft = margin + third + margin
  const page2ChartColumnTop = 50
  const page2GreySectionStart = 200

  // Document Header
  doc.setFillColor(greyBG)
  doc.rect(0, 0, width, headerht, 'F')
  doc.setFontSize(h3)
  doc.text('Market Report', margin, 15)
  doc.setFontSize(h1)
  doc.text('Property Related Data', margin, 25)

  // Header Legend
  doc.setFontSize(p)
  doc.setTextColor(colors.WHITE)
  doc.setFillColor(selectedColor)
  doc.rect(width * 0.7, 10, quarter, 5, 'F')
  doc.text('Your Market', width * 0.7 + 2, 13)
  doc.text(selected, width - margin * 2, 13)
  doc.setFillColor(comp1Color)
  doc.rect(width * 0.7, 16, quarter, 5, 'F')
  doc.text('Comparable 1', width * 0.7 + 2, 19.5)
  doc.text(comp1, width - margin * 2, 19.5)
  doc.setFillColor(comp2Color)
  doc.rect(width * 0.7, 22, quarter, 5, 'F')
  doc.setTextColor(colors.BLACK)
  doc.text('Comparable 2', width * 0.7 + 2, 25.5)
  doc.text(comp2, width - margin * 2, 25.5)
  doc.text('Comparables = 3BR, 2.5BT, 2600sqft, etc', width * 0.7, 30)

  // Page 2 Title & Info Column
  doc.setFontSize(h2)
  doc.setFontStyle('bold')
  doc.text('How Your Market Stacks Up Against the Rest', margin, 50, {
    maxWidth: third
  })
  doc.setFontSize(h3)
  doc.text('Days on Market', margin, 80)
  doc.setFontSize(p)
  doc.setFontStyle('normal')
  doc.text(daysOnMarketInfo, margin, 85, { maxWidth: third })

  doc.setFontSize(h3)
  doc.setFontStyle('bold')
  doc.text('Age of Properties Across Markets', margin, 105, { maxWidth: third })
  doc.setFontSize(p)
  doc.setFontStyle('normal')
  doc.text(ageOfPropertiesInfo, margin, 115, { maxWidth: third })

  // Cost Over Time on the Market Section
  doc.setFontSize(chartTitle)
  doc.setFontStyle('bold')
  doc.text(
    'Cost Over Time on the Market',
    page2ChartColumnLeft,
    page2ChartColumnTop
  )
  doc.line(
    page2ChartColumnLeft,
    page2ChartColumnTop + 2,
    width - margin,
    page2ChartColumnTop + 2
  )

  // Dom vs Price of Listings Chart
  doc.setFontSize(p)
  doc.text(
    'DOM vs Price of Listings',
    page2ChartColumnLeft + margin,
    page2ChartColumnTop + 8.5
  )
  const domVsPriceOfListingsChart = await am4core.registry.baseSprites
    .find(c => c.id === 'domVsPriceOfListingsChart')
    .exporting.getImage('png')
  doc.addImage(
    domVsPriceOfListingsChart,
    page2ChartColumnLeft,
    page2ChartColumnTop + 10,
    twoColumns - margin,
    50
  )

  // Inventory of Listings per DOM Chart
  doc.text(
    'Inventory of Listings per DOM',
    page2ChartColumnLeft + margin,
    page2ChartColumnTop + 66
  )
  const inventoryOfListingsPerDOMChart = await am4core.registry.baseSprites
    .find(c => c.id === 'inventoryOfListingsPerDOMChart')
    .exporting.getImage('png')
  doc.addImage(
    inventoryOfListingsPerDOMChart,
    page2ChartColumnLeft,
    page2ChartColumnTop + 67.5,
    twoColumns - margin,
    30
  )

  // Average DOM Over Time Chart
  doc.text(
    'Average DOM Over Time',
    page2ChartColumnLeft + margin,
    page2ChartColumnTop + 103.5
  )
  const averageDomOverTimeChart = await am4core.registry.baseSprites
    .find(c => c.id === 'averageDomOverTimeChart')
    .exporting.getImage('png')
  doc.addImage(
    averageDomOverTimeChart,
    page2ChartColumnLeft,
    page2ChartColumnTop + 105,
    twoColumns - margin,
    30
  )

  // Grey Chart section Page 2

  doc.setFillColor(greyBG)
  doc.rect(0, page2GreySectionStart, width, 150, 'F')
  doc.setFontSize(chartTitle)
  doc.setFontStyle('bold')
  doc.text(
    'Age of Properties Across Market',
    margin,
    page2GreySectionStart + 10
  )
  doc.line(
    margin,
    page2GreySectionStart + 12,
    width - margin,
    page2GreySectionStart + 12
  )
  const ageOfPropertiesChart = await am4core.registry.baseSprites
    .find(c => c.id === 'ageOfPropertiesChart')
    .exporting.getImage('png')
  doc.addImage(
    ageOfPropertiesChart,
    margin,
    page2GreySectionStart + 15,
    width - margin * 2,
    75
  )

  /// /////////// Page 3 /////////////////

  doc.addPage('p', 'mm', 'a4')

  doc.setFillColor(greyBG)
  doc.rect(0, 0, width, headerht, 'F')
  doc.setFontSize(h3)
  doc.setFontStyle('normal')
  doc.text('Market Report', margin, 15)
  doc.setFontSize(h1)
  doc.text('Demographic Related Data', margin, 25)

  // Header Legend
  doc.setFontSize(p)
  doc.setTextColor(colors.WHITE)
  doc.setFillColor(selectedColor)
  doc.rect(width * 0.7, 10, quarter, 5, 'F')
  doc.text('Your Market', width * 0.7 + 2, 13)
  doc.text(selected, width - margin * 2, 13)
  doc.setFillColor(comp1Color)
  doc.rect(width * 0.7, 16, quarter, 5, 'F')
  doc.text('Comparable 1', width * 0.7 + 2, 19.5)
  doc.text(comp1, width - margin * 2, 19.5)
  doc.setFillColor(comp2Color)
  doc.rect(width * 0.7, 22, quarter, 5, 'F')
  doc.setTextColor(colors.BLACK)
  doc.text('Comparable 2', width * 0.7 + 2, 25.5)
  doc.text(comp2, width - margin * 2, 25.5)
  doc.text('Comparables = 3BR, 2.5BT, 2600sqft, etc', width * 0.7, 30)

  // Page 3 Title / Neighborhood Summary
  doc.setFontSize(h3)
  doc.setFontStyle('bold')
  doc.text('Neighborhood Summary', margin, 45)
  doc.setFontStyle('normal')
  doc.setFontSize(p)
  doc.text(neighborhoodSummary, margin, 50, { maxWidth: half + margin })

  // School Ratings
  doc.setFontSize(h3)
  doc.setFontStyle('bold')
  doc.text('School Ratings', margin, 70)
  doc.setFontStyle('normal')
  doc.setFontSize(p)
  doc.text(schoolRatings.info, margin, 75, { maxWidth: half - margin * 2 })

  // Transit Ratings
  doc.setFontSize(h3)
  doc.setFontStyle('bold')
  doc.text('Transit Ratings', half, 70)
  doc.setFontStyle('normal')
  doc.setFontSize(p)
  doc.text(transitRatings.info, half, 75, { maxWidth: half - margin })

  const schoolRatingsContainer = document.getElementById('school-ratings')
  const schoolRatingsImg = await html2canvas(schoolRatingsContainer, {
    scale: 2
  }).then(canvas => canvas.toDataURL('image/png'))
  doc.addImage(schoolRatingsImg, margin, 85, half - margin * 2, 20)

  const transitRatingsContainer = document.getElementById('transit-ratings')
  const transitRatingsImd = await html2canvas(transitRatingsContainer, {
    scale: 1
  }).then(canvas => canvas.toDataURL('image/png'))
  doc.addImage(transitRatingsImd, half, 85, half - margin, 20)

  // const map = MAP.getCanvas(document.querySelector('.mapboxgl-canvas'))

  // const mapImgData = await map[0].toDataURL('image/png')
  // doc.addImage('mapImgData', 0, 90, width, 150)

  /// /////////// Page 4 /////////////////

  doc.addPage('p', 'mm', 'a4')
  const page4Column2Left = third + margin
  const page4Column2Top = 45
  const familyMakeupStart = 200

  doc.setFillColor(greyBG)
  doc.rect(0, 0, width, headerht, 'F')
  doc.setFontSize(h3)
  doc.setFontStyle('normal')
  doc.text('Market Report', margin, 15)
  doc.setFontSize(h1)
  doc.text('Demographic Related Data', margin, 25)

  // Header Legend
  doc.setFontSize(p)
  doc.setTextColor(colors.WHITE)
  doc.setFillColor(selectedColor)
  doc.rect(width * 0.7, 10, quarter, 5, 'F')
  doc.text('Your Market', width * 0.7 + 2, 13)
  doc.text(selected, width - margin * 2, 13)
  doc.setFillColor(comp1Color)
  doc.rect(width * 0.7, 16, quarter, 5, 'F')
  doc.text('Comparable 1', width * 0.7 + 2, 19.5)
  doc.text(comp1, width - margin * 2, 19.5)
  doc.setFillColor(comp2Color)
  doc.rect(width * 0.7, 22, quarter, 5, 'F')
  doc.setTextColor(colors.BLACK)
  doc.text('Comparable 2', width * 0.7 + 2, 25.5)
  doc.text(comp2, width - margin * 2, 25.5)
  doc.text('Comparables = 3BR, 2.5BT, 2600sqft, etc', width * 0.7, 30)

  // Page 4 Title / Neighborhood Summary
  doc.setFontSize(h3)
  doc.setFontStyle('bold')
  doc.text('Age Vs Income', margin, 45)
  doc.setFontStyle('normal')
  doc.setFontSize(p)
  doc.text(ageVsIncome, margin, 52.5, { maxWidth: third - margin })

  // Population By Age Chart
  doc.setFontSize(chartTitle)
  doc.setFontStyle('bold')
  doc.text(`${selected} Population By Age`, page4Column2Left, page4Column2Top)
  doc.line(
    page4Column2Left,
    page4Column2Top + 2,
    width - margin,
    page4Column2Top + 2
  )
  const populationByAgeChart = await am4core.registry.baseSprites
    .find(c => c.id === 'populationByAgeChart')
    .exporting.getImage('png')
  doc.addImage(
    populationByAgeChart,
    page4Column2Left - margin,
    page4Column2Top + 5,
    half + margin,
    35
  )

  // Population of Age vs Income
  doc.setFontSize(chartTitle)
  doc.setFontStyle('bold')
  doc.text('Population of Age vs Income', margin, page4Column2Top + 47.5)
  doc.line(margin, page4Column2Top + 50, width - margin, page4Column2Top + 50)
  const ageVsIncomeChart = await am4core.registry.baseSprites
    .find(c => c.id === 'ageVsIncomeChart')
    .exporting.getImage('png')
  doc.addImage(
    ageVsIncomeChart,
    margin - 5,
    page4Column2Top + 51,
    width - margin,
    90
  )

  // Family Makeup Section

  doc.text('Family Makeup', margin, familyMakeupStart)
  doc.line(margin, familyMakeupStart + 2, width - margin, familyMakeupStart + 2)
  doc.setFontStyle('normal')
  doc.setFontSize(p)
  doc.text(familyMakeupInfo, margin, familyMakeupStart + 7, {
    maxWidth: width - margin * 2
  })

  // Population Across Markets Chart

  doc.text('Population Across Markets', margin, familyMakeupStart + 20)
  const familyMakeupPopulationChart = await am4core.registry.baseSprites
    .find(c => c.id === 'familyMakeupPopulationChart')
    .exporting.getImage('png')
  doc.addImage(
    familyMakeupPopulationChart,
    margin,
    familyMakeupStart + 25,
    quarter,
    50
  )

  // Family Makeup Bubble Charts
  doc.text('Family Makeup', page4Column2Left, familyMakeupStart + 20)
  const selectedFamilyMakeupChart = await am4core.registry.baseSprites
    .find(c => c.id === 'selectedFamilyMakeupChart')
    .exporting.getImage('png')
  doc.addImage(
    selectedFamilyMakeupChart,
    page4Column2Left,
    familyMakeupStart + 25,
    40,
    40
  )

  const comparable1FamilyMakeupChart = await am4core.registry.baseSprites
    .find(c => c.id === 'comparable1FamilyMakeupChart')
    .exporting.getImage('png')
  doc.addImage(
    comparable1FamilyMakeupChart,
    page4Column2Left + 45,
    familyMakeupStart + 25,
    40,
    40
  )

  const comparable2FamilyMakeupChart = await am4core.registry.baseSprites
    .find(c => c.id === 'comparable2FamilyMakeupChart')
    .exporting.getImage('png')
  doc.addImage(
    comparable2FamilyMakeupChart,
    page4Column2Left + 90,
    familyMakeupStart + 25,
    40,
    40
  )

  // // Stats Table
  // const table = document.getElementById('stat-table')
  // const tableImg = await html2canvas(table).then(canvas =>
  //   canvas.toDataURL('image/png')
  // )

  // Save
  doc.save('report.pdf')
}
