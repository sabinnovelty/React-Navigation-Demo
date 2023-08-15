import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {ProductContext} from '../../App';
import {useRoute} from '@react-navigation/native';

const Products = () => {
  const {products} = useContext(ProductContext);
  // const route = useRoute();

  // const {products} = route.params;
  console.log('products', products);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.title}</Text>
          </View>
        );
      }}
    />
  );
};

export default Products;
