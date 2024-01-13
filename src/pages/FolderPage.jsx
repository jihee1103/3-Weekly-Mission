import { FolderPageLayout } from "../page-layout/FolderPageLayout/FolderPageLayout";
import { useGetFolder } from "../data-access/useGetFolder";
import { Layout } from "../sharing/Layout/Layout";
import { CardList } from "../sharing/card/CardList/CardList";
import { FolderInfo } from "../shared-page-ui/FolderInfo/FolderInfo";
import { ReadOnlyCard } from "../sharing/card/ReadOnlyCard/RedOnlyCard";
import { SearchBar } from "../sharing/SearchBar/SearchBar";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data;

  return (
    <Layout>
      <FolderPageLayout
        folderInfo={
          <FolderInfo profileImage={profileImage} ownerName={ownerName} foldername={folderName} />
        }
        searchBar={<SearchBar />}
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
