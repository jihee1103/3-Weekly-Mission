import { useInput } from '@hooks/useInput';

import CardContainer from './comp/card-container/CardContainer';
import SearchBar from './comp/search-bar/SearchBar';

import './Article.css';

const Article = () => {
  const [input, onChange, clearInput] = useInput('');

  return (
    <article className='contents'>
      <div className='article-area'>
        <SearchBar clearInput={clearInput} input={input} onChange={onChange} />
        <CardContainer input={input} />
      </div>
    </article>
  );
};

export default Article;
