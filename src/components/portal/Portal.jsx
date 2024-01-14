import ReactDOM from 'react-dom';

import styled from 'styled-components';

/**
 *
 * @param {React.ReactNode} props
 * @returns React.ReactPortal
 */
const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('portal'));
};

const PortalContainer = ({ children }) => {
  // return <Portal>{children}</Portal>;
  return <StPortalArea>{children}</StPortalArea>;
};

export default PortalContainer;

const StPortalArea = styled(Portal)`
  position: fixed;
  top: 0;
`;
