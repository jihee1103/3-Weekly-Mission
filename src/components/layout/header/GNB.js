import React from 'react';
import logo from '../../../assets/images/landing-logo.svg';
import '../../../styles/gnb.css'

function GNB() {
  return (
      <nav>
        <img className="logo" src={logo}
             alt="logo"/>
        <a>
          <p className="button">
            로그인
          </p>
        </a>
      </nav>
  );
}

export default GNB;