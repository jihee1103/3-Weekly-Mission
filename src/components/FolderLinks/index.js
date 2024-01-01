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
      <img src={imageSource} alt={title} />
      <div>{title}</div>
    </>
  );
};

export default FolderLinks;
