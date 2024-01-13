import { FolderPageLayout } from "../page-layout/FolderPageLayout/FolderPageLayout";

import { Layout } from "../sharing/Layout/Layout";
import { CardList } from "../sharing/card/CardList/CardList";
import { ReadOnlyCard } from "../sharing/card/ReadOnlyCard/RedOnlyCard";
import { SearchBar } from "../sharing/SearchBar/SearchBar";
import { LinkForm } from "../link/link-form/LinkForm";
import { useGetFolders } from "../folder/data-access-folder/useGetFolders";
import { useState } from "react";
import { ALL_LINKS_ID } from "../link/data-access-link/constant";
import { useGetLinks } from "../link/data-access-link/useGetLinks";
import { FolderToolBar } from "../folder/folder-tool-bar/FolderToolBar";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);

  return (
    <Layout>
      <FolderPageLayout
        LinkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};
