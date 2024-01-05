import { useState } from 'react';
import defaultProfile from '../img/Avatar.svg'
import logoImage from '../img/Linkbrary.svg'
import Account from "./Account";
import Logo from "./Logo";
import User from "./User";
import './Header.css';

const API_BASE_URL_FOLDER = 'https://bootcamp-api.codeit.kr/api/sample/folder';

function Header() {
  function getInfo() {
    fetch(API_BASE_URL_FOLDER)
    .then((response)=> response.json())
    .then((result)=> {
      setProfile(result.folder.owner.profileImageSource)
      setOwner(result.folder.owner.name)
      setName(result.folder.name);                   //  3번 작동된다. 어떻게 하면 효육적으로 데이터를 불러오지? 
    })
  }
  getInfo();

  const [profile, setProfile] = useState(defaultProfile);
  const [owner, setOwner] = useState('@코드잇');
  const [name, setName] = useState('');

  return (
    <div className="Header">
        <div className="box01">
          <div>
          <Logo value={logoImage}/>
            <Account />
          </div>
        </div>
        <div className="box02">
            <User  profileImage={profile} folderOwner={owner} folderName={name} />   
        </div>
    </div>
  )
}

export default Header;