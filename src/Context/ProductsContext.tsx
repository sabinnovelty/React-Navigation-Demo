import {createContext, useReducer, useEffect} from 'react';

export const ProductContext = createContext<any>(null);

const initialState: any = {
  products: [],
  isLoading: false,
  myProducts: [],
  errorMessage: null,
  user: {
    name: 'sfsd',
  },
};
// dispatch({type: 'load/products', payload: products});
// dispatch({type: 'loading', payload: products});

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'load/products':
      return {
        ...state,
        products: [...action.payload],
      };
    case 'addToCart': {
      return {
        ...state,
        myProducts: [action.payload, ...state.myProducts],
        // myProducts:state.myProducts.push(action.payload)
      };
    }

    case 'removeFromCart': {
      console.log('myProducts==', state.myProducts);
      console.log('remove product==', action.payload);
      return {
        ...state,
        myProducts: state.myProducts.filter((product: any) => {
          return product.id !== action.payload.id;
        }),
      };
    }
    case 'logout': {
      return {
        ...state,
        myProducts: [],
        user: null,
      };
    }
    case 'product/failed':
      return {...state, errorMessage: action.payload};
    default:
      return {...state};
  }
}

// const [count,setCount] - useState(0)

function ProductsProvider({children}: any) {
  const [{products, isLoading, myProducts, errorMessage}, dispatch] =
    useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const [state, dispatch] = useReducer(reducer, initialState);
  // axios fetch > < server communication
  // GET POST DELETE PATCH PUT

  // get put post patch delete  REST API

  useEffect(() => {
    // api call fetch axios
    // fetch products list
    console.log('useEffect');
    async function fetchProducts() {
      try {
        // res: Promise
        dispatch({type: 'loading', payload: true});
        const res = await fetch('https://fakestoreapi.com/products');
        const products = await res.json();
        dispatch({type: 'loading', payload: false});
        console.log('products', products);
        dispatch({type: 'load/products', payload: products});

        // 1 set products to initial State
        //2 display products list in products screen
      } catch (error: any) {
        console.log('error', error.response());
        dispatch({
          type: 'product/failed',
          payload: 'Product API request failed',
        });
      }
    }
    fetchProducts();
  }, []);

  const addToCart = (product: any) => {
    console.log('addToCart', product);
    // products = [{ id, name}]
    dispatch({type: 'addToCart', payload: product});
  };

  const removeFromCart = (product: any) => {
    dispatch({type: 'removeFromCart', payload: product});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        myProducts,
        errorMessage,
        addToCart,
        removeFromCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export {ProductsProvider};

// dispatch({
//   type: 'product/whishList',
//   payload: ['proudct1'],
// });
