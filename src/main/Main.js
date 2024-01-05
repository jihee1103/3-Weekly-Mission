import { useEffect, useState } from 'react';
import MainSearch from "./MainSearch";
import MainFiles from "./MainFiles";
import {getFolders} from '../api'
import './main.css';

function Main() {
  const [folders, setFolders] = useState([]);
  const getInfo = async () =>{
    const { folder } = await getFolders();
    setFolders(folder.links);
  }
  useEffect(()=>{
    getInfo();
  },[]);

  return (
    <div className="Main">
      <div className="box">
        <div className="item01">
          <MainSearch />
        </div>
        <div className="item02">
          <MainFiles folders={folders}/>
        </div>
      </div>
    </div>
  )
}

export default Main;