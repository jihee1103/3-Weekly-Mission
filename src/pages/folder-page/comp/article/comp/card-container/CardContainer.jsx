import { useState } from 'react';

import Card from './comp/card/Card';
import CardContainerOptions from './comp/card-container-options/CardContainerOptions';
import FolderLinkCategory from './comp/folder-link-category/FolderLinkCategory';
import { useGetSortedFolderLinksData } from './comp/hooks/useGetSortedFolderLinksData';
import './CardContainer.css';

const CardContainer = () => {
  const [folderIdAndName, setFolderIdAndName] = useState({
    folderId: 'total',
    folderName: '',
  });

  const sortedLinks = useGetSortedFolderLinksData(folderIdAndName.folderId);

  return (
    <div className='card-container-wrapper'>
      <div className='card-container-controllers'>
        <FolderLinkCategory selectedFolderId={folderIdAndName.folderId} handleFolderIdAndName={setFolderIdAndName} />
        <div className='card-container-name-option-box'>
          <h3 className='card-container-category-name'>{folderIdAndName.folderName}</h3>
          {folderIdAndName.folderId !== 'total' && !!sortedLinks?.length && <CardContainerOptions />}
        </div>
      </div>
      {sortedLinks?.length ? (
        <section className='card-container'>
          {sortedLinks.map((link) => (
            <Card key={link.id} link={link} />
          ))}
        </section>
      ) : (
        <div className='no-links'>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardContainer;
