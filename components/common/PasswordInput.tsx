import React, { useState } from "react";

const PasswordInput = ({ placeholder, error, onFocusOut }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocusOut = () => {
    setIsFocused(false);
    if (onFocusOut) {
      onFocusOut(value);
    }
  };

  return (
    <div className={`input-container ${error ? "error" : ""}`}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={handleFocusOut}
      />
      <i
        className={`eye-icon ${showPassword ? "active" : ""}`}
        onClick={handleTogglePassword}
      >
        {/* Show/hide password icon */}
      </i>
      {error && <div className="error-message">{error}</div>}
      {placeholder && !value && !isFocused && (
        <div className="placeholder">{placeholder}</div>
      )}
    </div>
  );
};

export default PasswordInput;
