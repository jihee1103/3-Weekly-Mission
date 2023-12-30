import React, { useEffect, useState } from 'react'
import './Header.css';





export default function Bookmark() {
  const [folderData, setFolderData] = useState('');
  useEffect(()=>
  {
    async function bookmark (){
      try{
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
        const data = await response.json();
        const result = data
        setFolderData(result)
      }
      catch(error){
        console.log('Error')
      }
    }
    bookmark();
  },[]);
  return (
    <div className='BookmarkArea'>
      {/* <img className='codeitLogo' src={folderData.folder.owner.profileImageSource} alt='codeit' />
      <p className='nametText'>@{folderData.folder.owner.name}</p> */}
      <p className='bookmarkText'>⭐️ 즐겨찾기</p>
    </div>
  )
}
