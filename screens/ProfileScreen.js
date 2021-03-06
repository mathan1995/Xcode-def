import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button, 
  StyleSheet
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};



const Tasks = () => {
  const [sid, setId] = useState('');
  const [details,setDetails]=useState('');
  const [phone, setPhone] = useState('');
  const [venue, setVenue] = useState('');
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState('true');
  const [itemId, setItemId] = useState(null);

  const saveData = async () => {
    if (
      (sid !== null && sid !== '',
      details !== null && details !== '',
       
        phone !== null && phone !== '')
    ) {
      let event = {
        sid,
        details,
        phone,
        venue,
        key: Math.random(),
      };

      if (phone.length !== 10) {
        this.dropDownAlertRef.alertWithType(
          'error',
          'Error',
          'Invalid phone number.',
        );
      } else {
        const arrData = [event]; // [{ name, email, phone}]

        const storedData = await AsyncStorage.getItem('event');
        const storedDataParsed = JSON.parse(storedData);
        setData(storedDataParsed);

        let newData = [];

        if (storedData === null) {
          // save
          await AsyncStorage.setItem('event', JSON.stringify(arrData));
        } else {
          newData = [...storedDataParsed, event];
          await AsyncStorage.setItem('event', JSON.stringify(newData));
        }

        Keyboard.dismiss();
        setId('');
        setDetails('');
        setPhone('');
        setVenue();
        this.dropDownAlertRef.alertWithType(
          'success',
          'Success',
          'Event posted successfully.',
        );
      }
    } else {
      setTimeout(() => {
        this.dropDownAlertRef.alertWithType(
          'error',
          'Error',
          'Please fill all the fields',
        );
      }, 1000);

    }
  };

  useEffect(() => {
    //AsyncStorage.clear();
    retrieveData();
  });

  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('event');
      const value = JSON.parse(valueString);
      setData(value);
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = async id => {
    if (data !== null) {
      const newData = data.filter((_, index) => index !== id);
      setData(newData);
      await AsyncStorage.setItem('event', JSON.stringify(newData));
    }
    this.dropDownAlertRef.alertWithType(
      'success',
      'Success',
      'Task removed successfully.',
    );
  };

  const highlightData = async id => {
    if (data !== null) {
      const highlightedData = data.map((item, index) => {
        if (index === id) {
          item.show = !item.show;
        }
        return item;
      });
      setData(highlightedData);
      await AsyncStorage.setItem('event', JSON.stringify(highlightedData));
    }
  };

  const changeData = async id => {
    setToggle(false);
    const changedData = data.map((item, index) => {
      if (index === id) {
        setId(item.sid);
        setDetails(item.details);
        setPhone(item.phone);
        setVenue(item.venue);
      }
      return item;
    });

    setData(changedData);
    setItemId(id);
    await AsyncStorage.setItem('event', JSON.stringify(changedData));
  };

  const updateData = async () => {
    setToggle(true);
    data[itemId].sid = sid;
    data[itemId].details = details;
    data[itemId].phone = phone;
    data[itemId].venue=venue;
    await AsyncStorage.setItem('event', JSON.stringify(data));
    Keyboard.dismiss();
    setId('');
    setDetails('');
    setPhone('');
    setVenue('');
    this.dropDownAlertRef.alertWithType(
      'success',
      'Success',
      'Event updated successfully.',
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View >
        <View  >
        
          <Text style={styles.header}>List of Events !</Text>
          
            {data !== null
              ? data.map((item, index) => {
                const highlightColor = item.show ? 'gold' : '#e3e3e3';

                return (
                  <View key={index} >
                    <View style={styles.card} >
                      <Text style={styles.header}>🔔 {item.sid}</Text>
                      <View>
                     
                        <Text style={styles.body}>🔘 {item.details}</Text>
                        <Text style={styles.body}>🔘 {item.venue}</Text>
                        <Text style={styles.body}>🔘 {item.phone}</Text>
                      </View>
                      <View style={styles.pha}>
                      <TouchableOpacity
                        onPress={() => clearData(index)}
                        style={styles.ph}>
                        <Icon name="close" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => highlightData(index)}
                        style={styles.ph}>
                        <Icon name="star" size={20} color={highlightColor} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => changeData(index)}
                        style={styles.ph}>
                        <Icon name="create" size={20} />
                      </TouchableOpacity>
                    </View>
                    </View>
                  
                  </View>
                );
              })
              : null}
              <View style={styles.seperate} / >
                

             
           <Text style={styles.header} >Create yours !</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Event Date"
            value={sid}
            onChangeText={text => setId(text)}
          />
            <TextInput
            style={styles.input}
            placeholder="Details about event"
            value={details}
            onChangeText={text => setDetails(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone no of coordinator"
            value={phone}
            keyboardType="phone-pad"
            onChangeText={text => setPhone(text)}
          />
             <TextInput
            style={styles.input}
            placeholder="Venue of event"
            value={venue}
            onChangeText={text => setVenue(text)}
          />
          <Button
          backgroundColor="black"
          style={{backgroundColor:"black", margin:10}}
            title={toggle ? 'Post Event' : 'update changes'}
            name="add"
            onPress={toggle ? saveData : updateData}
          />
        </View>
      </View>
      <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
    </ScrollView>
  );
};

Tasks.navigationOptions = navigation => ({
  title: 'Tasks',
});

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#ffffff"

    // marginTop:-50
  },
  input: {
    fontSize: 15,
    color: "black",
    width: "90%",
    height: 40,
    margin: 10,
    borderRadius:5,
    marginLeft:20,
    borderColor: '#00064a',
     borderWidth: 1,
     elevation:10,
     backgroundColor:"white"
  },
  
  pha: {
    flex: 1,
    flexDirection: "row",
    justifyContent:"flex-end"
  },
  card: {
    flex: 0.46,
    // justifyContent: "center",
    flexDirection: "column",
    // alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    height: "100%",
    width: "91%",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 30,
    shadowColor: "black",
    shadowOffset: { height: 10, width: 0 },
    elevation:10,
    marginBottom:10
  },
  header: {
    marginStart: 20,
    marginTop: 10,
    flexDirection: "column",
    color: "gray",
    fontWeight: "bold",
    marginLeft:20
  },
  body: {
    fontSize: 14,
    marginStart: 20,
    marginTop: 10,
    flexDirection: "column",
    color: "gray",
    fontWeight: "normal",
    alignItems: "center",
    justifyContent: "center",
  },
  seperate:{
    marginLeft:20,
    marginRight:20,
    height:3,
    width:"90%",
    backgroundColor:"gray",
    padding:1,
    borderRadius:50
  },
  ph:{
elevation:10,
borderRadius:50,
backgroundColor:"white",
margin:10
  }
})
export default Tasks;

