import CardList from '../Card/CardList';

export default function FolderCardList({
  links,
  toggleModal,
  updateModalName,
  handleClickDeleteLink,
}) {
  return (
    <CardList
      links={links}
      toggleModal={toggleModal}
      updateModalName={updateModalName}
      handleClickDeleteLink={handleClickDeleteLink}
    />
  );
}
