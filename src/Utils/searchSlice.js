import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) =>{
            // state = {...action.payload, ...state}
            state = Object.assign(state, action.payload)
            // ^ this will merge the payload, and the state. (basically merging 2 objects.)
        }
    }
});

/*

    Cache: 
        time complexity tro search in array = O(n)
        time complexity tro search in Object = O(1)
        Object is basically a JS thing for map. (but it's not the same as map)

*/

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;
