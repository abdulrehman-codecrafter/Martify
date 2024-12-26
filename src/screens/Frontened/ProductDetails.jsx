import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={styles.navButton}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navButton}>{'\uD83D\uDED2'}</Text>
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/300x400' }}
        style={styles.productImage}
      />

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productCategory}>Men's Printed Pullover Hoodie</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.productName}>Nike Club Fleece</Text>
          <Text style={styles.productPrice}>$120</Text>
        </View>

        {/* Size Selection */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Size</Text>
          <TouchableOpacity>
            <Text style={styles.sizeGuide}>Size Guide</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sizeContainer}>
          {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
              onPress={() => handleSizeSelection(size)}
            >
              <Text
                style={
                  selectedSize === size
                    ? styles.selectedSizeText
                    : styles.sizeText
                }
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          The Nike Throwback Pullover Hoodie is made from premium French terry
          fabric that blends a performance feel with a casual look.{' '}
          <Text style={styles.readMore}>Read More..</Text>
        </Text>

        {/* Total Price */}
        <View style={styles.rowBetween}>
          <Text style={styles.totalPriceLabel}>Total Price</Text>
          <Text style={styles.totalPrice}>$125</Text>
        </View>
        <Text style={styles.vatText}>with VAT, SD</Text>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  navButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34C759',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sizeGuide: {
    fontSize: 14,
    color: '#9775FA',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSizeButton: {
    backgroundColor: '#9775FA',
    borderColor: '#9775FA',
  },
  sizeText: {
    fontSize: 16,
    color: '#333',
  },
  selectedSizeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  readMore: {
    color: '#9775FA',
  },
  totalPriceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34C759',
  },
  vatText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 16,
  },
  addToCartButton: {
    backgroundColor: '#9775FA',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
    margin: 16,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
