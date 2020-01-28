import { BLACK, AZURE, NEPTUNE, VALENCIA, SUPERNOVA } from './colors'

const lineConfig = {
  dataFields: {
    dateX: 'date',
    valueY: 'value'
  },
  strokeWidth: 3
}

const dashLineConfig = {
  dataFields: {
    dateX: 'date',
    valueY: 'value'
  },
  strokeWidth: 2,
  strokeDasharray: '5, 5'
}

const dateAxis = {
  dateFormats: {
    month: 'MMM'
  },
  periodChangeDateFormats: {
    month: 'MMM'
  },
  startLocation: 0.5,
  endLocation: 0.5
}

const valueAxis = {
  strokeWidth: 0,
  renderer: {
    minGridDistance: 30,
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
}

const fontSize = 14

const label = {
  fontSize: 18,
  fontWeight: 'bold',
  align: 'center',
  isMeasured: false,
  y: -35
}

export default {
  label,
  sectionOne: {
    chart: {
      paddingLeft: -20,
      fontSize
    },
    dateAxis: {
      ...dateAxis,
      renderer: {
        minGridDistance: 50,
        grid: {
          location: 0.5,
          strokeOpacity: 0.1,
          stroke: BLACK
        }
      }
    },
    valueAxis: {
      width: 70,
      ...valueAxis
    },
    selected: {
      ...lineConfig,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.05
    },
    selectedSold: {
      ...dashLineConfig,
      stroke: BLACK
    },
    comparable1: {
      ...lineConfig,
      stroke: AZURE
    },
    comparable1Sold: {
      ...dashLineConfig,
      stroke: AZURE
    },
    comparable2: {
      ...lineConfig,
      stroke: NEPTUNE
    },
    comparable2Sold: {
      ...dashLineConfig,
      stroke: NEPTUNE
    }
  },
  sectionTwo: {
    chart: {
      paddingTop: 50,
      paddingBottom: -5,
      paddingLeft: 0,
      paddingRight: 20,
      fontSize
    },
    label: {
      ...label,
      x: 45
    },
    legendConfig: {
      contentAlign: 'right',
      fontSize,
      labels: {
        marginLeft: -35
      },
      markers: {
        dx: -10,
        dy: 8
      }
    },
    dateAxis: {
      ...dateAxis,
      renderer: {
        minGridDistance: 10,
        grid: {
          disabled: true
        }
      }
    },
    valueAxis: {
      ...valueAxis,
      renderer: {
        grid: {
          disabled: true
        }
      }
    },
    series1: {
      ...lineConfig,
      stroke: AZURE
    },
    series2: {
      ...lineConfig,
      stroke: BLACK
    },
    series3: {
      ...lineConfig,
      stroke: VALENCIA
    },
    series4: {
      ...lineConfig,
      stroke: SUPERNOVA
    }
  }
}
