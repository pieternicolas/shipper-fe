import { bpDesktop, StylesFunc } from 'config/styles';

type LayoutClasses =
  | 'container'
  | 'navigationBar'
  | 'avatarContainer'
  | 'avatarName'
  | 'logo'
  | 'logoContainer';

const layoutStyles: StylesFunc<LayoutClasses> = (theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    [bpDesktop]: {
      overflowY: 'hidden',
    },
  },
  navigationBar: {
    backgroundColor: theme.color.white,
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  avatarContainer: {
    display: 'flex',
    gap: '1em',
    alignItems: 'center',
  },
  avatarName: {
    display: 'flex',
  },
  logoContainer: {
    display: 'flex',
    gap: '1em',
  },
  logo: {
    height: '25px',
  },
});

export default layoutStyles;
