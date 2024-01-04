import React, { useEffect, useState } from 'react'
import myprofile from '../image/myprofile.svg';

export default function Profile() {
 const [profileData, setProfileData] = useState('');
 useEffect(()=>{
  async function profileData(){
    try{
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
      const data = await response.json();
      const result = data;
      setProfileData(result)
    }catch(error){
      console.log('Error')
    }
  }
  profileData();
},); 
  return (
    <div>
      {profileData ? ( 
        <div className='profileBox'>
          <img className='profileImage' src={myprofile} alt='myprofile' />
          <span>{profileData.email}</span>
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  )
}
