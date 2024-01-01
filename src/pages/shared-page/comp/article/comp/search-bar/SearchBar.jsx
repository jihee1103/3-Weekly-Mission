import { useInput } from '../../../../../../hooks/useInput';
import './SearchBar.css';

const SearchBar = () => {
  const [input, onChange] = useInput('');
  return (
    <div className='searchbar-box'>
      <i className='searchbar-icon'></i>
      <input className='searchbar' type='text' placeholder='링크를 검색해보세요.' value={input} onChange={onChange} />
    </div>
  );
};
export default SearchBar;
