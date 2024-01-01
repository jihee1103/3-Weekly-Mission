import { useState } from 'react';

export const useInput = initial => {
  const [input, setInput] = useState(initial);

  const onChange = e => {
    const { name, value } = e.target;
    setInput(prev => {
      if (typeof initial !== 'object') return value;
      if (prev) {
        return { ...prev, [name]: value };
      }
    });
  };

  const clearInput = () => {
    setInput(null);
  };

  return [input, onChange, clearInput];
};
