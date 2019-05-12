import React from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';

import SectionListMovies from './SectionListMovies';

export default class MoviesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Movies',
      /*  headerRight: (
        <Button
          title="Add"
          onPress={() => navigation.navigate('AddContact')}
          color="#a41034"
        />
      ),*/
    };
  };

  state = {
    showMovies: true,
    search: []
  };


  handleSelectMovies = movie => {
    this.props.navigation.push('MovieDetails', movie);
  };

  getMovies = (title = '') => {
    
    if (title != '') {
      console.log(title);
      let movies = this.props.screenProps.search.filter(function (item) {
	        return  item.Title.indexOf(title) > -1;
      });
      console.log(movies);
      this.setState(prevState => ({ showMovies: true}));
      this.setState(prevState => ({ search: movies }));
    } else {
       this.setState(prevState => ({ showMovies: false }));
       this.setState(prevState => ({ search: []}));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => 
            this.getMovies(text)
          }
        />
        {this.state.showMovies && (
          <SectionListMovies
            search={this.state.search}
            onSelectMovies={this.handleSelectMovies}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
