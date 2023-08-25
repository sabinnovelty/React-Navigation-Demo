import 'react-native-gesture-handler';

import React, {Component, useState} from 'react';
import {PropsWithChildren, createContext, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';

import products from './src/contextAPI/products.json';

// Stack Navigation
// Bottom tab /Navigation
// Drawer navigation

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigator from './src/navigation/StackNavigator';
// import Products from './src/contextAPI/Products';
import Products from './src/Screens/Products';
import Product from './src/Screens/Product';
import {ProductsProvider} from './src/Context/ProductsContext';
import CheckoutScreen from './src/Screens/CheckoutScreen';

const Drawer = createDrawerNavigator();

{
  /* <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Register" component={Register} />
  <Stack.Screen
    name="Main"
    component={MyDrawer}
    options={{headerShown: false}}
  />
</Stack.Navigator>
</NavigationContainer> */
}

/**
 * 1. Create new context
 */
export const ProductContext = createContext<any>(null);
// export const CountContext = createContext(null);

function App(): JSX.Element {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsProvider>
  );
  const [count, setCount] = useState(10);
  // useEffect(() => {
  //   const fetchAllProducts = () => {
  //     fetch('https://fakestoreapi.com/products')
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log(json);
  //         setProducts(json);
  //         setLoading(false);
  //       });
  //   };
  //   fetchAllProducts();
  // }, []);
  // return <MainNavigator />;

  const [cartCount, setCartCount] = useState(12);
  const [userName, setUserName] = useState('John');

  const onAddProduct = () => {
    console.log('add product');
  };

  const deleteProduct = () => {
    console.log('delete product');
  };

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCart = () => {
    setCartCount(cartCount - 1);
  };

  const incrementCount = () => {
    setCartCount(cartCount + 1);
  };

  // Provider,Conusmer,Value
  return (
    //1 create provider
    //2
    <CountContext.Provider value={{count: cartCount, incrementCount}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen
            name="Products"
            component={Products}
            initialParams={{
              products,
            }}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Products"
            component={Products}
            initialParams={{
              products,
            }}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CountContext.Provider>

    //  2. Provide a value to child component
    // <ProductContext.Provider
    //   value={{
    //     products: products,
    //     onAddProduct: onAddProduct,
    //     deleteProduct: deleteProduct,
    //   }}>

    // </ProductContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// Provider, Value Consumer
