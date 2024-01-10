import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  id: 'modal-root';
  tag?: keyof HTMLElementTagNameMap;
}

const Portal = ({
  children,
  id,
  tag = 'div',
}: PropsWithChildren<PortalProps>) => {
  const root = document.createElement(tag);
  root.id = id;

  useEffect(() => {
    if (root) {
      document.body.appendChild(root);
    }

    return () => {
      document.body.removeChild(root);
    };
  }, [root]);

  return ReactDOM.createPortal(children, root);
};

export default Portal;
