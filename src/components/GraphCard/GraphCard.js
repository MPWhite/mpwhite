import React from 'react';
import './GraphCard.scss'
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";

const GraphCard = ({data, title, seriesName}) => {
  const series = {
    name: seriesName,
    lineWidth: 3,
    data: data,
    animation: {
      duration: 1000,
    },
  }
  const sleepDurationOptions = {
    title: {
      text: title,
      style: {
        color: '#ffffff',
        fontWeight: 500
      }
    },
    yAxis: [{
      visible: true,
      title: {
        text: seriesName,
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
      type: "datetime",
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
        formatter: function () {
          return Highcharts.dateFormat('%m/%e', this.value);
        },
        style: {
          color: '#ffffff'
        }
      },
      units: [['day',[1]]]
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

export default GraphCard;