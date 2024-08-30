const { createSlice , createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchProducts = createAsyncThunk('fetchProducts' , async ()=>{
    const data = await fetch('http://localhost:1337/api/products?populate=*')
    // const data = await fetch('http://localhost:9000/Products')
    return data?.json();
})



const initialState ={
    isLoading: false,
    data: [],
    error: false,
}

const ProductSlice = createSlice({
    name: "Product",
    initialState ,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            // isLoading = true;
            state.isLoading = false;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
    }
})

export default ProductSlice.reducer;