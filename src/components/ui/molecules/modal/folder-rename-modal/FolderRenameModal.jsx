import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import Button from '@components/ui/atoms/button/normal-btn/Button';

const FolderRenameModal = () => {
  return (
    <PortalContainer>
      <StPortalCover>
        <Button />
      </StPortalCover>
    </PortalContainer>
  );
};

export default FolderRenameModal;

const StPortalCover = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
`;
