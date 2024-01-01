const formatDate = (value) => {
  const currentDate = new Date();
  const createdDate = new Date(value);
  const diff = currentDate - createdDate;
  const diffMin = Math.floor(diff / (60 * 1000));
  const diffHour = Math.floor(diff / (60 * 60 * 1000));
  const diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
  const diffMonth = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
  const diffYear = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));

  if (diffMin < 2) {
    return "1 minute ago";
  } else if (diffMin <= 59) {
    return `${diffMin} minute ago`;
  } else if (diffHour < 2) {
    return "1 hour ago";
  } else if (diffHour <= 23) {
    return `${diffHour} hours ago`;
  } else if (diffDate < 2) {
    return "1 day ago";
  } else if (diffDate <= 30) {
    return `${diffDate} days ago`;
  } else if (diffMonth < 2) {
    return "1 month ago";
  } else if (diffMonth <= 11) {
    return `${diffMonth} month ago`;
  } else if (diffYear <= 1) {
    return "1 year ago";
  } else if (diffYear > 1) {
    return `${diffYear} years ago`;
  }
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
