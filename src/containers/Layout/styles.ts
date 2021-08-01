import { StylesFunc } from 'config/styles';

type LayoutClasses =
  | 'container'
  | 'navigationBar'
  | 'sidebar'
  | 'logo'
  | 'logoContainer';

const layoutStyles: StylesFunc<LayoutClasses> = (theme) => ({
  container: {
    height: '100%',
  },
  navigationBar: {
    backgroundColor: theme.color.white,
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  sidebar: {},
  logoContainer: {
    display: 'flex',
    gap: '1em',
  },
  logo: {
    height: '25px',
  },
});

export default layoutStyles;
