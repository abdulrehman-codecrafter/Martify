import React from 'react';
import {  IconButton } from 'react-native-paper';

export default function CartBtn({navigate}) {

  return (
    <IconButton
      icon="cart-outline"
      iconColor="black"
      containerColor="#D9D9D9"
      size={25}
      onPress={navigate}
    />
  );



}
