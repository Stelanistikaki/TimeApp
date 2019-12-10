/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//imports
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends Component {
  //create the constructor and add a text property to change everytime the time changes
  constructor(props) {
    super(props);
    this.state = {
      goodText: '',
    };
  }
  //it is called when the app begins
  componentDidMount() {
    var hour = new Date().getHours(); //Current Hours
    //the format is 24hr even if the phone's time is 12hr
    //the good morning text
    if (hour >= 5 && hour < 12) {
      this.setState({
        goodText: 'Good Morning!',
      });
      //i added the afternoon before the evening
    } else if (hour >= 12 && hour < 17) {
      this.setState({
        goodText: 'Good Afternoon!',
      });
      //the good evening text
    } else if (hour >= 17 && hour < 21) {
      this.setState({
        goodText: 'Good Evening!',
      });
      //if its not one of the above it's night
      //the hour cannot be both >=21 and <5 so it's else statement
    } else {
      this.setState({
        goodText: 'Good Night!',
      });
    }
  }

  render() {
    //return a view with the text
    return (
      //the container view
      <View style={styles.container}>
        {/* the view contains the text that changes according to the current time
        it get the text from the state (this.state) */}
        <Text style={styles.welcome}>{this.state.goodText}</Text>
      </View>
    );
  }
}
//styles for container and welcome sections
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
