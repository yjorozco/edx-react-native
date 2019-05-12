import React from 'react';
import { Button, Text, View, Image } from 'react-native';

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('Title'),
    };
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Text>ImdbId: {this.props.navigation.getParam('imdbID')}</Text>   
        <Text>Year: {this.props.navigation.getParam('Year')}</Text>  
        <Text>Type: {this.props.navigation.getParam('Type')}</Text>     
        <Image source={{uri: this.props.navigation.getParam('Poster')}}
       style={{width: 400, height: 400}} />        
      </View>
    );
  }

}

