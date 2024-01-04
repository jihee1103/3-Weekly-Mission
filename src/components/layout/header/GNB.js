import React from 'react';
import logo from '../../../assets/images/landing-logo.svg';
import '../../../styles/gnb.css'
import LoginButton from "../../forms/LoginButton";

function GNB() {

  return (
      <nav>
        <img className="logo" src={logo}
             alt="logo"/>
        <LoginButton/>
      </nav>
  );
}

export default GNB;
