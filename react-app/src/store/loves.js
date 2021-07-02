// import { logout } from './session'



// export const ADD_ITEM = 'ADD_ITEM';
// export const REMOVE_ITEM = 'REMOVE_ITEM';
// export const SET_ITEMS = 'SET_ITEMS';

// const initialState = {
//   liked: []
// };

// export const addItemActionCreator = likedId => ({
//   type: ADD_ITEM,
//   payload: likedId
// });

// export const removeItemActionCreator = likedId => ({
//   type: REMOVE_ITEM,
//   payload: likedId
// })

// export const setItemsActionCreator = liked => ({
//   type: SET_ITEMS,
//   payload: liked
// })


// export const getLoves = () => async (dispatch, getState) => {



//   // if (logout(getState())){
//   //   return Promise.resolve()
//   // };

//   const state = getState();
//   const user = state.session?.user;



//   const response = await fetch("/api/loves/")

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setItemsActionCreator(data))
//     return data
//   }


// }


// export const addLove = (likedId) => async (dispatch, getState) => {
//   const state = getState();
//   const user = state.session?.user;


//   const response = await fetch("/api/loves/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       "product_id": likedId,
//       "userId": user
//     }),
//   });
//   const data = await response.json();
//   if (data.errors) {
//     return data;
//   }

//   dispatch(addItemActionCreator(data))
//   return data;
// }


// export const removeLove = (likedId) => async (dispatch) => {
//   const response = await fetch(`/api/loves/${likedId}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   if (data.errors) {
//     return data;
//   }

//   dispatch(removeItemActionCreator(likedId))
//   return data;
// }



// export default function reducer(state = initialState, action) {
//   switch (action.type) {


//     case ADD_ITEM:
//       const likedId = action.payload;
//       return {
//         ...state,
//         liked: state.liked.every(v => v.id !== likedId) ? state.liked.concat(likedId) : state.liked
//       };
//     case REMOVE_ITEM:
//       return {
//         ...state,
//         liked: state.liked.filter(v => v.id !== action.payload)
//       }
//     case SET_ITEMS:
//       return {
//         ...state,
//         liked: action.payload || []
//       }

//     default:
//       return state;
//   }
// }
