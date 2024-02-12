import "./SearchBar.css";
import close from "../assets/close.svg";
import { useRef } from "react";

export default function SearchBar({ handleInputChange }) {
  const inputRef = useRef();
  const onChange = () => {
    handleInputChange(inputRef?.current?.value);
  };

  const clear = () => {
    inputRef.current.value = null;
    handleInputChange(null);
  };
  return (
    <>
      <div className="search-bar">
        <input
          ref={inputRef}
          className="search"
          type="text"
          placeholder="링크를 검색해 보세요."
          onChange={onChange}
        />
        {inputRef?.current?.value && (
          <img src={close} alt="close-icon" onClick={clear} />
        )}
      </div>
      {inputRef?.current?.value && (
        <h2 className="search-result-bar">
          {inputRef?.current?.value}
          <span className="search-result-highlight">
            으로 검색한 결과입니다.
          </span>
        </h2>
      )}
    </>
  );
}
