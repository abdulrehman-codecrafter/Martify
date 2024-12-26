import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import CartScreen from '../screens/Frontened/CartScreen';
import AddressInputScreen from '../screens/Frontened/AddressInputScreen';
import ProductDetailsScreen from '../screens/Frontened/ProductDetails';

const AppStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen
        name="Tab"
        component={TabNavigator}
      />
      <AppStack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="AddressInput"
        component={AddressInputScreen}
        options={{headerShown: false}}  
      />
      <AppStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{headerShown: false}}  
      />

    </AppStack.Navigator>
  );
}
