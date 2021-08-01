import { StylesFunc } from 'config/styles';

type HomeClasses = 'container';

const homeStyles: StylesFunc<HomeClasses> = (theme) => ({
  container: {
    height: '100%',
    backgroundColor: theme.color.background,
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
});

export default homeStyles;
