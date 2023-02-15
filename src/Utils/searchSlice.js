import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
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

/*

    NOTE: WE DON'T NEED TO CLEAR OUT STORE, CAUSE, IT AUTOMATICALLY CLEANS UP WHEN WE REFRESH THE PAGE.
    WE WOULD HAVE TO CLEAR OUR STORE, WHEN WE'RE MAKING IT TO WORK FOR 100K+ SEARCHES IN A SINGLE SESSION, WITHOUT REFRESHING. CAUSE, IN THAT CASE, WE WOULD BLOW UP OUR STORE.

    NOTE 2: WE COULD ALSO MAKE AN LRU CACHE. WE CAN RESTRICT OUR CACHE TO STORE SOME CERTAIN AMOUNT OF KEYS SAY 100. 
    SO, AS SOON AS THE CACHE REACHES THE SIZE OF 100, IT'LL START REMOVING THE LEAST USED ONES.

*/

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
