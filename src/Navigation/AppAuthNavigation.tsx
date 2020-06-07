import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppTabNavigation from './AppTabNavigation';
import AppHeaderMain from '../Components/Shared/AppHeaderMain/AppHeaderMain';
import MerchantList from '../Screens/MerchentList/MerchentList';
import ListItem from '../Screens/Item/ListItem';
import AppHeader from '../Components/Shared/AppHeaderMain/AppHeader';
import {NavigationContainer} from '@react-navigation/native';

export default function AppAuthNavigation() {
  const Auth = createStackNavigator();
  return (
    <NavigationContainer>
      <Auth.Navigator headerMode={'screen'}>
        <Auth.Screen
          name={'List'}
          options={{header: AppHeaderMain}}
          component={ListItem}
        />
        <Auth.Screen
          name={'MerchantList'}
          options={{header: AppHeader}}
          component={MerchantList}
        />
        {/* <Auth.Screen name={'AddEmployee'}  options={{ header: AppHeaderMain}} component={AddEmployee} /> */}
      </Auth.Navigator>
    </NavigationContainer>
  );
}
