import Header from "../components/header/Header" ;
import Main from "../components/main/Main";

export default function FolderPage() {
  return(
    <div className="FolderPage">
      <Header serachIsLoading={true}/>
      <Main/>
    </div>
  )
}