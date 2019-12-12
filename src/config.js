const RIPTIDE = '#8CE0CF'
const SUPERNOVA = '#FFC700'
const JORDY_BLUE = '#96D9F2'
const DEEP_KOAMARU = '#0F2682'
const DODGER_BLUE = '#2478FA'
const SUNSET_ORANGE = '#FC5247'
const WHITE = '#FFFFFF'
const ALABASTER = '#F7F7F7'
const BOTTICELLI = '#D9E3ED'
const BLACK = '#000000'

export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '300px',
    title: 'Median Prices of Active Listings'
  },
  avgSaleToListRatioConfig: {
    id: 'avgSaleToListRatioDiv',
    height: '150px',
    title: 'Avg Sale to List Ratio'
  },
  inventoryConfig: {
    id: 'inventoryDiv',
    height: '150px',
    title: 'Inventory'
  },
  marketStrengthConfig: {
    id: 'marketStrengthDiv',
    height: '130px',
    title: 'Market Strength'
  },
  avgHpiByBedsConfig: {
    id: 'avgHpiByBedsDiv',
    height: '130px',
    title: 'Avg {SELECTED_PROPERTY} by Beds'
  },
  avgHpiBySqFtConfig: {
    id: 'avgHpiBySqFtDiv',
    height: '130px',
    title: 'Avg {SELECTED_PROPERTY} by Sq Ft'
  },
  sectionOneChartConfig: {
    chart: {
      paddingTop: 20,
      paddingLeft: -5,
      seriesContainer: {
        zIndex: -1
      },
      fontSize: 12
    },
    legendConfig: {
      position: 'top',
      contentAlign: 'right',
      fontSize: 14,
      labels: {
        marginLeft: 10
      }
    },
    dateAxis: {
      renderer: {
        minGridDistance: 50,
        grid: {
          location: 0.5,
          strokeOpacity: 0.5,
          stroke: ALABASTER
        }
      },
      dateFormats: {
        month: 'MMM'
      },
      periodChangeDateFormats: {
        month: 'MMM'
      },
      startLocation: 0.5,
      endLocation: 0.5
    },
    valueAxis: {
      width: 70,
      strokeWidth: 0,
      renderer: {
        minGridDistance: 20,
        labels: {
          width: 70,
          maxWidth: 70,
          truncate: true,
          textAlign: 'end'
        },
        grid: {
          disabled: true
        },
        axisFills: {
          disabled: false,
          fillOpacity: 0.3,
          fill: ALABASTER
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
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.1
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: DODGER_BLUE,
      fill: DODGER_BLUE
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: RIPTIDE,
      fill: RIPTIDE
    },
    soldProperties: {
      name: 'Sold',
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: BLACK,
      fill: BLACK
    }
  },
  sectionTwoChartConfig: {
    chart: {
      paddingTop: 40,
      paddingBottom: -5,
      paddingLeft: 0,
      paddingRight: 20,
      fontSize: 12
    },
    legendConfig: {
      contentAlign: 'right',
      fontSize: 14,
      labels: {
        marginLeft: -35
      },
      markers: {
        dx: -10,
        dy: 8
      }
    },
    dateAxis: {
      renderer: {
        minGridDistance: 30,
        grid: {
          disabled: true
        }
      },
      dateFormats: {
        month: 'MMM'
      },
      periodChangeDateFormats: {
        month: 'MMM'
      },
      startLocation: 0.5,
      endLocation: 0.5
    },
    valueAxis: {
      strokeWidth: 0,
      renderer: {
        minGridDistance: 10,
        grid: {
          disabled: true
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
      x: 40,
      y: -30
    },
    hand: {
      pin: {
        radius: 12
      },
      radius: '85%',
      y: -5,
      startWidth: 24
    },
    series1: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: DODGER_BLUE
    },
    series2: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: BLACK
    },
    series3: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: SUNSET_ORANGE
    },
    series4: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: SUPERNOVA
    }
  },
  colors: {
    RIPTIDE,
    SUPERNOVA,
    JORDY_BLUE,
    DEEP_KOAMARU,
    DODGER_BLUE,
    SUNSET_ORANGE,
    WHITE,
    ALABASTER,
    BOTTICELLI,
    BLACK
  }
}
