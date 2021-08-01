import { bpDesktop, StylesFunc } from 'config/styles';

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
    [bpDesktop]: {
      width: 'calc(100% - 300px - 2em)',
    },
  },
  driversContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    [bpDesktop]: {
      flexDirection: 'row',
      overflowX: 'auto',
    },
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3em',
    div: {
      cursor: 'pointer',
    },
  },
});

export default homeStyles;
