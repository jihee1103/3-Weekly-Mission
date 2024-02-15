import { TSampleFolderLink } from '@api/shared-page/getSampleUserFolders';
import { filterMatchedDatas } from '@utils/search/filterMatchedDatas';

import Card from './comp/card/Card';

import './CardContainer.css';

type TCardContainerProps = {
  links: TSampleFolderLink[] | [];
  input?: string;
};

const CardContainer = ({ links, input }: TCardContainerProps) => {
  return (
    <section className='card-container'>
      {links
        .filter((l) => filterMatchedDatas(l, input, ['title', 'description', 'url']))
        .map((link) => (
          <Card key={link?.id} link={link} />
        ))}
    </section>
  );
};

export default CardContainer;
