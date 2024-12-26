import {View, Text, Image} from 'react-native';
import React from 'react';

export default function BrandButton({item}) {
  return (
    <View
      style={{
        width: 120,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#F5F6FA',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginEnd: 10,
      }}>
      <View
        styles={{
          width: 30,
          height: 30,
          borderRadius: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={item.logo}
          style={{
            width: 25,
            height: 17,
            // resizeMode:'contain',
            // borderRadius:10,
          }}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: '#000',
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>
    </View>
  );
}
