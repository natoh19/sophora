export const SET_CAT_PRODUCTS = 'SET_CAT_PRODUCTS';
export const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
export const SET_SINGLE_PRODUCT = 'SET_PRODUCT';


const setCatProducts = (products) => ({
    type: SET_CAT_PRODUCTS,
    payload: products
})

export const setAllProducts = (products) => ({
    type: SET_ALL_PRODUCTS,
    payload: products
})

const initialState ={
    products: [],
    product: {}
}


export const getAllProducts =() => async (dispatch) => {
    const response = await fetch('/api/products/')

    if(!response.ok) {
        const errors = await response.json()
        return {errors}
    }

    const products = await response.json()

    dispatch(setAllProducts(products.products))

    return products;
}

export const getAllProductsByCategory =(id) => async (dispatch) => {
    const response = await fetch(`/api/categories/${id}`)

    if(!response.ok) {
        const errors = await response.json()
        return {errors}
    }

    const products = await response.json()


    dispatch(setCatProducts([...products]))
}

export default function (state=initialState, action) {
    switch(action.type) {
      case SET_CAT_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
      case SET_ALL_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
      case SET_SINGLE_PRODUCT:
        return {
          ...state,
          product: action.payload
          }
      default:
        return state;
    }
  };
