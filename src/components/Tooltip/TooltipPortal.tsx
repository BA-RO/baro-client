import type { ReactElement } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface TooltipPortalProps {
  children: ReactElement;
}

const TOOLTIP_PORTAL_ID = 'tooltip-root';
const TOOLTIP_ROOT_TAG = 'div';

const TooltipPortal = ({ children }: TooltipPortalProps) => {
  const tooltipRoot = document.createElement(TOOLTIP_ROOT_TAG);
  tooltipRoot.id = TOOLTIP_PORTAL_ID;

  useEffect(() => {
    if (tooltipRoot) {
      document.body.appendChild(tooltipRoot);
    }

    return () => {
      document.body.removeChild(tooltipRoot);
    };
  }, [tooltipRoot]);

  return ReactDOM.createPortal(children, tooltipRoot);
};

export default TooltipPortal;
