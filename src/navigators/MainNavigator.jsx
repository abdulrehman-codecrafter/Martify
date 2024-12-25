import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'

export default function MainNavigator() {
    const user = {}
  return (
    <NavigationContainer>
        {
            user ? <AppNavigator /> : <AuthNavigator />
        }
    </NavigationContainer>
  )
}