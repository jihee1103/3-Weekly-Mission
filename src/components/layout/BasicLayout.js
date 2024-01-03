import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

function BasicLayout({children}) {
  return <>
    <Header/>
    <Main>
      {children}
    </Main>
    <Footer/>
  </>
}

export default BasicLayout;