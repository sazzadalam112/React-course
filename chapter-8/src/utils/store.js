import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
});
export default store; 


/**
 * Create Store 
 * -configureStore() - RTK
 * 
 * provide my star to app 
 * <provider> store = {store} - impore from react-redux 
 * 
 * slice 
 * RTK - createSlice({
 *  name : "",
 *  intialsState: 
 * reducers: {
 *    addItem: (state, action) => {state = action.payload}
 * }
 * })
 * export const {addItem,removeItem} = cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * 
 * Put that slice into store 
 * {
 *   reducer : {
 *   cart : cartSlice,
 *   user : userSlice
 *  }
 * }
 */