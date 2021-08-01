/** @jsxImportSource @emotion/react */
import { useState, useMemo } from 'react';

import Div from 'atoms/Div';

import Layout from 'containers/Layout';

import useMakeStyles from 'hooks/useMakeStyles';
import useAxios from 'hooks/useAxios';

import { GetUsers, GetUsersReturnProps } from 'api/queries';

import SearchBox from './partials/SearchBox';
import homeStyles from './styles';
import { FIELDS, searchDefaultValues } from './constants';

const Home = () => {
  const classes = useMakeStyles(homeStyles);

  const [nameFilter, setNameFilter] = useState<string>(
    searchDefaultValues[FIELDS.name],
  );
  const [{ data }] = useAxios<GetUsersReturnProps>(GetUsers);

  const usersData = useMemo(() => {
    return data?.results.filter((user) =>
      user.name.first.toLowerCase().includes(nameFilter.toLowerCase()),
    );
  }, [data, nameFilter]);

  return (
    <>
      <Layout>
        <Div css={classes.container}>
          <SearchBox
            initialValue={nameFilter}
            onFilterChange={(filter) => setNameFilter(filter)}
          />

          <Div>
            {usersData?.map((user) => (
              <Div key={user.id.value}></Div>
            ))}
          </Div>
        </Div>
      </Layout>
    </>
  );
};

export default Home;
