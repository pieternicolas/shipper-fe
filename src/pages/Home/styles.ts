import { StylesFunc } from 'config/styles';

type HomeClasses = 'container' | 'driversContainer';

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
});

export default homeStyles;
