import React, {Component} from 'react';
import './GraphCard.scss'
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";

class GraphCard extends Component {
  render() {
    const series = {
      name: 'Hours',
      lineWidth: 3,
      data: [
        {x: 1, y: 8.1},
        {x: 2, y: 8.2},
        {x: 3, y: 8.5},
        {x: 4, y: 9.1},
        {x: 5, y: 9},
        {x: 6, y: 7.5},
        {x: 7, y: 6.5},
        {x: 8, y: 7.3},
        {x: 9, y: 5.8},
        {x: 10, y: 8.5},
        {x: 11, y: 9.0},
        {x: 12, y: 9.1}
      ],
      animation: {
        duration: 1000,
      },
    }
    const sleepDurationOptions = {
      title: {
        text: 'Total Sleep',
        style: {
          color: '#ffffff',
          fontWeight: 500
        }
      },
      yAxis: [{
        visible: false,
        title: {
          text: 'Hours',
          style: {
            color: '#ffffff',
            fontWeight: 500
          }
        },
        gridLineDashStyle: 'dash',
        labels: {
          format: '{value}h',
          style: {
            color: '#ffffff'
          }
        }
      }],
      xAxis: [{
        visible: false,
      }],
      chart: {
        backgroundColor: '#1e1e1e',
        height: '300px'
      },
      colors: ['#bb86fc'],
      legend: {
        enabled: false,
      },
      series: [series],
    }

    return (
      <div className='GraphCard'>
        <HighchartsReact
          highcharts={Highcharts}
          options={sleepDurationOptions}
        />
      </div>
    );
  }
}

export default GraphCard;