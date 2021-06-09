export const CREATE_ORDER = 'CREATE_ORDER';


const createOrderAction = (data) => ({
    type: CREATE_ORDER,
    payload: data
})

// export const updateOrder = (status) => async (dispatch, getState)   => {

//     const state = getState();
//     if(!state.order.id) return;

//     const order = state.order.id;

//     const response = await fetch("/api/orders/", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         "order_id": order,
// 	    "status": status
//       }),
//     });
//     const data = await response.json();
//     if (data.errors) {
//         return data;
//     }


//     return {};
//   }



export const createOrder = () => async (dispatch, getState)   => {

    const state = getState();
    if(!state.cart.products.length) return;
    // const products = state.cart.products[0];
    const products = state.cart.products
    console.log('PRODUCT', products)
    const user = state.session.user.id;
    console.log('state is', products);
    const response = await fetch("/api/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_id": 1,
	      "products": products
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }

    dispatch(createOrderAction(data.order))
    return data.order;
  }


export default function (state=null, action) {
    switch(action.type) {
      case CREATE_ORDER:
        return {
          ...state,
          id: action.payload
        }

      default:
        return state;
    }
  };
