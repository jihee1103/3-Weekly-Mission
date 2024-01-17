export const copySharingLinkToClipBoard = async (url) => {
  try {
    await navigator.clipboard.writeText(url);
  } catch (err) {
    console.error(err);
  }
};
