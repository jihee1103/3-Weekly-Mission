import React from 'react'
import { useEffect, useState } from 'react';
import { createDay, beforeTime } from '../shared';
import './Main.css'

export default function Card() {
  const [cardData, setCardData] = useState([]);
  
  useEffect(() => {
    async function cardImgs() {
      try {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        const data = await response.json();
        const link = data.folder.links; 
        setCardData(link);
      } catch (error) {
        console.log('Error');
      }
    }
    cardImgs();
  }, []);
  return (
    <div className='linkImgBox'>
      {cardData.map((link) => {
        const date = createDay(link.createdAt);
        const time = beforeTime(link.createdAt);
        return(
        <div key={link.id} className='cardBox'>
            <div className='imgBox'>
              <a href={link.url} target='_blank' rel='noreferrer'>
              <img className='linkImg' src={link.imageSource} alt='linkImg' />  
              </a>     
            </div>
            <div className='textBox'>
              <span className='time'>{time}</span>
              <p className='description'>{link.description}</p>
              <span className='imgDate'>{link.date}</span>
              <span className='date'>{date}</span>
            </div>
         </div>
        );
      })}
    </div>
  );
};



