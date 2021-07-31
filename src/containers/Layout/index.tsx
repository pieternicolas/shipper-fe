/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';

import Div from 'atoms/Div';
import Image from 'atoms/Image';

import useMakeStyles from 'hooks/useMakeStyles';

import logo from 'assets/img/logo-shipper.png';
import placeholder from 'assets/img/placeholder-avatar.png';

import layoutStyles from './styles';
import NavIcon from './partials/NavIcon';

export type LayoutProps = HTMLAttributes<HTMLDivElement> & {};

const Layout = ({ children }: LayoutProps) => {
  const classes = useMakeStyles(layoutStyles);

  return (
    <>
      <Div>
        <Div css={classes.navigationBar}>
          <Div css={classes.logoContainer}>
            <NavIcon />
            <Image src={logo} height="25px" />
          </Div>

          <Div>
            <Image src={placeholder} height="25px" />
          </Div>
        </Div>

        {children}
      </Div>
    </>
  );
};

export default Layout;
