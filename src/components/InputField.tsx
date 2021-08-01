/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode } from 'react';

import Div from 'atoms/Div';

import useMakeStyles from 'hooks/useMakeStyles';

import { StylesFunc } from 'config/styles';

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};
type InputFieldClasses = 'container' | 'input' | 'icon';

const inputFieldStyles: StylesFunc<InputFieldClasses, InputFieldProps> = (
  theme,
) => ({
  container: {
    border: `1px solid ${theme.color.gray}`,
    borderRadius: '4px',
    padding: '0.5em',
    display: 'flex',
    gap: '0.5em',
  },
  input: {
    border: 0,
    padding: 0,
    outline: 'none',
    width: '100%',
  },
  icon: {
    height: '1em',
    width: '1em',
  },
});

const InputField = ({ icon, ...props }: InputFieldProps) => {
  const classes = useMakeStyles(inputFieldStyles);

  return (
    <>
      <Div css={classes.container}>
        {!!icon && <Div css={classes.icon}>{icon}</Div>}
        <input type="text" css={classes.input} {...props} />
      </Div>
    </>
  );
};

export default InputField;
