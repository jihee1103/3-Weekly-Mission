import React from "react";
import styled from "styled-components";
import AddLinkBar from "../components/AddLinkBar";
import Footer from "../components/Footer";
import SearchLinkBar from "../components/SearchLinkBar";
import CardList from "../components/CardList";
import SharedPageHeaderNavigation from "../components/SharedHeaderNavigation";

const SharedPage = () => {
  return (
    <>
      <HeaderContainer>
        <SharedPageHeaderNavigation />
        <AddLinkBar />
      </HeaderContainer>
      <main>
        <section>
          <SearchLinkBar />
        </section>
        <article>
          <CardListContainer>
            <CardList />
          </CardListContainer>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SharedPage;

const HeaderContainer = styled.header`
  background-color: #f0f6ff;
  padding-top: 32px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  width: 1060px;
  margin: 0 auto;
`;
