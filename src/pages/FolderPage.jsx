import { FolderPageLayout } from "../page-layout/FolderPageLayout/FolderPageLayout";
import { Layout } from "../sharing/Layout/Layout";
import { CardList } from "../sharing/card/CardList/CardList";
import { SearchBar } from "../sharing/SearchBar/SearchBar";
import { LinkForm } from "../link/link-form/LinkForm";
import { useGetFolders } from "../folder/data-access-folder/useGetFolders";
import { useMemo, useState } from "react";
import { ALL_LINKS_ID } from "../link/data-access-link/constant";
import { useGetLinks } from "../link/data-access-link/useGetLinks";
import { FolderToolBar } from "../folder/folder-tool-bar/FolderToolBar";
import { NoLink } from "../link/no-link/NoLink";
import { EditableCard } from "../link/editableCard/EditableCard";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const cardList = useMemo(() => {
    if (loading) return null;
    if (links.length === 0) return <NoLink />;
    return (
      <CardList>
        {links?.map((link) => (
          <EditableCard key={link?.id} {...link} />
        ))}
      </CardList>
    );
  }, [loading, links]);

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
        cardList={cardList}
      />
    </Layout>
  );
};
