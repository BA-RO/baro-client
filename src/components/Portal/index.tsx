import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import type { PORTAL_ID } from '@constants/portalId';

interface PortalProps {
  children: ReactNode;
  id: (typeof PORTAL_ID)[keyof typeof PORTAL_ID];
}

const Portal = ({ children, id }: PortalProps) => {
  const root = document.getElementById(id);

  return ReactDOM.createPortal(children, root);
};

export default Portal;
