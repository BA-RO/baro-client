import type { PropsWithChildren } from 'react';

import Navigation from '../Navigation/Navigation';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
