import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";

const BarChartCard = ({data}) => {
  const series = {
    name: 'Hours',
    type: 'column',
    borderWidth: 0,
    data: [
      13.964285555555556,
      25.874374709722222,
      15.012583825555557,
      13.918264073333333,
      19.827773169444445
    ],
    pointStart: Date.parse('2020-12-07'),
    pointInterval: 7 * 24 * 60 * 60 * 1000
  }
  const sleepDurationOptions = {
    title: {
      text: 'Coding Time By Week',
      style: {
        color: '#ffffff',
        fontWeight: 500
      }
    },
    yAxis: [{
      visible: true,
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
      type: 'datetime',
      visible: true,
      title: {
        text: 'Week',
        style: {
          color: '#ffffff',
          fontWeight: 500
        }
      },
      gridLineDashStyle: 'dash',
      labels: {
        style: {
          color: '#ffffff'
        }
      },
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

export default BarChartCard;