import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';




class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 60,
      seconds: 60
    };

  }

  tick() {
    if(this.state.seconds >= 0 && this.state.minutes <= 60){
      this.setState(previousState => (
          { seconds: previousState.seconds-1
           }
        ))
    }
    if(this.state.minutes > 0 && this.state.seconds <= 0){     
       this.setState(previousState => (
          { minutes: previousState.minutes-1,
           }
        ))
    }
    if(this.state.minutes <= 0 &&this.state.seconds >= 0 ){     
       this.setState(previousState => (
          { minutes:60
           }
        ))
    }
    if(this.state.seconds <= 0 && this.state.minutes >= 0){     
       this.setState(previousState => (
          { seconds:60
           }
        ))
    }
  }

  start() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  stop(){
    clearInterval(this.intervalID);
  }

  reset(){
    clearInterval(this.intervalID);
    this.setState(previousState => (
      { 
        seconds: 60,
        minutes: 60
      }
    ));
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.minutes} : {this.state.seconds}      
        </Text>
        <Button onPress={() => {this.start()}} title="Start" />
        <Button onPress={() => {this.stop()}} title="Stop" />
        <Button onPress={() => {this.reset()}} title="Reset" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});



export default Clock;


