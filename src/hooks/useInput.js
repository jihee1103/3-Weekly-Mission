import { useState } from 'react';

export const useInput = initial => {
  const [input, setInput] = useState(initial);

  const onChange = e => {
    const { name, value } = e.target;
    setInput(prev => {
      if (prev) {
        return { ...prev, [name]: value };
      }
      return null;
    });
  };

  const clearInput = () => {
    setInput(null);
  };

  return [input, onChange, clearInput];
};
