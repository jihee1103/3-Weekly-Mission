import React from "react";
import Nav from "./Nav.js";
import "./Header.css";
import LinkSearchInput from "./LinkSearchInput.js";

export default function Header({ onOpenModal }) {
  return (
    <header>
      <Nav />
      <LinkSearchInput onOpenModal={onOpenModal} />
    </header>
  );
}
