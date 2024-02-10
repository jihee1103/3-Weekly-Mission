import { ChangeEvent, FormEvent, useState } from "react";
import search from "../../assets/search.svg";
import clear from "../../assets/clear.svg";
import "./style.css";
import { getFolderLinks, getSampleFolder } from "../../api";
import { Link, SampleFolderLink } from "../../types";
import { useLocation } from "react-router-dom";

interface SearchProps {
  setFolderPageLinks?: React.Dispatch<React.SetStateAction<Link[]>>;
  setSharedPageLinks?: React.Dispatch<React.SetStateAction<SampleFolderLink[]>>;
  folderId?: number;
}

const SearchBar = ({ setFolderPageLinks, setSharedPageLinks, folderId }: SearchProps) => {
  const [value, setValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const { pathname } = useLocation();

  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleLoadLinks = async () => {
    if (pathname === "/folder") {
      const response = await getFolderLinks(folderId);
      return response.data;
    }

    if (pathname === "/shared") {
      const response = await getSampleFolder();
      return response.folder.links;
    }
  };

  const filterData = (items: (Link | SampleFolderLink)[]) => {
    return items.filter(
      (item) =>
        item.title?.toLowerCase().includes(value.toLowerCase()) ||
        item.url?.toLowerCase().includes(value.toLowerCase()) ||
        item.description?.toLowerCase().includes(value.toLowerCase())
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearch(true);
    setResultValue(value);
    const links = filterData((await handleLoadLinks()) ?? []);
    if (setFolderPageLinks) {
      setFolderPageLinks(links as Link[]);
    }

    if (setSharedPageLinks) {
      setSharedPageLinks(links as SampleFolderLink[]);
    }
  };

  const handelInputClear = () => {
    setValue("");
  };

  return (
    <div className="SearchBar-box">
      <div className="SearchBar">
        <img className="SearchBar-icon" src={search} alt="검색 아이콘" />
        <form onSubmit={onSubmit}>
          <input
            className="SearchBar-input"
            type="text"
            value={value}
            onChange={handelInputChange}
            placeholder="링크를 검색해 보세요"
          />
        </form>
        {value && <img className="SearchBar-clear-icon" src={clear} onClick={handelInputClear} alt="검색 아이콘" />}
      </div>
      {isSearch && (
        <div className="SearchBar-result">
          <strong>{resultValue}</strong>으로 검색한 결과입니다.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
