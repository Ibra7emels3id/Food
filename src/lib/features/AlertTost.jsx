const { createSlice } = require("@reduxjs/toolkit");

const CheckTost = createSlice({
    name: "CheckTost",
    initialState: {
        show: false,
        message: "",
        type: "",
    },
    reducers: {
        showCheckTost: (state, action) => {
            if(state.show === false){
                state.show = true;
            }else{
                state.show = false;
            }
        },
        hideCheckTost: (state, action) => {
            state.show = false;
        },
    },
})

export const { showCheckTost, hideCheckTost  } = CheckTost.actions;
export default CheckTost.reducer