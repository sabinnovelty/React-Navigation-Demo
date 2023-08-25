import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {ProductContext} from '../Context/ProductsContext';

const CheckoutScreen = () => {
  const state = useContext(ProductContext);
  return (
    <View>
      <Text>CheckoutScreen {state.myProducts.length}</Text>
      <FlatList
        data={state.myProducts}
        renderItem={({item}) => {
          return (
            <View style={{margin: 10, flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold'}}
                  numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CheckoutScreen;
