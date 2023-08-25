import {View, Text} from 'react-native';
import React from 'react';

import {useContext} from 'react';
import {ProductContext} from '../Context/ProductsContext';

const Product = () => {
  const state = useContext(ProductContext);

  console.log('I am product scree', state);
  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;
