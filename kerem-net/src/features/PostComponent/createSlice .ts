import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';


interface PostState {
    text: string;
    comments: string[];
    likes: number;
    creatorName: string;
    date: Date;
}

const initialState: PostState = {
    text: '',
    comments: [],
    likes: 0,
    creatorName: '',
    date: new Date(),
}
const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        addComment: (state, action: PayloadAction<string>) => {
            state.comments.push(action.payload);
        },
        addLike: (state, action: PayloadAction<number>) => {
            state.likes += action.payload;
        },
        setCreatorName: (state, action: PayloadAction<string>) => {
            state.creatorName = action.payload;
        },
        setDate: (state, action: PayloadAction<Date>) => {
            state.date = action.payload;
        },
    },
});

export const { setText, addComment, addLike, setCreatorName, setDate } = PostSlice.actions;
export default PostSlice.reducer;