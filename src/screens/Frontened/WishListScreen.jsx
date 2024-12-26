import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import GoBackBtn from '../../components/IconsButtons/GoBackBtn';
import CartBtn from '../../components/IconsButtons/CartBtn';
import {dummyProducts} from '../../data/products';
import Product from '../../components/Product';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function WishListScreen() {
  const renderStickyHeader = () => {
    return (
      <View style={[styles.Header, {paddingHorizontal: 20, paddingVertical: 7}]}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <GoBackBtn />
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Wishlist
        </Text>
        <CartBtn onPress={() => console.log('pressed')} />
      </View>
    </View>
    )
  };

  const renderNonStickyHeader = () => (
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          200 Items
        </Text>
        <Text style={{color: 'gray', fontSize: 14, marginTop: 0, marginBottom: 10}}>
          in Store
        </Text>
      </View>
    )

  return (
    <SafeAreaView>
      <FlatList
        data={dummyProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Product item={item} />}
        ListHeaderComponent={renderNonStickyHeader}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 70,backgroundColor: 'white',paddingHorizontal: 20}}
      />
      {renderStickyHeader()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
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
