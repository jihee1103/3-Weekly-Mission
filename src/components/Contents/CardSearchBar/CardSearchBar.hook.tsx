import { useState } from 'react';

export const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  return { inputValue, handleInputChange, resetInputValue };
};
