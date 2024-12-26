import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import GoBackBtn from '../../components/IconsButtons/GoBackBtn';
import {dummyProducts} from '../../data/products';
import CartProduct from '../../components/CartProduct.jsx';
import {Button} from 'react-native-paper';
import CartDrawer from '../../components/CartDrawer/index.jsx';

export default function CartScreen({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const renderStickyHeader = () => {
    return (
      <View style={styles.stickyHeaderContainer}>
        <GoBackBtn />
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 13,
            marginLeft: 110,
          }}>
          Cart
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <>
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
          Checkout
        </Button>
      </>
    );
  };

  return (
    <SafeAreaView>
      {renderStickyHeader()}
      <CartDrawer visible={visible} navigate={()=>navigation.navigate('AddressInput')} setVisible={setVisible} />
      <FlatList
        data={dummyProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CartProduct item={item} />}
        initialNumToRender={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 100,
          backgroundColor: 'white',
          alignItems: 'center',
        }}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stickyHeaderContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 7,
    elevation: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
