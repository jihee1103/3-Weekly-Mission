import React from "react";
import FolderHeader from "../components/FolderHeader";
import LinkForm from "../components/LinkForm";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

function Folder() {
    return (
        <div className="Folder">
            <FolderHeader />
            <LinkForm />
            <SearchBar />
            <FloatingActionButton />
            <FolderList />
            <Footer />
        </div>
    );
}

export default Folder;
