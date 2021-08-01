/** @jsxImportSource @emotion/react */
import Div from 'atoms/Div';

import Image from 'atoms/Image';
import Text from 'atoms/Text';
import home from 'assets/icons/home.svg';
import user from 'assets/icons/user.svg';
import calendar from 'assets/icons/calendar.svg';

import useMakeStyles from 'hooks/useMakeStyles';

import { bpDesktop, StylesFunc } from 'config/styles';

export type SidebarProps = {
  open: boolean;
  onClick?: () => void;
};
type SidebarClasses = 'bg' | 'container' | 'navItem' | 'activeNavItem';

const sidebarStyles: StylesFunc<SidebarClasses, SidebarProps> = (
  theme,
  props,
) => ({
  bg: {
    width: props?.open ? '100%' : '0',
    height: '100%',
    backgroundColor: `${theme.color.black}50`,
    transition: '0.4s',
    zIndex: 1,
    position: 'fixed',
    overflowX: 'hidden',
    marginTop: '61px',
    [bpDesktop]: {
      position: 'inherit',
      width: '300px',
      marginTop: 0,
      overflowY: 'hidden',
    },
  },
  container: {
    height: '100%',
    width: '60%',
    minWidth: '200px',
    backgroundColor: theme.color.white,
    [bpDesktop]: {
      width: '100%',
      padding: '3em 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
    },
  },
  navItem: {
    padding: '0.5em 1em',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
  },
  activeNavItem: {
    color: theme.color.primary,
    borderLeft: `3px solid ${theme.color.primary}`,
    paddingLeft: 'calc(1em - 3px)',
    img: {
      filter: theme.color.primaryFilter,
    },
  },
});

const Sidebar = ({ open, onClick }: SidebarProps) => {
  const classes = useMakeStyles(sidebarStyles, { open });

  return (
    <>
      <Div
        css={classes.bg}
        onClick={(e) => {
          e.preventDefault();
          if (e.target === e.currentTarget) {
            onClick?.();
          }
        }}
      >
        <Div css={classes.container}>
          <Div css={classes.navItem}>
            <Image src={home} />
            <Text bold textCutoff>
              Beranda
            </Text>
          </Div>

          <Div css={[classes.navItem, classes.activeNavItem]}>
            <Image src={user} />
            <Text bold textCutoff>
              Driver Management
            </Text>
          </Div>

          <Div css={classes.navItem}>
            <Image src={calendar} />
            <Text bold textCutoff>
              Pickup
            </Text>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Sidebar;
