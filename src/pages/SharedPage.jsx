import { SharedPageLayout } from "../SharedPageLayout/SharedPageLayout";
import { useGetFolder } from "../data-access/useGetFolder";
import { Layout } from "../feature/Layout/Layout";
import { CardList } from "../ui/CardList/CardList";
import { FolderInfo } from "../ui/FolderInfo/FolderInfo";
import { ReadOnlyCard } from "../ui/ReadOnlyCard/RedOnlyCard";
import { SearchBar } from "../ui/SearchBar/SearchBar";

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data;

  return (
    <Layout>
      <SharedPageLayout
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
