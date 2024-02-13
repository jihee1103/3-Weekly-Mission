import { useEffect, useState } from 'react';

// 서치바의 input을 관리하는 훅
export const useSearchBar = (cardList, setCardList) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  useEffect(() => {
    const filteredCardList = cardList.filter((card) => {
      if (card.title !== null && card.url !== null && card.description !== null) {
        return (
          card.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          card.url.toLowerCase().includes(inputValue.toLowerCase()) ||
          card.description.toLowerCase().includes(inputValue.toLowerCase())
        );
      }
      return null;
    });
    setCardList([...filteredCardList]);
  }, [inputValue]);

  return { inputValue, handleInputChange, resetInputValue };
};
