import React from "react";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import styled from "./FolderPage.module.css";
import LinkAddForm from "../components/LinkAddForm/LinkAddForm";

export default function FolderPage() {
  return (
    <main className={styled.main}>
      <div>
        <LinkAddForm />
      </div>
      <div>
        <LinkSearchForm />
      </div>
    </main>
  );
}
