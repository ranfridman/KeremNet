import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiPost } from '../../Scripts/API/Api';
import { Session } from '@toolpad/core';

interface AccountState {
    username: string;
    isLoggedIn: boolean,
    password: string;
    id: string;
    followers: string[];
    following: string[];
    liked: string[];
    biography: string;
}

const initialState: AccountState = {
    isLoggedIn: false,
    username: "",
    password: "",
    id: "",
    followers: [],
    following: [],
    liked: [],
    biography: "",
}
const AccountSlice = createSlice({
    name: 'Account',
    initialState,
    reducers: {
        setAccountInfo: (
            state,
            action: PayloadAction<{ username: string; password: string; id: string }>
        ) => {
            state.username = action.payload.username;
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.isLoggedIn = true;
            localStorage.setItem("username", action.payload.username);
            localStorage.setItem("userId", action.payload.id);
            localStorage.setItem("isLoggedIn", "true");

        },
        logOut(state) {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn", "false");

        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
            })
            .addCase(logIn.fulfilled, (state, action) => {
                const r = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, (state) => {
                state.isLoggedIn = false;
            });
    },
});

export const logIn = createAsyncThunk(
    'account/logIn',
    async (
        { username, password }: { username: string; password: string },
        thunkAPI
    ) => {
        const response = await new Promise<any>((resolve, reject) => {
            ApiPost(
                '/users/signIn',
                { username, password },
                (res) => resolve(res),
                (err) => reject(err)
            );
        });
        return response;
    }
);

export const { setAccountInfo, logOut } = AccountSlice.actions;
export default AccountSlice.reducer;