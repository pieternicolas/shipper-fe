/** @jsxImportSource @emotion/react */
import { useState, HTMLAttributes } from 'react';

import Div from 'atoms/Div';
import Image from 'atoms/Image';

import useMakeStyles from 'hooks/useMakeStyles';

import logo from 'assets/img/logo-shipper.png';
import placeholder from 'assets/img/placeholder-avatar.png';

import layoutStyles from './styles';
import NavIcon from './partials/NavIcon';
import Sidebar from './partials/Sidebar';

export type LayoutProps = HTMLAttributes<HTMLDivElement> & {};

const Layout = ({ children }: LayoutProps) => {
  const classes = useMakeStyles(layoutStyles);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Div css={classes.container}>
        <Div css={classes.navigationBar}>
          <Div css={classes.logoContainer}>
            <NavIcon
              open={isSidebarOpen}
              onClick={() => setIsSidebarOpen((state) => !state)}
            />
            <Image src={logo} height="25px" />
          </Div>

          <Div>
            <Image src={placeholder} height="25px" />
          </Div>
        </Div>

        <Sidebar
          open={isSidebarOpen}
          onClick={() => setIsSidebarOpen((state) => !state)}
        />

        {children}
      </Div>
    </>
  );
};

export default Layout;
