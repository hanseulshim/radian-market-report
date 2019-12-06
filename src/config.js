export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '500px',
    title: 'Median Prices of Active Listings'
  },
  avgSaleToListRatio: {
    id: 'avgSaleToListRatioDiv',
    height: '500px',
    title: 'Median Prices of Active Listings'
  },
  sectionOneChartConfig: {
    label: {
      fontSize: 15,
      align: 'center',
      isMeasured: false,
      x: 75,
      y: 10
    },
    selectedProperty: {
      dataFields: {
        dateX: 'date',
        valueY: 'price'
      },
      strokeWidth: 4,
      fill: '#5B7482',
      fillOpacity: 1,
      stroke: '#5B7482'
    },
    comparisonProperty1: {
      dataFields: {
        dateX: 'date',
        valueY: 'price'
      },
      strokeWidth: 4,
      stroke: '#A9DAD2'
    },
    comparisonProperty2: {
      dataFields: {
        dateX: 'date',
        valueY: 'price'
      },
      strokeWidth: 4,
      stroke: '#FEC847'
    },
    soldProperties: {
      dataFields: {
        dateX: 'date',
        valueY: 'price'
      },
      strokeWidth: 4,
      strokeDasharray: '4, 4',
      stroke: '#000000'
    }
  }
}
