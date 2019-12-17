import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { propertyData } from '../data/data.json';
import config from '../config';
import LegendSold from '../assets/legendSold.svg';
const {
  selectedProperty,
  comparisonProperty1,
  comparisonProperty2,
  soldProperty,
} = propertyData;

const { domVsPriceConfig, sectionFourChartConfig } = config;

const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const DomVsPrice = () => {
  useEffect(() => {
    const chart = am4core.createFromConfig(
      sectionFourChartConfig.chart,
      domVsPriceConfig.id,
      am4charts.XYChart,
    );
    chart.id = domVsPriceConfig.id;
    chart.data = selectedProperty.priceOfListings;

    const label = chart.createChild(am4core.Label);
    label.text = domVsPriceConfig.title;
    label.config = sectionFourChartConfig.label;

    // chart.legend = new am4charts.Legend()
    // chart.legend.parent = chart.tooltipContainer
    // chart.legend.config = sectionFourChartConfig.legendConfig

    // const marker = chart.legend.markers.template
    // marker.disposeChildren()
    // const image = marker.createChild(am4core.Image)
    // image.width = 30
    // image.height = 30
    // image.href = LegendSold

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.config = sectionFourChartConfig.categoryAxis;

    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    // categoryAxis.renderer.labels.template.disabled = true

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.config = sectionFourChartConfig.valueAxis;
    valueAxis.numberFormatter.numberFormat = '$#a';

    // SELECTED PROPERTY

    const selectedPropertySeries = chart.series.push(
      new am4charts.ColumnSeries(),
    );
    selectedPropertySeries.data = selectedProperty.priceOfListings;
    selectedPropertySeries.config = sectionFourChartConfig.selectedProperty;

    const selectedPropertyLineSeries = chart.series.push(
      new am4charts.StepLineSeries(),
    );
    selectedPropertyLineSeries.data = selectedProperty.priceOfListings;
    selectedPropertyLineSeries.config =
      sectionFourChartConfig.selectedPropertyLineSeries;

    // COMPARISON PROPERTY 1

    const comparisonProperty1Series = chart.series.push(
      new am4charts.ColumnSeries(),
    );

    comparisonProperty1Series.data = comparisonProperty1.priceOfListings;
    comparisonProperty1Series.config =
      sectionFourChartConfig.comparisonProperty1;

    const comparisonProperty1LineSeries = chart.series.push(
      new am4charts.StepLineSeries(),
    );
    comparisonProperty1LineSeries.data = comparisonProperty1.priceOfListings;
    comparisonProperty1LineSeries.config =
      sectionFourChartConfig.comparisonProperty1LineSeries;

    // COMPARISON PROPERTY 2

    const comparisonProperty2Series = chart.series.push(
      new am4charts.ColumnSeries(),
    );

    comparisonProperty2Series.data = comparisonProperty2.priceOfListings;
    comparisonProperty2Series.config =
      sectionFourChartConfig.comparisonProperty2;

    const comparisonProperty2LineSeries = chart.series.push(
      new am4charts.StepLineSeries(),
    );
    comparisonProperty2LineSeries.data = comparisonProperty2.priceOfListings;
    comparisonProperty2LineSeries.config =
      sectionFourChartConfig.comparisonProperty2LineSeries;

    // const soldProperties = chart.series.push(new am4charts.CandlestickSeries())
    // soldProperties.data = soldProperty.medianPrices
    // soldProperties.config = sectionFourChartConfig.soldProperties

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <Container>
      <div
        id={domVsPriceConfig.id}
        style={{ width: '100%', height: domVsPriceConfig.height }}
      ></div>
    </Container>
  );
};

export default DomVsPrice;
