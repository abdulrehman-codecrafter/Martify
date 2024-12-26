
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const initialState = {
  image: '',
  name: '',
  category: '',
  price: '',
};

export default function Product({ item }) {
  const [state, setState] = useState(initialState);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (item) {
      setState(item);
    }
  }, [item]);

  return (
    <TouchableOpacity style={styles.card} onPress={() => console.log('Product Clicked')}>   
      <View>
        {state.image ? (
          <Image style={styles.image} source={state.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>No Image</Text>
        )}
        <Icon
          name={isFavorite ? 'heart' : 'hearto'}
          size={22}
          color="#9775FA"
          style={styles.favoriteIcon}
          onPress={() => setIsFavorite(!isFavorite)}
        />
      </View>
      <View style={{paddingLeft: 4}}>
        <Text style={styles.productName}>{state.name || 'No Name'}</Text>
        <Text style={styles.category}>{state.category || 'No Category'}</Text>
        <Text style={styles.price}>{state.price || 'No Price'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    // width: 170,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: 170,
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  imagePlaceholder: {
    width: 170,
    height: 200,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    lineHeight: 200,
    color: 'grey',
    fontSize: 16,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productName: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  category: {
    color: 'grey',
    fontSize: 13,
  },
  price: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 3,
  },
});
