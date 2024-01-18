import './addFolderModal.css';
import { useState } from 'react';
import CHECKIMG from "../../assets/check.svg";

function Titles({title, subtitle}) {
  return (
    <div className="titles">
        <div className="title">{title}</div>
        <div className="subTitle">{subtitle}</div>
      </div>
  )
}

  function Folder({title, linksCount}) {
    const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => {
       setIsChecked(!isChecked);
    }
    return (
      <div className={"folder"} onClick={handleClick} >
      {isChecked && <img className='check' src={CHECKIMG} alt="" />}
        <div className="textBundle">
          <div className="title">{title}</div>
          <div className="linksCount">{linksCount}</div>
        </div>
        </div>
    )
  }

export default function AddFolderModal() {
  return (
    <div className="AddFolderModal">
      <Titles title={"폴더에 추가"} subtitle={"링크주소"}/>
      <div className="folderList">
        <Folder title={'코딩팁'} linksCount={'7개 링크'}/>
        <Folder title={'채용사이트'} linksCount={'12개 링크'}/>
        <Folder title={'유용한 글'} linksCount={'30개 링크'}/>
        <Folder title={'나만의 장소'} linksCount={'3개 링크'}/>
      </div>
      <div className="button">
        <span className="text">추가하기</span>
      </div>
    </div>
  )
};