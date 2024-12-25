import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>

        </View>

        <View>
          <Text>Home Screen</Text>
        </View>

        <View>
          <Text>Search</Text>
        </View>

        <View>
          <Text>New Arrival</Text>
        </View>  
        
        {/* Flatlist */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    color:"black"
  },
  header:{
    color:" black"
  },
  text:{
    color:"black"
  }

 })