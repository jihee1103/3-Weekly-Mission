import { useInput } from '@hooks/useInput';
import './SearchBar.css';

const SearchBar = () => {
  const [input, onChange] = useInput('');
  return (
    <div className='search-bar-box'>
      <img
        alt='검색창 돋보기 아이콘'
        src={`${process.env.PUBLIC_URL}/images/share/magnifier.svg`}
        className='search-bar-icon'
      />
      <input
        className='search-bar-input'
        type='text'
        placeholder='링크를 검색해보세요.'
        value={input}
        onChange={onChange}
      />
    </div>
  );
};
export default SearchBar;
