import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {IconButton} from 'react-native-paper';
export default function CartProduct() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/product1.webp')}
        style={styles.cartImage}
      />

      <View style={styles.cartData}>
        <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
          Product Name
        </Text>
        <Text style={{fontSize: 13, color: 'black'}}>Category</Text>
        <Text style={{fontSize: 12, color: 'gray', marginTop: 8}}>
          $45 (-$4.00 Tax)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: 210,
            marginTop: 12,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon name="downcircleo" size={22} color="grey" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                marginHorizontal: 15,
                fontSize: 16,
                fontWeight: '500',
              }}>
              1
            </Text>
            <TouchableOpacity >
              <Icon name="upcircleo" size={22} color="grey" />
            </TouchableOpacity>
          </View>

          <IconButton icon="delete" iconColor="grey" size={21} style={{marginTop:-7}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 124,
    backgroundColor: '#F3F4F8',
    padding: 12,
    borderRadius: 15,
    elevation: 10,
    marginBottom: 15,
    flexDirection: 'row',
  },
  cartImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cartData: {
    // flexDirection: 'column',
    marginHorizontal: 17,
  },
});
