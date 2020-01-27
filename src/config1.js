import { BLACK, AZURE, NEPTUNE } from './colors'
export default {
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    align: 'center',
    isMeasured: false,
    y: -35
  },
  sectionOne: {
    chart: {
      paddingLeft: -10,
      fontSize: 14
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
    selected: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: BLACK,
      fill: BLACK,
      fillOpacity: 0.05
    },
    selectedSold: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: BLACK,
      fill: BLACK
    },
    comparable1: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: AZURE,
      fill: AZURE
    },
    comparable1Sold: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: AZURE,
      fill: AZURE
    },
    comparable2: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 3,
      stroke: NEPTUNE,
      fill: NEPTUNE
    },
    comparable2Sold: {
      dataFields: {
        dateX: 'date',
        valueY: 'value'
      },
      strokeWidth: 2,
      strokeDasharray: '5, 5',
      stroke: NEPTUNE,
      fill: NEPTUNE
    }
  }
}
