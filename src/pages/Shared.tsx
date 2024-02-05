import Header from "../components/Header";
import Nav from "../components/Nav";
import Cardlist from "../components/Cardlist";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function Shared() {
    return (
        <div className="shared">
            <Header />
            <Nav />
            <SearchBar />
            <Cardlist />
            <Footer />
        </div>
    );
}

export default Shared;
