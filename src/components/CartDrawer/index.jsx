

import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Button, IconButton, Modal, Portal } from 'react-native-paper';

export default function CartDrawer({ visible, setVisible,navigate }) {
  const address = null;
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.headerText}>Delivery Address</Text>

        <View style={styles.sectionContainer}>
          <Image source={require('../../assets/map.png')} style={styles.image} />

          {address ? (
            <>
              <View style={styles.addressContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.addressText}>Chhatak, Sunamganj 12/8AB</Text>
                  <Text style={styles.subText}>Sylhet</Text>
                </View>
              </View>
              <IconButton
                size={12}
                iconColor="white"
                containerColor="#4AC76D"
                icon="check"
                style={styles.iconButton}
                onPress={() => {}}
              />
            </>
          ) : (
            <>
              <View style={styles.addressContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.addressText}>No Address</Text>
                  <Text style={styles.subText}>Add your delivery address</Text>
                </View>
              </View>
              <IconButton
                size={22}
                iconColor="grey"
                icon="pencil"
                style={styles.iconButton}
                onPress={()=>{
                  navigate()
                  setVisible(false)
                }}
              />
            </>
          )}
        </View>

        <Text style={[styles.headerText,{color:'grey',marginTop:16}]}>Payment Method</Text>

        <View style={styles.sectionContainer}>
          <Image source={require('../../assets/cod1.png')} style={[styles.image,{resizeMode:'contain',}]} />

          <View style={styles.addressContainer}>
            <View style={[styles.textContainer,{color:'grey'}]}>
              <Text style={[styles.addressText,{color:'grey'}]}>Cash on Delivery</Text>
              <Text style={styles.subText}>*******1234</Text>
            </View>
          </View>
          <IconButton
            size={12}
            iconColor="white"
            containerColor="#71E793"
            icon="check"
            style={styles.iconButton}
            onPress={() => {}}
          />
        </View>

        <Text style={[styles.headerText,{marginTop:15}]}>Order Info</Text>

        <View style={styles.orderInfoContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.subText}>Subtotal</Text>
            <Text style={styles.totalText}>$100.00</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.subText}>Delivery Fee</Text>
            <Text style={styles.totalText}>$5.00</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.subText}>Total</Text>
            <Text style={styles.totalText}>$95.00</Text>
          </View>
        </View>
        <Button
          onPress={() => setVisible(true)}
          dark={true}
          icon="cart"
          mode="elevated"
          style={{
            backgroundColor: '#9775FA',
            width: 350,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            marginVertical: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Place Order
        </Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  image: {
    backgroundColor:"#DEDEDE",

    width: 60,
    height: 60,
    borderRadius: 20,
    marginEnd: 13,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
  },
  textContainer: {
    marginTop: 5,
  },
  addressText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
  },
  subText: {
    color: 'grey',
    fontSize: 13,
    marginTop: 5,
  },
  iconButton: {
    marginTop: 15,
    marginLeft: -20,
  },
  orderInfoContainer: {
    paddingHorizontal: 3,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  totalText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
});

