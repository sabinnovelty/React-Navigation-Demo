import {View, Text, FlatList, ActivityIndicator, Pressable} from 'react-native';
import React, {useEffect} from 'react';

import {useContext} from 'react';
import {ProductContext} from '../Context/ProductsContext';

const Products = ({navigation}: any) => {
  const state = useContext(ProductContext);

  console.log('I am products screen', state.user);

  if (!state.user) {
    navigation.naviate('login');
  }

  if (state.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    // display loading also
    // display products from ProductContext using FLat list
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Checkout');
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 26, textAlign: 'right'}}>
          Cart Count {state.myProducts.length}
        </Text>
      </Pressable>
      {state.errorMessage && (
        <Text style={{color: 'red', fontSize: 28, textAlign: 'center'}}>
          {state.errorMessage}
        </Text>
      )}

      <FlatList
        data={state.products}
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
              <Pressable
                onPress={() => {
                  state.addToCart(item);
                }}
                style={{
                  backgroundColor: '#B9B4C7',
                  width: 120,
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1,
                  }}>
                  Add to cart
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  state.removeFromCart(item);
                }}
                style={{
                  backgroundColor: '#B9B4C7',
                  width: 120,
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1,
                  }}>
                  Remove from cart
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Products;

{
  /* <View
style={{
  flexDirection: 'row',
  backgroundColor: 'red',
  margin: 10,
}}>
<View style={{flex: 3, backgroundColor: 'white'}}>
  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Dsfd</Text>
</View>
<View style={{flex: 2, backgroundColor: 'black'}}>
  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
    Add to cart
  </Text>
</View>
</View> */
}
