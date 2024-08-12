import { configureStore } from "@reduxjs/toolkit";


const store  = configureStore({
    reducer:{
       
    },
});

export default store ;








/*
create store
  - configureStore() -rtk

Provide my store to app
  -<provider store = {store} - import from react-redux
  
Slice 
 - RTK - createSlice({
    name: "",
    intitialState:
    reducers:{
        addItem:(state ,action )=>{state = action.payload}
      }
   })
    export const {addItem , removeItem} = cartSlice.actions ;
    export default cartSlice.reducer ;

Put that Slice into store   
    - {
        reducer{
            cart - cartSlice,
            user - userSlice 
        }
    }    



*/