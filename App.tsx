import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigators/MainNavigator'

export default function App() {
  return (
    <>
       <StatusBar 
        backgroundColor="#F5F6FA" 
        barStyle="dark-content" 
      />
      <MainNavigator />
    </>
  )
}