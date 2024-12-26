import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Avatar, IconButton} from 'react-native-paper';
import Product from '../../components/Product';
import {dummyProducts} from '../../data/products';
import {brands} from '../../data/brands';
import BrandButton from '../../components/BrandButton';
import CartBtn from '../../components/IconsButtons/CartBtn';
export default function HomeScreen({navigation}) {
  const renderStickyHeader = () => {
    return (
      <View style={styles.stickyHeaderContainer}>
        <View style={styles.header}>
          <Avatar.Image size={40} source={require('../../assets/logo.png')} />
          <CartBtn
            navigate={() => navigation.navigate('Cart')}
          />
        </View>
      </View>
    );
  };

  const renderNonStickyHeader = () => (
    <View>
      {/* Welcome Section */}
      <View style={styles.welcome}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Welcome to Martify</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="grey"
          cursorColor="black"
        />
        <IconButton
          icon="magnify"
          iconColor="white"
          size={25}
          style={styles.searchButton}
          onPress={() => console.log('Search pressed')}
        />
      </View>

      {/* Brands List */}

      <View>
        <Text style={styles.sectionTitle}>Brands Available</Text>
        <FlatList
          data={brands}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <BrandButton item={item} />}
          contentContainerStyle={styles.productList}
        />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>New Arrival</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Product item={item} />}
        numColumns={2}
        ListHeaderComponent={renderNonStickyHeader}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
      {renderStickyHeader()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  stickyHeaderContainer: {
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
  contentContainer: {
    paddingTop: 80, // Height of sticky header
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    marginBottom: 20,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: 'grey',
    fontSize: 16,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#F5F6FA',
    paddingStart: 20,
    borderRadius: 10,
    color: 'black',
    width: '85%',
    height: 50,
    fontSize: 18,
  },
  searchButton: {
    backgroundColor: '#9775FA',
    borderRadius: 10,
    marginTop: 0,
    height: 50,
    width: 50,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 17,
    paddingStart: 5,
    marginBottom: 10,
  },
  productList: {
    paddingBottom: 20,
  },

  // ...existing styles...
});
