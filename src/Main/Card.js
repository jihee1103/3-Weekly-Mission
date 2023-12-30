import React from 'react'
import { useEffect, useState } from 'react';
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
      {cardData.map((link) => (
        <div key={link.id} className='cardBox'>
            <div className='imgBox'>
              <img className='linkImg' src={link.imageSource} alt='linkImg' />       
            </div>
            <div className='textBox'>
              <span className='imgTime'>{link.time}</span>
              <p className='description'>{link.description}</p>
              <span className='imgDate'>{link.date}</span>
            </div>
         </div>
        
      ))}
    </div>
  );
};






