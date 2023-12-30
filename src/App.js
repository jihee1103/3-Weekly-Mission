import "./App.css";
import Header from "./components/Header/Header";
import Folder from "./components/Folder/Folder";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
    // 로그인, 유저 데이터 관련
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState({});

    const loadUserData = async () => {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
        if (response.ok) {
            const body = await response.json();
            return body;
        } else {
            throw new Error("사용자 정보를 불러오지 못함");
        }
    };

    useEffect(() => {
        try {
            loadUserData().then((userData) => {
                setUserData({ ...userData });
                setLogin(true);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    // 폴더 관련 데이터
    const [folderData, setFolderData] = useState({});

    useEffect(() => {
        loadData().then((data) => {
            setFolderData(() => data.folder);
        });
    }, []);

    const loadData = async () => {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        const body = await response.json();
        return body;
    };

    useEffect(() => {
        console.log("데이터 불러오기 완료", folderData);
    }, [folderData]);

    return (
        <div className="App">
            <Header
                login={login}
                setLogin={setLogin}
                userData={userData}
                setUserData={setUserData}
                loadUserData={loadUserData}
            />
            <Folder folderData={folderData} />
            <Cards folderData={folderData} />
            <Footer />
        </div>
    );
}

export default App;
