import Header from "../components/header/Header" ;
import { Link } from "react-router-dom";

export default function HomePage() {
  return(
    <div className="HomePage">
      <Header serachIsLoading={true}/>
      <Link to="shared">MV SHARED</Link><br/>
      <Link to="folder">MV FOLDER</Link>
    </div>
  )
}