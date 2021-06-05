import product from "./product";

export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT'


export const loadCart = products => ({
    type: LOAD_CART,
    payload: products
  });

  export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
  });

  export const removeProduct = products => ({
    type: REMOVE_PRODUCT,
    payload: products
  });

  export const clearProduct = ()=> ({
    type: CLEAR_PRODUCT,
    payload: []
  })


  const initialState = JSON.parse(localStorage.getItem('cart') || '{"products":[]}')


  export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
          return {
            ...state,
            products: action.payload
          };
          case ADD_PRODUCT:
          //   if (state.products.some(product => product.id === action.payload.id)) {

          //     return {
          //       ...state,
          //       products: state.products.map(product => (product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product))
          //     }
          //   }


          return {
               ...state,
               products: [...state.products, { ...action.payload, qty: 1 }]
             };


        case REMOVE_PRODUCT:
          // alert('removed product')
          return {
            products: state.products.filter(product => product.id !== action.payload.id)
          }
        case CLEAR_PRODUCT:
          return {
            products: []
          }
        default:
          return state;
      }
  }
