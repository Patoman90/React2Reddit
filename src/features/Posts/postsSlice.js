import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//use thunk
export const fetchPosts = createAsyncThunk('posts/fetchPosts',
  async () => {
    return fetch('https://www.reddit.com/r/memes').then((response) => {response.json()}) 
  });


//create slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
      posts: [],
      status: null
    },
    extraReducers: {
      [fetchPosts.pending]: (state) => {
        state.status = 'Loading...';
      },

      [fetchPosts.fulfilled]: (state, {payload}) => {
        state.posts = payload;
        state.status = 'Success';
      },

      [fetchPosts.rejected]: (state) => {
        state.status = 'Failed';
      }
    }
});

export default postsSlice.reducer;