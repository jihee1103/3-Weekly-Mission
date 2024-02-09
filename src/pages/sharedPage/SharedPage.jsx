import { getLinksByUserIdAndFolderId } from "../../api/api";
import { useEffect, useState } from "react";
import searchBarStyles from "../../components/searchBar/SearchBar.module.css";
import ListPage from "../../components/listPage/ListPage";
import LinkItem from "../../components/linkItem/LinkItem";
import searchIcon from "../../assets/Search.png";
import styles from "./SharedPage.module.css";
import { useSearchParams } from "react-router-dom";

function SharedPage() {
  const [folder, setFolder] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const userId = searchParams.get("user");
  const folderId = searchParams.get("folder");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getLinksByUserIdAndFolderId(userId, folderId);
        if (!data) return;
        setFolder(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ListPage isFavorite={true}>
        <form className={searchBarStyles.form}>
          <input name="search" placeholder="링크를 검색해 보세요."></input>
          <img
            className={searchBarStyles.searchIcon}
            src={searchIcon}
            alt="검색창 아이콘"
          />
        </form>
        <div className={styles.linkList}>
          {folder &&
            folder.map((linkInfo) => (
              <LinkItem key={linkInfo.id} linkInfo={linkInfo} isShared={true} />
            ))}
        </div>
      </ListPage>
    </div>
  );
}

export default SharedPage;
