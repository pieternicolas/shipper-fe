/** @jsxImportSource @emotion/react */
import { ImgHTMLAttributes } from 'react';

import useMakeStyles from 'hooks/useMakeStyles';

import { StylesFunc } from 'config/styles';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {};

const imageStyles: StylesFunc<'root', ImageProps> = (_theme, props) => ({
  root: {
    width: (() => {
      if (props?.width === 'full') {
        return '100%';
      } else if (typeof props?.width === 'number') {
        return `${props.width}px`;
      } else if (typeof props?.width === 'string') {
        return props.width;
      } else {
        return undefined;
      }
    })(),
    height: (() => {
      if (props?.height) {
        return props.height;
      } else if (props?.width === 'full') {
        return '100%';
      } else {
        return undefined;
      }
    })(),
    objectFit: props?.width === 'full' ? 'cover' : 'contain',
  },
});

const Image = ({ children, ...props }: ImageProps) => {
  const classes = useMakeStyles(imageStyles, props);

  return (
    <img alt="" css={classes.root} {...props}>
      {children}
    </img>
  );
};

export default Image;
