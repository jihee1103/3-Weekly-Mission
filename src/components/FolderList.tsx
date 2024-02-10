import React, { useState, useEffect } from "react";
import { useFetchFolders } from "./hooks/useFetchFolders";
import { fetchFolders } from "./api/fetchFolders";
import FolderContent from "./FolderContent";

function FolderList({ searchTerm }) {
    const { folders, error: folderError } = useFetchFolders();
    const [links, setLinks] = useState([]);
    const [error, setError] = useState(null);

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
        <FolderContent
            folders={folders}
            links={links}
            onFolderClick={() => {}}
        />
    );
}

export default FolderList;
