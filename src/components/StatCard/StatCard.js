import React, {Component} from 'react';
import './StatCard.scss'

const StatCard = ({title, value, unit}) => {
    return (
      <div>
        <div className='StatCard'>
          <span className='StatCard__title'>{title}</span>
          <div className='StatCard__main'>
            <span className='StatCard__value'>{value}</span>
            <span className='StatCard__unit'>{unit}</span>
          </div>
        </div>
      </div>
    );
  }

export default StatCard;