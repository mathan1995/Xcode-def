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
  const [name, setName] = useState('');
  const [details,setDetails]=useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState('true');
  const [itemId, setItemId] = useState(null);

  const saveData = async () => {
    if (
      (name !== null && name !== '',
      details !== null && details !== '',
        email !== null && email !== '',
        phone !== null && phone !== '')
    ) {
      let user = {
        name,
        details,
        email,
        phone,
        key: Math.random(),
      };

      if (!validateEmail(email) || phone.length !== 10) {
        this.dropDownAlertRef.alertWithType(
          'error',
          'Error',
          'Invalid email address or phone number.',
        );
      } else {
        const arrData = [user]; // [{ name, email, phone}]

        const storedData = await AsyncStorage.getItem('user');
        const storedDataParsed = JSON.parse(storedData);
        setData(storedDataParsed);

        let newData = [];

        if (storedData === null) {
          // save
          await AsyncStorage.setItem('user', JSON.stringify(arrData));
        } else {
          newData = [...storedDataParsed, user];
          await AsyncStorage.setItem('user', JSON.stringify(newData));
        }

        Keyboard.dismiss();
        setName('');
        setDetails('');
        setEmail('');
        setPhone('');
        this.dropDownAlertRef.alertWithType(
          'success',
          'Success',
          'Task saved successfully.',
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
      const valueString = await AsyncStorage.getItem('user');
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
      await AsyncStorage.setItem('user', JSON.stringify(newData));
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
      await AsyncStorage.setItem('user', JSON.stringify(highlightedData));
    }
  };

  const changeData = async id => {
    setToggle(false);
    const changedData = data.map((item, index) => {
      if (index === id) {
        setName(item.name);
        setDetails(item.details);
        setEmail(item.email);
        setPhone(item.phone);
      }
      return item;
    });

    setData(changedData);
    setItemId(id);
    await AsyncStorage.setItem('user', JSON.stringify(changedData));
  };

  const updateData = async () => {
    setToggle(true);
    data[itemId].name = name;
    data[itemId].details = details;
    data[itemId].phone = phone;
    data[itemId].email = email;
    await AsyncStorage.setItem('user', JSON.stringify(data));
    Keyboard.dismiss();
    setName('');
    setDetails('');
    setEmail('');
    setPhone('');
    this.dropDownAlertRef.alertWithType(
      'success',
      'Success',
      'Booking updated successfully.',
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View >
        <View  >
          <Text style={styles.header} >Personal details</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={text => setName(text)}
          />
            <TextInput
            style={styles.inputDetails}
            placeholder="Details about meeting"
            value={details}
            onChangeText={text => setDetails(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            keyboardType="phone-pad"
            onChangeText={text => setPhone(text)}
          />
          <Button
          backgroundColor="black"
          style={{backgroundColor:"black", margin:10}}
            title={toggle ? 'save Booking' : 'update changes'}
            name="add"
            onPress={toggle ? saveData : updateData}
          />
          <Text style={styles.header}>List of Bookings</Text>
          
            {data !== null
              ? data.map((item, index) => {
                const highlightColor = item.show ? 'gold' : '#e3e3e3';

                return (
                  <View key={index} >
                    <View style={styles.card} >
                      <Text style={styles.header}>Booking {index + 1}. </Text>
                      <View>
                        <Text style={styles.body}>🔘 {item.name}</Text>
                        <Text style={styles.body}>🔘 {item.details}</Text>
                        <Text style={styles.body}>🔘 {item.email}</Text>
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
    ,marginLeft:10,
    marginRight:10,
    // marginTop:-50
  },
  input: {
    fontSize: 15,
    color: "black",
    width: "100%",
    height: 40,
    margin: 10,
    borderRadius:10,
    borderBottomColor:"black",
    fontSize: 15,
    color: "black",
    width: "90%",
    height: 40,
    margin: 10,
    borderRadius:5,
    marginLeft:20,
    borderColor: '#00064a',
     borderWidth: 1,
    //  elevation:10,
     backgroundColor:"white"
  },
  inputDetails: {
    fontSize: 15,
    color: "black",
    width: "100%",
    height: "10%",
    margin: 10,
    borderRadius:10,
    borderBottomColor:"black",
    fontSize: 15,
    color: "black",
    width: "90%",
    height: 40,
    margin: 10,
    borderRadius:5,
    marginLeft:20,
    borderColor: '#00064a',
     borderWidth: 1,
    //  elevation:10,
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
    fontWeight: "bold"
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
  ph:{
elevation:10,
borderRadius:50,
backgroundColor:"white",
margin:10
  }
})
export default Tasks;

