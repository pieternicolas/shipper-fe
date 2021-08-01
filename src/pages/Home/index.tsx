/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Div from 'atoms/Div';

import Layout from 'containers/Layout';

import useMakeStyles from 'hooks/useMakeStyles';

import SearchBox from './partials/SearchBox';
import homeStyles from './styles';
import { FIELDS, searchDefaultValues } from './constants';

const Home = () => {
  const classes = useMakeStyles(homeStyles);

  const [nameFilter, setNameFilter] = useState<string>(
    searchDefaultValues[FIELDS.name],
  );

  return (
    <>
      <Layout>
        <Div css={classes.container}>
          <SearchBox
            initialValue={nameFilter}
            onFilterChange={(filter) => setNameFilter(filter)}
          />
        </Div>
      </Layout>
    </>
  );
};

export default Home;
