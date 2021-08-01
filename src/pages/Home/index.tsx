/** @jsxImportSource @emotion/react */
import { useState, useMemo } from 'react';
import { useTheme } from '@emotion/react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';

import Layout from 'containers/Layout';

import useMakeStyles from 'hooks/useMakeStyles';
import useAxios from 'hooks/useAxios';
import usePagination from 'hooks/usePagination';

import { GetUsers, GetUsersReturnProps } from 'api/queries';

import SearchBox from './partials/SearchBox';
import DriverInfoBox from './partials/DriverInfoBox';
import homeStyles from './styles';
import { FIELDS, searchDefaultValues } from './constants';

const Home = () => {
  const classes = useMakeStyles(homeStyles);
  const theme = useTheme();

  const [nameFilter, setNameFilter] = useState<string>(
    searchDefaultValues[FIELDS.name],
  );
  const [{ data }] = useAxios<GetUsersReturnProps>(GetUsers);

  const usersData =
    useMemo(() => {
      return data?.results.filter((user) =>
        user.name.first.toLowerCase().includes(nameFilter.toLowerCase()),
      );
    }, [data, nameFilter]) ?? [];

  const {
    pagedData,
    setPreviousPage,
    setNextPage,
    nextEnabled,
    previousEnabled,
  } = usePagination(usersData);

  return (
    <>
      <Layout>
        <Div css={classes.container}>
          <SearchBox
            initialValue={nameFilter}
            onFilterChange={(filter) => setNameFilter(filter)}
          />

          <Div css={classes.driversContainer}>
            {pagedData.map((user, i) => (
              <DriverInfoBox
                key={`user-${user.id.name}-${user.id.value}-${i}`}
                driver={user}
              />
            ))}
          </Div>

          <Div css={classes.pagination}>
            <Div onClick={() => setPreviousPage()}>
              <Text color={!previousEnabled ? theme.color.gray : undefined}>
                &lt; Previous page
              </Text>
            </Div>
            <Div onClick={() => setNextPage()}>
              <Text color={!nextEnabled ? theme.color.gray : undefined}>
                Next page &gt;
              </Text>
            </Div>
          </Div>
        </Div>
      </Layout>
    </>
  );
};

export default Home;
