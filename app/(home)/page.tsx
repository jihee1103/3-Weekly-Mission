'use client';

import { useState } from 'react';
import Input from '../components/input/Input';
import HomeBody from './components/HomeBody';

export default function Home() {
  // 임시
  const [inputValue, setInputValue] = useState('');
  const [isErrorValue] = useState(true);
  const updateInputValue = (value: string) => {
    setInputValue(value);
  };
  const testInputValue = () => {
    // test
  };
  console.log(inputValue);
  return (
    <div>
      <HomeBody />
      <Input
        type="password"
        inputValue={inputValue}
        updateInputValue={updateInputValue}
        isErrorValue={isErrorValue}
        testInputValue={testInputValue}
      />
    </div>
  );
}
