import React from 'react';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import HomeScreen from './HomeScreen';
// import DetailsScreen from './Others/DetailsScreen';
// import ExploreScreen from './Others/containers/ExploreScreen';
import ProfileScreen from './DetailsScreen';
import Notifications from "./ProfileScreen";
import Orders from "./ProfileScreen";
import OrderDetails from "./ProfileScreen";
import OwnerDash from "./ProfileScreen";
import Maps from "./ProfileScreen";
import ParcelPic from "./ProfileScreen";
import Promos from "./ProfileScreen";
import Courier from "./ProfileScreen";
import OrderHistory from "./ExploreScreen";
import Jobs from "./Jobs";
import Address from "./ProfileScreen";

const Stack = createStackNavigator();

const MainTabScreen = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
    activeColor="#00064a"
  >
    <Stack.Screen name="Home" component={HomeScreen} options={{
      title: '',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStatusBarHeight: -5,
      headerLeft: () => (
        <Feather.Button name="align-left" size={32} backgroundColor="#00064a" onPress={() =>navigation.openDrawer()}></Feather.Button>
      )
   
    }} />


    <Stack.Screen name="Orders" component={Orders} options={{
      title: 'Orders History',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <Feather.Button name="align-left" size={32} backgroundColor="#00064a" onPress={() => navigation.openDrawer()}></Feather.Button>
      )
    }} />

    <Stack.Screen name="OrderDetails" component={OrderDetails} options={{
      title: 'Order Details',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStatusBarHeight: -10,
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      )
    }} />
    <Stack.Screen name="Jobs" component={Jobs} options={{
      title: 'Available Jobs',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerStatusBarHeight: -10,
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      )
    }} />
    <Stack.Screen name="Notifications" component={Notifications} options={{
      headerShown: false
    }} />
    <Stack.Screen name="OwnerDash" component={OwnerDash} options={{
      title: '',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStatusBarHeight: -5,
      headerLeft: () => (
        <Feather.Button name="align-left" size={32} backgroundColor="#00064a" onPress={() => navigation.openDrawer()}></Feather.Button>
      ),
      headerRight: () => (
        <Material.Button name="bell-ring-outline" size={25} backgroundColor="#00064a" onPress={() => { navigation.navigate('Notifications') }}></Material.Button>
      )
    }} />
    <Stack.Screen name="Promos" component={Promos} options={{
      headerShown: false
    }} />
    <Stack.Screen name="Courier" component={Courier} options={{
      title: 'Events and Campaigns',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      )
    }} />
    <Stack.Screen name="Profile" component={ProfileScreen} options={{
      title: 'Make a booking',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerStatusBarHeight: -10
      ,
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      ),
    
    }} />
    <Stack.Screen name="Maps" component={Maps} options={{
      title: '',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStatusBarHeight: -10
      ,
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      )
    }} />
    <Stack.Screen name="OrderHistory" component={OrderHistory} options={{
      title: 'Assignment Help ',
      headerStyle: {
        backgroundColor: '#00064a',
        fontSize:10
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerStatusBarHeight: -10
      ,
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      )
    }} />
    <Stack.Screen name="Address" component={Address} options={{
      title: 'Address (s)',
      headerStyle: {
        backgroundColor: '#00064a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerStatusBarHeight: -10
      ,
      headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={28} backgroundColor="#00064a" onPress={() => navigation.goBack(null)}></Icon.Button>
      )
    }} />
    <Stack.Screen name="ParcelPic" component={ParcelPic} options={{
      headerShown: false
    }} />

  </Stack.Navigator>

);

export default MainTabScreen;