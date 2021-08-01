/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';
import Image from 'atoms/Image';
import more from 'assets/icons/more.svg';

import useMakeStyles from 'hooks/useMakeStyles';

import { User } from 'api/types';

import { StylesFunc } from 'config/styles';

export type DriverInfoBoxProps = {
  driver: User;
};
type DriverInfoBoxClasses =
  | 'container'
  | 'header'
  | 'headerId'
  | 'infoSection'
  | 'infoDetail';

const driverInfoBoxStyles: StylesFunc<DriverInfoBoxClasses> = (theme) => ({
  container: {
    backgroundColor: theme.color.white,
  },
  header: {
    padding: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.color.gray}`,
  },
  headerId: {
    display: 'flex',
    alignItems: 'center',
  },
  infoSection: {
    padding: '2em 1em',
    display: 'flex',
  },
  infoDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
    justifyContent: 'center',
    padding: '0 1em',
  },
});

const DriverInfoBox = ({ driver }: DriverInfoBoxProps) => {
  const classes = useMakeStyles(driverInfoBoxStyles);
  const theme = useTheme();

  return (
    <>
      <Div css={classes.container}>
        <Div css={classes.header}>
          <Div css={classes.headerId}>
            <Text color={theme.color.gray}>Driver ID:</Text>
            &nbsp;
            <Text color={theme.color.primary} bold>{`${driver.id.value}`}</Text>
          </Div>
          <Image src={more} />
        </Div>
        <Div css={classes.infoSection}>
          <Div>
            <Image src={driver.picture.large} />
          </Div>

          <Div css={classes.infoDetail}>
            <Div>
              <Text color={theme.color.gray}>Nama Driver</Text>
              <Text bold>{`${driver.name.first} ${driver.name.last}`}</Text>
            </Div>

            <Div>
              <Text color={theme.color.gray}>Telepon</Text>
              <Text bold>{driver.cell}</Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default DriverInfoBox;
