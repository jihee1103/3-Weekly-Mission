import CardContainer from './comp/card-container/CardContainer';
import SearchBar from './comp/search-bar/SearchBar';
import './Article.css';

const Article = ({ links }) => {
  return (
    <article className='contents'>
      <div className='article-wrapper'>
        <SearchBar />
        <CardContainer links={links} />
      </div>
    </article>
  );
};
export default Article;
