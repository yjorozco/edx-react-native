import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const SectionListMovies = props => {

  const MoviesByLetter = props.search.reduce((obj, search) => {
    const firstLetter = search.Title[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), search],
    };
  }, {});

  const sections = Object.keys(MoviesByLetter)
    .sort()
    .map(letter => ({
      data: MoviesByLetter[letter],
      title: letter,
    }));

  return (
    <SectionList
      keyExtractor={item => item.imdbID}
      sections={sections}
      renderItem={({ item }) => <Row {...item} onSelectMovies={props.onSelectMovies} /> }
      renderSectionHeader={renderSectionHeader}
    />
  );
};

SectionListMovies.propTypes = {
  contacts: PropTypes.array,
};

export default SectionListMovies;