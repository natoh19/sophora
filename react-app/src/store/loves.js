

// export const ADD_ITEM= 'ADD_ITEM';
// export const REMOVE_ITEM = 'REMOVE_PRODUCT';
// export const SET_ITEMS = 'SET_ITEMS';


// export const addItemActionCreator = likedId => ({
//     type: ADD_ITEM,
//     payload: likedId
//   });

// export const removeItemActionCreator = likedId => ({
//     type: REMOVE_ITEM,
//     payload: likedId
// })


// export const setItemsActionCreator = likes => ({
//   type: SET_ITEMS,
//   payload: likes
// })



// export const getLoves = () => async (dispatch)   => {
//   const response = await fetch("/api/loves/")



//   if (response.ok){
//     const data = await response.json();
//     dispatch(setItemsActionCreator(data))
//     return data
//   }
// }



// export const addLove = (likedId, user) => async (dispatch)   => {


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
//       return data;
//   }

//   dispatch(addItemActionCreator(data.likedId))
//   return data;
// }

// export const removeLove = (likedId) => async (dispatch)   => {
//   const response = await fetch(`/api/loves/${likedId}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   if (data.errors) {
//       return data;
//   }

//   dispatch(removeItemActionCreator(data.likedId))
//   return data;
// }

// export default function (state = {
//   liked: []
// }, action) {
//   switch (action.type) {
//     case ADD_ITEM:
//       const likedId = action.payload;
//       return {
//         ...state,
//         liked: state.liked.every(v => v !== likedId) ? state.liked.concat(likedId): state.liked
//       };
//     case REMOVE_ITEM:
//       return {
//         ...state,
//         liked: state.liked.filter(v => v !== action.payload)
//       };

//     case SET_ITEMS:
//       return {
//         ...state,
//         liked: action.payload
//       }
//     default:
//       return state;
//   }
// }
