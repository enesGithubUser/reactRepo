import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
            <View style = {styles.navBar}>
                <Image source = {require('./src/images/logo.png')} style={{width:50, height:50}}  />
                <View style={styles.rightNow}>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name='search' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.navItem} name='account-circle' size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.body}>
            </View>

            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='home' size={35}/>
                    <Text style={styles.tabTitle}>Anasayfa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='dashboard' size={35}/>
                    <Text style={styles.tabTitle}>Raporlar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Icon name='settings' size={35}/>
                    <Text style={styles.tabTitle}>Ayarlar</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  navBar:{
      height: 60,
      backgroundColor: 'white',
      elevation: 3,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  rightNow: {
      flexDirection: 'row'
  },
  navItem: {
      marginLeft: 25
  },
  body: {
      flex: 1
  },
  tabTitle: {
      fontSize: 11,
      color: '#3c3c3c',
      paddingTop: 4
  },
  tabItem: {
      alignItems: 'center',
      justifyContent: 'center'
  },
  tabBar: {
      backgroundColor : 'white',
      height: 60,
      borderWidth: 0.5,
      borderColor: '#E5E5E5',
      flexDirection: 'row',
      justifyContent: 'space-around'
  }

});
