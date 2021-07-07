import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import SearchScreen from './screens/searchScreen';
import TransactionScreen from './screens/transactionScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator ({
  SearchScreen: SearchScreen,
  TransactionScreen: TransactionScreen
});

const AppContainer = createAppContainer (TabNavigator);