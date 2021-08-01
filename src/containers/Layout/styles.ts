import { StylesFunc } from 'config/styles';

type LayoutClasses = 'container' | 'navigationBar' | 'logo' | 'logoContainer';

const layoutStyles: StylesFunc<LayoutClasses> = (theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  navigationBar: {
    backgroundColor: theme.color.white,
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
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
