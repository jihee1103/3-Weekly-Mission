import { useReducer } from 'react';

import classNames from 'classnames/bind';

import SelectMenu from '@components/ui/atoms/select-menu';
import LinkCard from '@components/ui/molecules/card/link-card';

import styles from './Card.module.css';

const cn = classNames.bind(styles);

const Card = ({ link }) => {
  const [isPopuped, toggleIsPopup] = useReducer((prev) => !prev, false);

  return (
    <LinkCard {...link}>
      <LinkCard.CardCover asAnchor className={cn('link-card')}>
        <div className={cn('card-image-box')}>
          <LinkCard.CardImage className={cn('link-image')} alt='카드 링크 이미지' />
          <LinkCard.Bookmark />
        </div>
        <div className={cn('link-text-box', 'relative')}>
          <div className={cn('justify-between')}>
            <LinkCard.TimeElapsed className={cn('link-elapsed')} />
            <LinkCard.KebabButton onClick={toggleIsPopup} />
            {isPopuped && (
              <SelectMenu>
                <SelectMenu.StMenuButton>삭제하기</SelectMenu.StMenuButton>
                <SelectMenu.StMenuButton>폴더에 추가</SelectMenu.StMenuButton>
              </SelectMenu>
            )}
          </div>
          <LinkCard.Description className={cn('link-description')} />
          <LinkCard.CreatedAt className={cn('link-createdAt')} />
        </div>
      </LinkCard.CardCover>
    </LinkCard>
  );
};

export default Card;
