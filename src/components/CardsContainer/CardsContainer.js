import React from 'react';
import './style.css';
import Loader from '../Loader/Loader';
import Card from './Card/Card';

function CardsContainer({ loading, cardsDataArray}) {
  return(
    <div>
      {loading ? (
        <Loader />
        ) : (
            <div className='grid-container'>
              {cardsDataArray.map((item, i) => {
                return <Card key={i} item={item} />;
              })}
            </div>
        )}
    </div>
  )
}

export default CardsContainer;