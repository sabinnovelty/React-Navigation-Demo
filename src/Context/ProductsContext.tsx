import {createContext, useReducer, useEffect} from 'react';

const ProductContext = createContext(null);

const initialState: any = {
  products: [],
  isLading: false,
  myProducts: [],
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'load/products':
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return {...state};
  }
}

// const [count,setCount] - useState(0)

function ProductsProvider({children}: any) {
  const [{products, isLoading, myProducts}, dispatch] = useReducer(
    reducer,
    initialState,
  ); // axios fetch > < server communication
  // GET POST DELETE PATCH PUT

  useEffect(() => {
    // api call
    // fetch products list

    async function fetchProducts() {
      try {
        // res: Promise
        const res = await fetch('https://fakestoreapi.com/products');
        const products = await res.json();
        dispatch({type: 'load/products', payload: products});
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
}

// const DineshContextAPIPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve('Mailia context api paday, j sodhya ni huchna');
//     // reject('Maila padina')
//   });
// };

// try{
//     const result = await DineshContextAPIPromise()
//     console.log('result',result)
// }catch(e){
//     console.log(e)
// }

// useReducer, ContextAPI, fetch , try catch, promise, async await
