import React, {useContext} from "react";
import userImg from  '../../assets/icons/icon-smile.png';
import {LoginContext} from "../../App";

const UserWrapper = () => {
    const{userName} = useContext(LoginContext);
    return (
        <div className="user-wrapper">
            <img src={userImg} alt={userImg}/>
            <p>
                @{userName}
            </p>
        </div>
    );
}

export default UserWrapper;