import React from 'react';
import './StatCard.scss'

const StatCard = ({title, value, unit, time}) => {
    return (
      <div>
        <div className='StatCard'>
          <span className='StatCard__title'>{title}</span>
          <div className='StatCard__main'>
            <span className='StatCard__value'>{value}</span>
            <span className='StatCard__unit'>{unit}</span>
          </div>
          <span className='StatCard__date'>{time}</span>
        </div>
      </div>
    );
  }

export default StatCard;