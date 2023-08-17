import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {ProductContext,CountContext} from '../../App';
import {useRoute} from '@react-navigation/native';

const Products = () => {
  const {products} = useContext(ProductContext);
  const state = useContext(CountContext)
  // const route = useRoute();
// state.count, state.products
  // const {products} = route.params;
  console.log('products', countState.count);

  return (
    <View>
      <Text>Logged IN usename</Text>
      <Text>Cart count:{state.cartCount}</Text>
      <Button
        onPress={() => {
          state.incrementCount()
        }}
        title="Increment Count"
      />
    </View>
  );

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
