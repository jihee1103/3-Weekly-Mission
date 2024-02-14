import { TSampleFolderLink } from '@api/shared-page/getSampleUserFolders';
import { useInput } from '@hooks/useInput';

import CardContainer from './comp/card-container/CardContainer';
import SearchBar from './comp/search-bar/SearchBar';

import './Article.css';

type TArticleProps = {
  links: TSampleFolderLink[] | [];
};

const Article = ({ links }: TArticleProps) => {
  const [input, onChange, clearInput] = useInput('');

  return (
    <article className='contents'>
      <div className='article-area'>
        <SearchBar clearInput={clearInput} input={input} onChange={onChange} />
        <CardContainer links={links} input={input} />
      </div>
    </article>
  );
};

export default Article;
