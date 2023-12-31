import { useInput } from '../../../../../../hooks/useInput';
import './SearchBar.css';

const SearchBar = () => {
  const [_input, onChange, _clearInput] = useInput({ search: '' });
  return (
    <div className='searchbar-box'>
      <i className='searchbar-icon'></i>
      <input name='search' className='searchbar' type='text' placeholder='링크를 검색해보세요.' onChange={onChange} />
    </div>
  );
};
export default SearchBar;
