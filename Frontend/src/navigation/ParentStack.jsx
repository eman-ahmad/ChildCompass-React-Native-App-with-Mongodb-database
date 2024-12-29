import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ParentLogin from '../components/ParentLogin';
import ParentSignup from '../components/ParentSignup';
import EmailVerification from '../components/EmailVerification';
import ParentCode from '../components/ParentCode';
import ParentDashboard from '../components/ParentDashboard';

const ParentStack = createStackNavigator();

const ParentNavigator = () => (
  <ParentStack.Navigator initialRouteName="ParentLogin">
    <ParentStack.Screen name="ParentLogin" component={ParentLogin} />
    <ParentStack.Screen name="ParentSignup" component={ParentSignup} />
    <ParentStack.Screen name="EmailVerification" component={EmailVerification} />
    <ParentStack.Screen name="ParentCode" component={ParentCode} />
    <ParentStack.Screen name="ParentDashboard" component={ParentDashboard} />
  </ParentStack.Navigator>
);

export default ParentNavigator;
