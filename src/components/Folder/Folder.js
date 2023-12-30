import './Folder.css';

const Folder = ({ linkData }) => {
  return (
    <div className="folder">
      <div className="folder--container">
        <img src={linkData.owner?.profileImageSource} alt="코드잇 마크" />
        <span>{linkData.owner?.name}</span>
        <div className="favorites">{linkData?.name}</div>
      </div>
    </div>
  );
};

export default Folder;
