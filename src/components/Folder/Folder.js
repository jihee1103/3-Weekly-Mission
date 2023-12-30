import "./Folder.css";

const Folder = ({ folderData }) => {
    return (
        <div className="codeit">
            <div className="codeit--container">
                <img src={folderData.owner.profileImageSource} alt="코드잇 마크" />
                <span>{folderData.owner.name}</span>
                <div className="favorites">{folderData.name}</div>
            </div>
        </div>
    );
};

export default Folder;
