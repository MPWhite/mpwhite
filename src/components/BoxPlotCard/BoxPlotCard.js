import React, {Component} from 'react';
import './BoxPlotCard.scss'
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from 'highcharts/highcharts-more';

class BoxPlotCard extends Component {
  render() {
    const series = {
      type: 'boxplot',
      name: 'Mood',
      fillColor: '#1e1e1e',
      animation: {
        duration: 0,
      },
      data: [
        {
          x: 1,
          low: 1,
          q1: 3,
          median: 4,
          q3: 5,
          high: 6,
          name: "12/01/2020",
        },
        {
          x: 2,
          low: 2,
          q1: 2,
          median: 3,
          q3: 4,
          high: 5,
          name: "Point2",
        },
        {
          x: 3,
          low: 2,
          q1: 4,
          median: 5,
          q3: 5,
          high: 7,
          name: "Point2",
        },
        {
          x: 4,
          low: 4,
          q1: 5,
          median: 6,
          q3: 7,
          high: 8,
          name: "Point2",
        },
        {
          x: 5,
          low: 5,
          q1: 6,
          median: 7,
          q3: 8,
          high: 9,
          name: "Point2",
        },
        {
          x: 6,
          low: 3,
          q1: 4,
          median: 5,
          q3: 7,
          high: 8,
          name: "Point2",
        },
        {
          x: 7,
          low: 2,
          q1: 4,
          median: 5,
          q3: 8,
          high: 9,
          name: "Point2",
        },
      ],
    }
    const moodPlotOptions = {
      title: {
        text: 'Mood',
        style: {
          color: '#ffffff',
          fontWeight: 500
        }
      },
      yAxis: [{
        visible: true,
        title: {
          text: 'Mood',
          style: {
            color: '#ffffff',
            fontWeight: 500
          }
        },
        gridLineDashStyle: 'dash',
        labels: {
          format: '{value}',
          style: {
            color: '#ffffff'
          }
        }
      }],
      xAxis: [{
        visible: true,
        title: {
          text: 'Day',
          style: {
            color: '#ffffff',
            fontWeight: 500
          }
        },
        gridLineDashStyle: 'dash',
        labels: {
          format: '{value}',
          style: {
            color: '#ffffff'
          }
        }
      }],
      chart: {
        backgroundColor: '#1e1e1e',
        height: '300px'
      },
      colors: ['#03dac5'],
      legend: {
        enabled: false,
      },
      series: [series],
    }

    return (
      <div className='GraphCard'>
        <HighchartsReact
          highcharts={HighchartsMore(Highcharts)}
          options={moodPlotOptions}
        />
      </div>
    );
  }
}

export default BoxPlotCard;