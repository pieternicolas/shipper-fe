/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes } from 'react';

import useMakeStyles from 'hooks/useMakeStyles';

import { StylesFunc } from 'config/styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  alignLeft?: boolean;
};
type ButtonClasses = 'root';

const buttonStyles: StylesFunc<ButtonClasses, ButtonProps> = (
  theme,
  props,
) => ({
  root: {
    width: props?.fullWidth ? '100%' : undefined,
    textAlign: props?.alignLeft ? 'left' : 'center',
    padding: '1em 0.75em',
    backgroundColor: theme.color.primary,
    color: theme.color.white,
    border: 0,
    borderRadius: '4px',
    textTransform: 'uppercase',
  },
});

const Button = ({ children, fullWidth, alignLeft, ...props }: ButtonProps) => {
  const classes = useMakeStyles(buttonStyles, { fullWidth, alignLeft });

  return (
    <button css={classes.root} {...props}>
      {children}
    </button>
  );
};

export default Button;
