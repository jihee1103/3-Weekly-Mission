import classNames from 'classnames/bind';

import PortalContainer from '@components/portal/Portal';
import SelectMenu from '@components/ui/atoms/select-menu';
import LinkCard from '@components/ui/molecules/card/link-card';
import AddToFolderModal from '@components/ui/molecules/modal/add-to-folder-modal/AddToFolderModal';
import LinkDeleteModal from '@components/ui/molecules/modal/link-delete-modal/LinkDeleteModal';

import { useModal } from '@hooks/useModal';

import styles from './Card.module.css';

const cn = classNames.bind(styles);

const Card = ({ link, setSelectMenutPopupState, selectMenutPopupState: { isPopuped, linkId } }) => {
  const handleKebabButton = (linkId) => {
    setSelectMenutPopupState((prev) => ({ linkId, isPopuped: !prev.isPopuped }));
  };

  const { ModalComponent, isModalOpen, toggleAndSetModal } = useModal();

  const handleMenuButton = (e, ModalComponent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleAndSetModal({ ModalComponent, linkUrl: link.url });
  };

  return (
    <>
      <LinkCard {...link}>
        <LinkCard.CardCover asAnchor className={cn('link-card')}>
          <div className={cn('card-image-box')}>
            <LinkCard.CardImage className={cn('link-image')} alt='카드 링크 이미지' />
            <LinkCard.Bookmark />
          </div>
          <div className={cn('link-text-box', 'relative')}>
            <div className={cn('justify-between')}>
              <LinkCard.TimeElapsed className={cn('link-elapsed')} />
              <LinkCard.KebabButton onClickHandler={() => handleKebabButton(link.id)} />
              {linkId === link.id && isPopuped && (
                <SelectMenu>
                  <SelectMenu.StMenuButton onClick={(e) => handleMenuButton(e, LinkDeleteModal)}>
                    삭제하기
                  </SelectMenu.StMenuButton>
                  <SelectMenu.StMenuButton onClick={(e) => handleMenuButton(e, AddToFolderModal)}>
                    폴더에 추가
                  </SelectMenu.StMenuButton>
                </SelectMenu>
              )}
            </div>
            <LinkCard.Description className={cn('link-description')} />
            <LinkCard.CreatedAt className={cn('link-createdAt')} />
          </div>
        </LinkCard.CardCover>
      </LinkCard>
      {isModalOpen && (
        <PortalContainer>
          <ModalComponent />
        </PortalContainer>
      )}
    </>
  );
};

export default Card;
