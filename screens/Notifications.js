import React, { Component } from 'react';
import { View, StyleSheet, SectionList, TouchableOpacity, Image,Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    title: "Available Notifications",
    data: ["Test Notify","Test Notify","Test Notify","Test Notify","Test Notify","Test Notify","Test Notify","Test Notify",],
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class ModalTester extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Animatable.View
          style={styles.container}
          animation="fadeInUpBig"
        >
          {/* <StatusBar backgroundColor="white" /> */}
          <TouchableOpacity style={styles.closeContainer} onPress={() => this.props.navigation.goBack(null)}>
            <View style={styles.closeButton}>
             <Material 
              name="exit-to-app" 
              color={color}
              size={size}
             />
            </View>
          </TouchableOpacity>
  
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  closeContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    width: 40,
    height: 40,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    elevation: 10,
    margin: 10
  },
  closeButton: {
    color: "black",
    marginTop: -2,
    alignItems: "center",
    fontFamily: 'Lato-Regular',

  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 3,
    elevation:1,
    marginLeft:10,
    marginRight:10,
    borderRadius:5,
    marginTop:10
  },
  header: {
    fontSize: 22,
    backgroundColor: "#fff",
    marginLeft:20,
    color:"gray"
  },
  title: {
    fontSize: 12,
    color:"gray"
  },
  subitemStyle:{
    fontSize: 10,
    color:"gray"
  }
})