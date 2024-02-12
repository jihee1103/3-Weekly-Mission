import AddLinkBar from "../components/AddLinkBar";
import Content from "../components/Content";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useGetUserFolderAsync from "../hooks/useGetUserFolderAsync";
import { useEffect, useState } from "react";

export default function Folder() {
  const [searchValue, setsearchValue] = useState("");
  const datas = useGetUserFolderAsync();
  const [searchedData, setSearchedData] = useState(datas);
  const handleInputChange = (value) => {
    setsearchValue(value);
  };

  useEffect(() => {
    const newDatas = datas?.filter((item) => {
      if (
        item.description?.includes(searchValue) ||
        item.url?.includes(searchValue) ||
        item.title?.includes(searchValue)
      ) {
        return item;
      }
    });
    setSearchedData(newDatas);
  }, [datas, searchValue]);

  return (
    <>
      <Header isSticky />
      <AddLinkBar />
      <SearchBar handleInputChange={handleInputChange} />
      <Content datas={searchedData}/>
      <Footer />
    </>
  );
}
