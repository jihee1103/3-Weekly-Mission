import { ChangeEvent, useState } from 'react';

export const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== null) {
      setInputValue(e.target.value);
    }
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  return { inputValue, handleInputChange, resetInputValue };
};
