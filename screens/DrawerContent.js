import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 25}}>
                            <Avatar.Image 
                               source={require('../assets/logo.png')}
                                size={80}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>ICBT Campus</Title>
                                <Caption style={styles.caption}>Where Life begins</Caption>
                            </View>
                        </View>

                      
                    </View>
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 25}}>
                         
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Latest News</Title>
                                <Caption />
                                <Caption style={styles.caption}> * Where Life begins</Caption>
                            </View>
                       
                        </View>

                      
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 25}}>
                         
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                               
                                <Caption style={styles.caption}> * Assignment ded line </Caption>
                            </View>
                       
                        </View>

                      
                    </View>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 25}}>
                         
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                               
                                <Caption style={styles.caption}> * Vacencies at Infosys  </Caption>
                            </View>
                       
                        </View>

                      
                    </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.userInfoSection}>
           
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      elevation:10
    },
    userInfoSection: {
      paddingLeft: 20,
      elevation:10
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      elevation:10
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight:"normal"
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });