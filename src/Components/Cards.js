import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpg'
              text='Venture into the heart of the untouched Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Cruise Bali in Style. No Crowds. No Compromises'
              label='Nature'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Blue Skies. Golden Sands. No Deadlines'
              label='Coastal'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Skip the long haul. Dive into a city break'
              label='Urban'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Race the winds of the Sahara'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;