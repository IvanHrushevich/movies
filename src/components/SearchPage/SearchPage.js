import React from 'react';
import { useParams } from 'react-router-dom';

import { Content, SearchPanel } from '../../containers/index';

export const SearchPage = ({ searchMovie }) => {
  const { searchStr } = useParams();

  if (searchStr) {
    searchMovie(searchStr);
  }

  return (
    <>
      <SearchPanel />
      <Content />
    </>
  );
};
