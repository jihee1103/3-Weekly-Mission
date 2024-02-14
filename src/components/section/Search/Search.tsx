import { useState, ChangeEvent, MouseEvent, useRef } from 'react';
import styles from './Search.module.css';

interface Props {
  handleOnChange: (value: string) => void;
}

export default function Search({ handleOnChange }: Props) {
  const [showEraseButton, setShowEraseButton] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.target.value.toLowerCase());
    if (!e.target.value) {
      setShowEraseButton(false);
    } else {
      setShowEraseButton(true);
    }
  };

  const onClickEraseKeyword = (e: MouseEvent) => {
    if (searchInput.current) {
      searchInput.current.value = '';
    }
    handleOnChange('');
    setShowEraseButton(false);
  };

  return (
    <div className={styles['search']}>
      <img src="/images/Search.png" alt="돋보기" />
      <input
        className={styles['search-input']}
        placeholder="링크를 검색해 보세요."
        onChange={onChangeSearchInput}
        ref={searchInput}
      />
      {showEraseButton && (
        <img
          className={styles['eraseKeyword']}
          src="/images/_close.png"
          alt="X 버튼"
          onClick={onClickEraseKeyword}
        />
      )}
    </div>
  );
}
