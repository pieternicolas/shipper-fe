/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';
import Image from 'atoms/Image';
import more from 'assets/icons/more.svg';

import useMakeStyles from 'hooks/useMakeStyles';
import useBreakpoint from 'hooks/useBreakpoint';

import { User } from 'api/types';

import { bpDesktop, StylesFunc } from 'config/styles';

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
    display: 'flex',
    flexDirection: 'column',
    [bpDesktop]: {
      flex: '0 0 300px',
    },
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
    gap: '1em',
    [bpDesktop]: {
      flexDirection: 'column',
    },
  },
  infoDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
    justifyContent: 'center',
    // padding: '0 1em',
  },
});

const DriverInfoBox = ({ driver }: DriverInfoBoxProps) => {
  const classes = useMakeStyles(driverInfoBoxStyles);
  const theme = useTheme();
  const isMobile = useBreakpoint();

  return (
    <>
      <Div css={classes.container}>
        <Div css={classes.header}>
          <Div css={classes.headerId}>
            <Text color={theme.color.gray}>Driver ID:</Text>
            &nbsp;
            <Text
              textCutoff
              color={theme.color.primary}
              bold
            >{`${driver.id.value}`}</Text>
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

            {!isMobile && (
              <>
                <Div>
                  <Text color={theme.color.gray}>Email</Text>
                  <Text bold>{driver.email}</Text>
                </Div>

                <Div>
                  <Text color={theme.color.gray}>Tanggal Lahir</Text>
                  <Text bold>
                    {new Date(driver.dob.date).toLocaleDateString()}
                  </Text>
                </Div>
              </>
            )}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default DriverInfoBox;
