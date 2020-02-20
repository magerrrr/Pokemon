import React from 'react';
import './style.css';
import Card from './Card/Card';

function CardsContainer({ loading, cardsDataArray}) {
  return(
    <div>
      {loading ? (
        <>
          <div className='loader-container'>
            <div className="lds-roller">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
          <div className='loader'>Loading... Please wait</div>
        </>
        ) : (
          <>
            <div className='grid-container'>
              {cardsDataArray.map((item, i) => {
                return <Card key={i} item={item} />;
              })}
            </div>
          </>
        )}
    </div>
  )
}

export default CardsContainer;