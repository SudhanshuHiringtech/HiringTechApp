import React,{useEffect,useState} from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screen/Login';

import Countryname from '../Screen/Countryname';
import HrRegistration from '../Screen/HrRegistration';
import CandidateRegistration from '../Screen/CandidateRegistration';
import Jobtype from '../Screen/Jobtype';
import Choosejob from '../Screen/Choosejob';
import Interest from '../Screen/Preferences/Interest';
import Addskill from '../Screen/Preferences/Addskill';
import Looking from '../Screen/Preferences/Looking';
import Workmode from "../Screen/Preferences/Workmode"
import WorkExpe from '../Screen/Preferences/WorkExpe';
import Refercity from "../Screen/Preferences/Refercity"
import Preferences from '../Screen/Preferences';
import ChandidateProfile from '../Screen/Resume/ChandidateProfile';
import SetupResume from '../Screen/Resume/SetupResume';
import Otp from '../Screen/Optscreen/Otp';
import VerificationCode from '../Screen/Optscreen/VerificationCode';
import Success from '../Screen/Optscreen/Success';
import ForgotPassword from '../Screen/Resume/ForgotPassword';
import Bottomtab from './Bottomtab';
import Profile from '../Screen/Profile';
import SplashScreen from '../Screen/SplashScreen';
import PersonalDetails from '../Screen/ProfileSection/PersonalDetails';
import Education from '../Screen/ProfileSection/Education';
import WorkExperience from '../Screen/ProfileSection/WorkExperience';
import JobDetailsScreen from '../Screen/JobDetailsScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = ()=> {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000);
  }, []);
  return (

      <Stack.Navigator screenOptions={{headerShown: false}} >
      {/* {isSplashVisible && ( */}
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* )} */}
      <Stack.Screen name="Choosejob" component={Choosejob} />
      <Stack.Screen name="Jobtype" component={Jobtype} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CandidateRegistration" component={CandidateRegistration} />
      <Stack.Screen name="HrRegistration" component={HrRegistration} />
  

      <Stack.Screen name="Bottomtab" component={Bottomtab} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Countryname" component={Countryname} />
      <Stack.Screen name="SetupResume" component={SetupResume} />
      <Stack.Screen name="ChandidateProfile" component={ChandidateProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="WorkExperience" component={WorkExperience} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      </Stack.Navigator>
  )

}

export default AppNavigator;