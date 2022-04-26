import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { homeApi } from './api';

interface HomeState {
    contract: string,
    orderToken: string,
}

const initialState = {
    contract: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    orderToken: ''
} as HomeState

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setContract(state, action: PayloadAction<string>) {
            state.contract = action.payload;

            console.log(action.payload);
        },
        setOrderToken(state, action: PayloadAction<string>) {
            state.orderToken = action.payload;
        },
    },
})

export const { setContract, setOrderToken } = homeSlice.actions
export default homeSlice.reducer