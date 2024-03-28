import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import Colors from '@/constants/Colors';
import { Product } from '@assets/types';
import { Link } from 'expo-router';

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={'/product'} asChild>
      <Pressable style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: product.image || defaultPizzaImage }}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
