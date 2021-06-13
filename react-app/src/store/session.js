// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
export const ADD_ITEM= 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const SET_ORDERS ="SET_ORDERS"
export const SET_LAST_ORDER="SET_LAST_ORDER"

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

export const addItemActionCreator = likedId => ({
  type: ADD_ITEM,
  payload: likedId
});

export const removeItemActionCreator = likedId => ({
  type: REMOVE_ITEM,
  payload: likedId
})

export const setItemsActionCreator = likes => ({
type: SET_ITEMS,
payload: likes
})

export const setOrdersActionCreator = orders => ({
  type: SET_ORDERS,
  payload: orders
})

export const setLastOrder = lastOrder => ({
  type: SET_LAST_ORDER,
  payload: lastOrder
})


const initialState = { user: null, liked: [] };

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(setUser(data))
  }

  export const login = (email, password) => async (dispatch)  => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();

    if (data.errors) {
        return data;
    }

    dispatch(setUser(data))
    return {};
  }

  export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    dispatch(removeUser());
  };


  export const signUp = (email, password, first_name, last_name) => async (dispatch)  => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name
      }),
    });
    const data = await response.json();

    if (data.errors) {
        return data;
    }

    dispatch(setUser(data))
    return {};
  }


  export const getLoves = () => async (dispatch, getState)   => {

    let response;

    const state = getState();
    const user = state.session?.user;

    if (user) {
       const response = await fetch("/api/loves/")

    if (response.ok){
      const data = await response.json();
      dispatch(setItemsActionCreator(data))

      return data
    }

    }

  }

export const getOrders = () => async (dispatch, getState) => {
  // let response;
  const state= getState();

  const response = await fetch("/api/orders/")


  if (response.ok){
    const data = await response.json()
    dispatch(setOrdersActionCreator(data))
    // console.log('DATA', data)
    return data
  }

}

export const getLastOrder = () => async (dispatch, getState) => {
  // let response;
  const state= getState();

  const response = await fetch("/api/orders/")


  if (response.ok){
    const data = await response.json()
    const lastOrder = data[0]
    dispatch(setLastOrder(lastOrder))
    return lastOrder
  }

}


  export const addLove = (likedId) => async (dispatch, getState)   => {
    const state = getState();
    const user = state.session?.user;
    const likes = Object.values(state.session?.liked)


    const response = await fetch("/api/loves/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "product_id": likedId,
        "userId": user
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(addItemActionCreator(data))
    return data;
  }

  export const removeLove = (likedId) => async (dispatch)   => {
    const response = await fetch(`/api/loves/${likedId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(removeItemActionCreator(likedId))
    return data;
  }



export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        // case ADD_ITEM:
        //   state.user.loves[action.payload]=action.payload
        //   return {...state}
        case ADD_ITEM:
          const likedId = action.payload;
          return {
            ...state,
            liked: state.liked.every(v => v.id !== likedId) ? state.liked.concat(likedId): state.liked
          };
        case REMOVE_ITEM:
          return {
            ...state,
            liked: state.liked.filter(v => v.id !== action.payload)
          }
        case SET_ITEMS:
          return {
            ...state,
            liked: action.payload || []
          }
        case SET_ORDERS:
          return {
            ...state,
            orders: action.payload || []
          }
        case SET_LAST_ORDER:
          return {
            ...state,
            lastOrder: action.payload
          }
        default:
            return state;
    }
}
