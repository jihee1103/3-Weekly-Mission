import { useEffect, useState } from "react";
import MainSearch from "./MainSearch";
import MainFiles from "./MainFiles";
import { getLinks, getMyFolders } from "./api/Api";
import { Buttons } from "./buttons";
import Fnc from "./fnc";
import addImage from "../../assets/add.svg";
import { EmptyFile } from "./emptyFile";
import "./main.css";

function Main() {
  const [links, setLinks] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({id: null, name: '전체'});
  const [names, setNames] = useState([]);

  const getFolders = async (id) => {                      // 폴더 안에 파일들 받아오기
    const { data } = await getLinks(id);
    setLinks(data);
  };

  const getFolderList = async () => {                     // url에서 폴더 목록 받아오기
    const { data } = await getMyFolders();
    setNames(data);
  };
  
  useEffect(() => {
    getFolderList();
  }, []);
  
  useEffect(()=>{
    getFolders(currentFolder.id);
  }, [currentFolder]);

  const handleClickFolder = (folder) => {
    setCurrentFolder(folder);
  }

  return (
    <div className="Main">
      <div className="box">
        <div className="item01">
          <MainSearch />
        </div>
        <div className="item02">
          <div className="fileList">
            <div className="buttonBundle">
              <button className="list-all-button" onClick={() => handleClickFolder({ id: null, name: '전체' })}>
                <div className="text">{"전체"}</div>
              </button>
              <Buttons onClick={handleClickFolder} folders={names} />
            </div>
            <img src={addImage} alt="" />
          </div>
          <div className="functionBundle">
          <div>{currentFolder.name}</div> 
          {/* 폴더 id 값에 상태변경으로 폴더명 변경  */}
            {currentFolder.name !== "전체" && 
            <div className="fnc-btn">
              <Fnc value="공유" />
              <Fnc value="이름변경" />
              <Fnc value="삭제" />
            </div>}
          </div>
          {links.length === 0 ? <EmptyFile /> : <MainFiles folders={links} /> } 
          {/* 삼항 연산자로 수정  */}
        </div>
      </div>
    </div>
  );
}

export default Main;
