import { createSlice } from "@reduxjs/toolkit";
import goods from "../data/goods.json"

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: goods,
        good: [],
    },
    reducers: {
        setGoodNew: (state , actions) => {
            state.good = actions.payload
            
        },
        setGoodDelete: (state) => {
            state.good.splice(0, state.good.length)
        }
    }
})



export const {setGoodNew, setGoodDelete} = goodsSlice.actions;
export const selectGoods = state => state.goods.goods
export const selectGood = state => state.goods.good
export default goodsSlice.reducer