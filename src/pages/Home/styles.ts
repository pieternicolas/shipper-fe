import { StylesFunc } from 'config/styles';

type HomeClasses = 'container' | 'driversContainer' | 'pagination';

const homeStyles: StylesFunc<HomeClasses> = (theme) => ({
  container: {
    backgroundColor: theme.color.background,
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    flex: '1 1 auto',
    overflowY: 'auto',
  },
  driversContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3em',
  },
});

export default homeStyles;
