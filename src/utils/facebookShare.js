export const shareFacebook = (url) => {
  const sharedLink = encodeURIComponent(url);
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`,
    "_blank",
    "popup,noopener,noreferrer"
  );
};
