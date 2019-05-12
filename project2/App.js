import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import  MoviesListScreen  from './components/MoviesListScreen';
import  ContactDetailsScreen  from './components/MovieDetailScreen';
import { search } from './mockData.js';
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,

} from "react-navigation";


const MainStack = createStackNavigator(
  {
    MovieList:   MoviesListScreen,
    MovieDetails: ContactDetailsScreen,
  //  AddContact: AddContactScreen
  },
  {
    initialRouteName: "MovieList",
    navigationOptions: {
      headerTintColor: "#a41034",
      headerStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-movies${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  )
};

export default class App extends React.Component {

  state = {
    search: search.Search
  }




  render() {
    return (
      <MainStack       
        screenProps={{
          search: this.state.search,          
        }}
      
       />
    );
  }
}


