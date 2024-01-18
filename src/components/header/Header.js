import { useState, useEffect } from 'react';
import defaultProfile from '../../assets/Avatar.svg'
import logoImage from '../../assets/Linkbrary.svg'
import Account from "./Account/Account";
import Logo from "./Logo/Logo";
import User from "./User/User";
import AddInput from './AddInput/AddInput';
import { getOwner } from '../main/api/Api';
import './Header.css';

function Header({serachIsLoading}) {
  const getInfo = async () => {
      const { folder } = await getOwner();
      setProfile(folder.owner.profileImageSource)
      setOwner(folder.owner.name)
      setName(folder.name)
    }

    const [profile, setProfile] = useState(defaultProfile);
    const [owner, setOwner] = useState('@코드잇');
    const [name, setName] = useState('');

    useEffect(()=>{
      getInfo();
    },[])

  return (
    <div className="Header">
        <div className="box01">
          <div className='item01'>
          <Logo value={logoImage}/>
            <Account/>
          </div>
        </div> 
        {serachIsLoading ?  
        <AddInput/>
        :
        <div className="box02"><User  profileImage={profile} folderOwner={owner} folderName={name} /></div>
        }
        
    </div>
  )
}

export default Header;