/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';

import { StylesFunc } from 'config/styles';
import useMakeStyles from 'hooks/useMakeStyles';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: 'heading' | 'paragraph';
  bold?: boolean;
  textCutoff?: boolean;
};
type TextClasses = 'root';

const baseTextStyles: StylesFunc<TextClasses, TextProps> = (_theme, props) => ({
  root: {
    margin: 0,
    fontWeight: props?.bold ? 'bold' : 'normal',
    ...(props?.textCutoff
      ? {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }
      : {}),
  },
});

const Text = ({ children, as, ...props }: TextProps) => {
  const classes = useMakeStyles(baseTextStyles, props);

  if (as === 'heading') {
    return (
      <h3 css={classes.root} {...props}>
        {children}
      </h3>
    );
  }

  return (
    <p css={classes.root} {...props}>
      {children}
    </p>
  );
};

export default Text;
