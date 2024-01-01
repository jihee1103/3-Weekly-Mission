const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};

const handleLinkClick = (event, url) => {
  event.preventDefault();
  window.open(url);
};

const FolderLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <FolderLink link={link} />
        </li>
      ))}
    </ul>
  );
};

const FolderLink = ({ link }) => {
  const { createdAt, url, title, description, imageSource } = link;
  return (
    <>
      <div onClick={(event) => handleLinkClick(event, url)}>
        <img src={imageSource} alt={title} />
        <div>{title}</div>
        <div>{formatDate(createdAt)}</div>
      </div>
    </>
  );
};

export default FolderLinks;
