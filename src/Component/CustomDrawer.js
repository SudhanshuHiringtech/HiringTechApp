import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, selectProfile ,  clearProfile} from "../Reduxtoolkit/profileSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props) => {
  const navigation = useNavigation(); // If you need navigation functions

  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await fetch('http://192.168.29.188:5000/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      console.log('Logout successful');
      dispatch(clearProfile());
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully');
      navigation.navigate('Choosejob');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const profile = useSelector(selectProfile);
  const name = profile?.profile?.user?.name;
  const email = profile?.profile?.user?.email

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={() => {
        props.navigation.closeDrawer();
      }}>
        <Image
          source={require('../Assets/dashboard/cross.png')}
          style={{
            width: 18,
            height: 18,
            resizeMode: 'contain',
            alignSelf: 'flex-end',
            marginRight: 20,
            marginTop: 20
          }}
        />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image
          source={require('../Assets/dashboard/Profile.png')} // Replace with actual profile image URL
          style={styles.profileImage}
          resizeMode='contain'
        />
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profilePhone}>{email}</Text>
      </View>

      <View style={{
        width: 207,
        backgroundColor: '#ABE0F8',
        height: 1,
        marginHorizontal: 32,
        marginVertical: 16
      }} />

      {/* Touchable opacity for "My Resume" */}
      <TouchableOpacity
        style={styles.touchableStyle} // Define your own touchable style
        onPress={() => {
          // Handle onPress action for "My Resume"
          // For example, navigate to a new screen or execute a function
          // navigation.navigate('MyResumeScreen'); // Example navigation
          console.log('My Resume Pressed');
          navigation.navigate('Profile')
        }}
      >
        <Text style={styles.textStyle}>
          My Profile
        </Text>
      </TouchableOpacity>

      {/* Other menu items */}
      <TouchableOpacity>
      <Text style={styles.textStyle}>
        Preferences
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textStyle}>
        Manage account
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textStyle}>
        Report a complaint
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textStyle}>
        Safety Tips
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textStyle}>
        About Hiring tech
      </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.textStyle} onPress={handleLogout}>
        Logout
      </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#062B43'
  },
  profilePhone: {
    fontSize: 15,
    color: '#17557480',
    fontWeight: '500'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#175574',
    marginLeft: 16,
    marginTop: 20
  },
  touchableStyle: {
    // Add styles for the touchable area if needed, such as padding or background color
  }
});

export default CustomDrawer;
