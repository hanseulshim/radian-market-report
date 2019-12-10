export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '400px',
    title: 'Median Prices of Active Listings'
  },
  avgSaleToListRatioConfig: {
    id: 'avgSaleToListRatioDiv',
    height: '250px',
    title: 'Avg Sale to List Ratio'
  },
  inventoryConfig: {
    id: 'inventoryDiv',
    height: '275px',
    title: 'Inventory'
  },
  marketStrengthConfig: {
    id: 'marketStrengthDiv',
    height: '250px',
    title: 'Market Strength'
  },
  avgHpiByBedsConfig: {
    id: 'avgHpiByBedsDiv',
    height: '250px',
    title: ''
  },
  legendConfig: {
    position: 'top',
    contentAlign: 'right',
    fontSize: 14,
    labels: {
      marginLeft: 10
    }
  },
  sectionOneChartConfig: {
    chart: {
      paddingTop: 20
    },
    dateAxis: {
      renderer: {
        minGridDistance: 50
      },
      dateFormats: {
        month: 'MMM'
      },
      periodChangeDateFormats: {
        month: 'YY MMM'
      },
      startLocation: 0.5,
      endLocation: 0.5,
      paddingRight: 20
    },
    valueAxis: {
      width: 70,
      renderer: {
        minGridDistance: 50,
        labels: {
          width: 70,
          maxWidth: 70,
          truncate: true,
          textAlign: 'end'
        }
      },
      numberFormatter: {
        numberFormat: '#'
      }
    },
    label: {
      fontSize: 15,
      fontWeight: 'bold',
      align: 'center',
      isMeasured: false,
      x: 75,
      y: -20
    },
    hand: {
      pin: {
        radius: 12
      },
      radius: '85%',
      y: -15,
      startWidth: 24
    },
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      fill: '#D1D3D5',
      fillOpacity: 1,
      stroke: '#747575'
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      stroke: '#4B73B7',
      fill: '#4B73B7'
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      stroke: '#95D3C9',
      fill: '#95D3C9'
    },
    soldProperties: {
      name: 'Sold',
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 4,
      strokeDasharray: '4, 4',
      stroke: '#000000',
      fill: '#000000'
    }
  }
}
