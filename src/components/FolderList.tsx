import React, { useState, useEffect } from "react";
import { useFetchFolders } from "./hooks/useFetchFolders";
import { fetchFolders } from "./api/fetchFolders";
import FolderContent from "./FolderContent";
import "../styles/FolderList.css";

function FolderList({ searchTerm }) {
    const { folders, error: folderError } = useFetchFolders();
    const [links, setLinks] = useState([]);
    const [error, setError] = useState(null);

    const handleFolderClick = (folderId) => {
        fetchFolders(folderId).then(setLinks).catch(setError);
    };

    useEffect(() => {
        fetchFolders("all")
            .then((fetchedLinks) => {
                const filteredLinks = fetchedLinks.filter(
                    (link) =>
                        link.title
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        link.description
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        link.url
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase())
                );
                setLinks(filteredLinks);
            })
            .catch(setError);
    }, [searchTerm]);

    if (folderError || error)
        return <div>Error: {(folderError || error).message}</div>;

    return (
        <div>
            {searchTerm && (
                <div className="search-results-message">
                    <div className="search-results-text">{searchTerm}</div>으로
                    검색한 결과입니다
                </div>
            )}
            <FolderContent
                folders={folders}
                links={links}
                onFolderClick={handleFolderClick}
            />
        </div>
    );
}

export default FolderList;
