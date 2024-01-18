import Header from "../components/header/Header" ;
import Main from "../components/main/Main";

export default function SharedPage() {
  return(
    <div className="Shared page">
      <Header serachIsLoading={false}/>
      <Main/>
      
    </div>
  )
}