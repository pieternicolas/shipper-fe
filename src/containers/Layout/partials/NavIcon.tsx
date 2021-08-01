/** @jsxImportSource @emotion/react */
import Div from 'atoms/Div';

import useMakeStyles from 'hooks/useMakeStyles';

import { bpDesktop, StylesFunc } from 'config/styles';

export type NavIconProps = {
  open: boolean;
  onClick?: () => void;
};
type NavIconClasses = 'root' | 'bar' | 'bar1' | 'bar2' | 'bar3';

const navIconStyles: StylesFunc<NavIconClasses, NavIconProps> = (
  theme,
  props,
) => ({
  root: {
    cursor: 'pointer',
    [bpDesktop]: {
      display: 'none',
    },
  },
  bar: {
    width: '25px',
    height: '5px',
    backgroundColor: theme.color.black,
    margin: '6px 0',
    transition: '0.5s',
  },
  bar1: {
    marginTop: 0,
    transform: props?.open ? 'rotate(-45deg) translate(-8px, 7px)' : undefined,
  },
  bar2: {
    opacity: props?.open ? 0 : undefined,
  },
  bar3: {
    marginBottom: 0,
    transform: props?.open ? 'rotate(45deg) translate(-8px, -8px)' : undefined,
  },
});

const NavIcon = (props: NavIconProps) => {
  const classes = useMakeStyles(navIconStyles, props);

  return (
    <>
      <Div css={classes.root} onClick={() => props.onClick?.()}>
        <Div css={[classes.bar, classes.bar1]} />
        <Div css={[classes.bar, classes.bar2]} />
        <Div css={[classes.bar, classes.bar3]} />
      </Div>
    </>
  );
};

export default NavIcon;
