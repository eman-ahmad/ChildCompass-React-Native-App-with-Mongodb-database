import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChildCode from '../components/ChildCode';
import ChildInfo from '../components/ChildInfo';
import ChildDashboard from '../components/ChildDashboard';

const ChildStack = createStackNavigator();

const ChildNavigator = () => (
  <ChildStack.Navigator initialRouteName="ChildInfo">
    <ChildStack.Screen name="ChildInfo" component={ChildInfo} />
    <ChildStack.Screen name="ChildCode" component={ChildCode} />
    <ChildStack.Screen name="ChildDashboard" component={ChildDashboard} />
  </ChildStack.Navigator>
);

export default ChildNavigator;
