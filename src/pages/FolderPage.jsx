import { FolderPageLayout } from "../page-layout/FolderPageLayout/FolderPageLayout";
import { useGetFolder } from "../data-access/useGetFolder";
import { Layout } from "../sharing/Layout/Layout";
import { CardList } from "../sharing/card/CardList/CardList";
import { ReadOnlyCard } from "../sharing/card/ReadOnlyCard/RedOnlyCard";
import { SearchBar } from "../sharing/SearchBar/SearchBar";
import { LinkForm } from "../folder-page-ui/LinkForm/LinkForm";

export const FolderPage = () => {
  const { data } = useGetFolder();
  const { links } = data;

  return (
    <Layout>
      <FolderPageLayout
        LinkForm={<LinkForm />}
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
