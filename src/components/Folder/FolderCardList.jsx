import CardList from '../Card/CardList';

export default function FolderCardList({
  links,
  toggleModalClick,
  updateModalName,
  handleClickDeleteLink,
}) {
  return (
    <CardList
      links={links}
      toggleModalClick={toggleModalClick}
      updateModalName={updateModalName}
      handleClickDeleteLink={handleClickDeleteLink}
    />
  );
}
