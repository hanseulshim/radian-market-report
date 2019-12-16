const SINBAD = '#95D4C9'
const SUPERNOVA = '#FFC700'
const JORDY_BLUE = '#96D9F2'
const DEEP_KOAMARU = '#0F2682'
const STEEL_BLUE = '#4A73B9'
const SUNSET_ORANGE = '#FC5247'
const WHITE = '#FFFFFF'
const ALABASTER = '#F7F7F7'
const BOTTICELLI = '#D9E3ED'
const GALLERY = '#efefef'
const BLACK = '#000000'
const WILD_SAND = '#F4F4F4'
const IRON = '#D0D3D5'

export default {
  medianPricesConfig: {
    id: 'medianPricesDiv',
    height: '300px',
    title: 'Median Listing Prices'
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
    height: '150px',
    title: 'Market Strength'
  },
  avgHpiByBedsConfig: {
    id: 'avgHpiByBedsDiv',
    height: '150px',
    title: 'Avg {SELECTED_PROPERTY} by Beds'
  },
  avgHpiBySqFtConfig: {
    id: 'avgHpiBySqFtDiv',
    height: '150px',
    title: 'Avg {SELECTED_PROPERTY} by Sq Ft'
  },
  ageOfPropertiesConfig: {
    id: 'ageOfPropertiesDiv',
    height: '400px',
    title: 'Age of Properties Across Markets'
  },
  domVsPriceConfig: {
    id: 'domVsPriceDiv',
    height: '300px',
    title: 'DOM vs Price of Listings'
  },
  sectionOneChartConfig: {
    chart: {
      paddingTop: 20,
      paddingLeft: -5,
      fontSize: 12
    },
    legendConfig: {
      position: 'top',
      contentAlign: 'right',
      useDefaultMarker: true,
      fontSize: 14,
      labels: {
        marginLeft: 10
      },
      markers: {
        dx: -5,
        dy: -5
      }
    },
    dateAxis: {
      renderer: {
        minGridDistance: 50,
        grid: {
          location: 0.5,
          strokeOpacity: 0.1,
          stroke: BLACK
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
        minGridDistance: 25,
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
          fillOpacity: 1,
          fill: WILD_SAND
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
      stroke: STEEL_BLUE,
      fill: STEEL_BLUE
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: SINBAD,
      fill: SINBAD
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
    },
    comparisonProperty1Sold: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: STEEL_BLUE,
      fill: STEEL_BLUE
    },
    comparisonProperty2Sold: {
      hiddenInLegend: true,
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: SINBAD,
      fill: SINBAD
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
        minGridDistance: 10,
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
        minGridDistance: 20,
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
        radius: 9
      },
      radius: '85%',
      y: -5,
      startWidth: 18
    },
    series1: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: STEEL_BLUE
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
  sectionThreeChartConfig: {
    chart: {
      paddingTop: 40,
      paddingBottom: -5,
      paddingLeft: 0,
      paddingRight: 20,
      fontSize: 12
    },
    categoryAxis: {
      dataFields: {
        category: 'category'
      },
      renderer: {
        minGridDistance: 30,
        grid: {
          location: 0.5,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      },
      startLocation: 0.5,
      endLocation: 0.5
    },
    valueAxis: {
      strokeWidth: 0,
      renderer: {
        minGridDistance: 20,
        grid: {
          disabled: true
        },
        axisFills: {
          disabled: false,
          fillOpacity: 1,
          fill: WILD_SAND
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
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'value'
      },
      strokeWidth: 3,
      strokeOpacity: 0.5,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.1
    }
  },
  sectionFourChartConfig: {
    chart: {
      paddingTop: 40,
      paddingBottom: -5,
      paddingLeft: 0,
      paddingRight: 20,
      fontSize: 12
    },
    categoryAxis: {
      dataFields: {
        category: 'category'
      },
      renderer: {
        minGridDistance: 10,
        grid: {
          location: 0,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      },
      startLocation: 0,
      endLocation: 0
    },
    valueAxis: {
      strokeWidth: 0,
      renderer: {
        minGridDistance: 50,
        grid: {},
        axisFills: {
          disabled: false,
          fillOpacity: 1,
          fill: WILD_SAND
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
    selectedProperty: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'high',
        openValueY: 'low'
      },
      strokeWidth: 0,
      strokeOpacity: 0.5,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.1
    },
    selectedPropertyLineSeries: {
      noRisers: true,
      startLocation: 0.1,
      endLocation: 0.4,
      dataFields: {
        valueY: 'average',
        categoryX: 'category'
      },
      stroke: BLACK,
      strokeWidth: 3,
      strokeOpacity: 0.5
    },
    comparisonProperty1: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'high',
        openValueY: 'low'
      },
      strokeWidth: 0,
      strokeOpacity: 0.5,
      stroke: STEEL_BLUE,
      fill: STEEL_BLUE,
      fillOpacity: 0.5
    },
    comparisonProperty1LineSeries: {
      noRisers: true,
      startLocation: 0.35,
      endLocation: 0.65,
      dataFields: {
        valueY: 'average',
        categoryX: 'category'
      },
      stroke: STEEL_BLUE,
      strokeWidth: 3,
      strokeOpacity: 0.75
    },
    comparisonProperty2: {
      hiddenInLegend: true,
      dataFields: {
        categoryX: 'category',
        valueY: 'high',
        openValueY: 'low'
      },
      strokeWidth: 0,
      strokeOpacity: 0.5,
      stroke: SINBAD,
      fill: SINBAD,
      fillOpacity: 0.5
    },
    comparisonProperty2LineSeries: {
      noRisers: true,
      startLocation: 0.6,
      endLocation: 0.95,
      dataFields: {
        valueY: 'average',
        categoryX: 'category'
      },
      stroke: SINBAD,
      strokeWidth: 3,
      strokeOpacity: 1
    }
  },
  colors: {
    SINBAD,
    SUPERNOVA,
    JORDY_BLUE,
    DEEP_KOAMARU,
    STEEL_BLUE,
    GALLERY,
    SUNSET_ORANGE,
    WHITE,
    ALABASTER,
    BOTTICELLI,
    BLACK,
    WILD_SAND,
    IRON
  }
}
