import React, {useEffect} from 'react';
import '../../styles/pages/favorites.css';
import Top from "./Top";
import Contents from "./Contents";
import {getFolderList} from "../../utils/api";

function Favorites() {
  const [data, setData] = React.useState(null);

  const handleLoadFolderList = async () => {
    let result;
    try {
      result = await getFolderList();
      setData(result.folder);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleLoadFolderList();
  }, []);

  return (
      <div className="favorites">
        {data && <Top data={data}/>}
        {data && <Contents data={data.links}/>}
      </div>);
}

export default Favorites;