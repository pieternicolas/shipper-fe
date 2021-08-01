/** @jsxImportSource @emotion/react */
import { useState, HTMLAttributes } from 'react';
import { useTheme } from '@emotion/react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';
import Image from 'atoms/Image';
import logo from 'assets/img/logo-shipper.png';
import placeholder from 'assets/img/placeholder-avatar.png';

import useMakeStyles from 'hooks/useMakeStyles';
import useBreakpoint from 'hooks/useBreakpoint';

import layoutStyles from './styles';
import NavIcon from './partials/NavIcon';
import Sidebar from './partials/Sidebar';

export type LayoutProps = HTMLAttributes<HTMLDivElement> & {};

const Layout = ({ children }: LayoutProps) => {
  const classes = useMakeStyles(layoutStyles);
  const isMobile = useBreakpoint();
  const theme = useTheme();

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

          <Div css={classes.avatarContainer}>
            {!isMobile && (
              <Div css={classes.avatarName}>
                <Text bold>Hello,</Text>
                &nbsp;
                <Text bold color={theme.color.primary}>
                  Shipper User
                </Text>
              </Div>
            )}
            <Image src={placeholder} height="25px" />
          </Div>
        </Div>

        <Sidebar
          open={isSidebarOpen}
          onClick={() =>
            setIsSidebarOpen((state) => (isMobile ? !state : true))
          }
        />

        {children}
      </Div>
    </>
  );
};

export default Layout;
