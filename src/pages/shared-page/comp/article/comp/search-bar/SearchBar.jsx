import { useInput } from '../../../../../../hooks/useInput';
import './SearchBar.css';

const SearchBar = () => {
  const [input, onChange] = useInput('');
  return (
    <div className='searchbar-box'>
      <img alt='검색창 돋보기 아이콘' className='searchbar-icon' />
      <input
        className='searchbar-input'
        type='text'
        placeholder='링크를 검색해보세요.'
        value={input}
        onChange={onChange}
      />
    </div>
  );
};
export default SearchBar;
