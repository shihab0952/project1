import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm:'',
    filterdData:[]
}

const productSlice = createSlice ({
    name: 'products',
    initialState,
    reducers:{
        setProducts(state, action) {
            state.products = action.payload
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
            state.filterdData= state.products.filter(product =>
                product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        }
    },
})

export const {setProducts, setSearchTerm} = productSlice.actions;
export default productSlice.reducer 