import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';


interface IncrementAction {
    type: 'post/increment';
}

interface DecrementAction extends PayloadAction<number> {
    type: 'post/decrement';
}
interface PostState {
    value: number;
}

const initialState: PostState = {
    value: 0,
};

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // Immer allows "mutating" state directly
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const { increment, decrement } = PostSlice.actions;
export default PostSlice.reducer;