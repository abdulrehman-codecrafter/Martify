import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Frontened/HomeScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesScreen from '../screens/Frontened/WishListScreen';
import CartScreen from '../screens/Frontened/CartScreen';
import ProfileScreen from '../screens/Frontened/ProfileScreen';
import ShopScreen from '../screens/Frontened/ShopScreen';
import WishListScreen from '../screens/Frontened/WishListScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Hide labels
        // activeTintColor: '#9775FA', // Color when tab is focused
        inactiveTintColor: 'grey', // Color when tab is not focused
        tabBarStyle: {
          backgroundColor: '#fff', // Tab bar background color
          borderTopWidth: 1, // Border at the top of the tab bar
          borderTopColor: '#ddd', // Border color
          borderTopRightRadius: 20, // Border radius at the top right
          borderTopLeftRadius: 20, // Border radius at the top left
          height: 60, // Tab bar height
          paddingTop: 5, // Padding at the top
          paddingBottom: 5, // Padding at the bottom
          shadowColor: '#000', // Shadow color for iOS
          shadowOffset: { width: 0, height: -3 }, // Shadow offset for iOS
          shadowOpacity: 0.1, // Shadow opacity for iOS
          shadowRadius: 5, // Shadow radius for iOS
          elevation: 5, // Shadow for Android
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{

          tabBarIcon: ({ size, focused }) => (
            <Icon
              name="home" // Home icon
              color={focused ? '#9775FA' : 'grey'} // Change color based on focus
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          tabBarIcon: ({  size, focused }) => (
            <Icon
              name="hearto" // Heart icon
              color={focused ? '#9775FA' : 'grey'} // Change color based on focus
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={ShopScreen}

        options={{
          tabBarIcon: ({focused }) => (
            <Icon1
              name="storefront" // Shopping cart icon
              color={focused ? '#9775FA' : 'grey'} // Change color based on focus
              size={26}
            />
          ),
          
        }}
        
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name="user" // User icon
              color={focused ? '#9775FA' : 'grey'} // Change color based on focus
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
