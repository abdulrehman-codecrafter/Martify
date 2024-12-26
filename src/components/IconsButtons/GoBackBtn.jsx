import React from 'react'
import { IconButton } from 'react-native-paper'

export default function GoBackBtn() {
  return (
    <IconButton
      icon="arrow-left"
      iconColor="black"
      containerColor="#D9D9D9"
      size={25}
      onPress={() => console.log('Go back pressed')}
    />
  )
}