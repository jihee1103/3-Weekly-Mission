import React, { useState } from "react";
import "../styles/SearchBar.css";
function SearchBar({ setSearchTerm }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setSearchTerm(event.target.value);
    };
    const handleClearSearch = () => {
        setInputValue("");
        setSearchTerm("");
    };

    return (
        <div className="search-bar-box">
            <form
                className="search-bar"
                onSubmit={(event) => event.preventDefault()}
            >
                <img src="/images/Search.png" alt="Search" />
                <input
                    type="text"
                    placeholder="링크를 검색해 보세요."
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <img
                    src="/images/close.svg"
                    alt="Close"
                    onClick={handleClearSearch}
                />
            </form>
        </div>
    );
}

export default SearchBar;
