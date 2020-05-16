import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import Modal from 'react-native-modal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity style={styles.clickableGrid} onPress={() => {this.props.navigation.navigate('Profile') }}>
            <Feather
              name="file-plus"
              color="#00064a"
              size={80}
            />
            <Text style={styles.textStyle}>Plan a meeting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clickableGrid} onPress={() => {this.props.navigation.navigate('Courier') }}>
            <Icon
              name="calendar-month-outline"
              color="#00064a"
              size={80}
            />
            <Text style={styles.textStyle}>Scheduled Events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.clickableGrid} onPress={() => {this.props.navigation.navigate('OrderHistory') }}>
          <Feather
              name="align-left"
              color="#00064a"
              size={80}
            />
            <Text style={styles.textStyle}>Assignment Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clickableGrid} onPress={() => {this.props.navigation.navigate('Jobs') }}>
          <Icon
              name="axis-z-arrow"
              color="#00064a"
              size={80}
            />
            <Text style={styles.textStyle}>Careers & Logistics</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row1: {
    marginTop: 30,
    flex: 0.3,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  row2: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickableGrid: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: windowWidth / 2.5,
    height: windowHeight / 4,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  textStyle: {
    color: "gray",
    fontSize: 12,
    textAlign:"center"
    // fontWeight:"bold"
  }
});