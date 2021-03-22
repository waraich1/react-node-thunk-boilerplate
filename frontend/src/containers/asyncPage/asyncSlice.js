import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchAsync = createAsyncThunk('asyncRedux/fetchAsync', async() => {
  const result = await axios.get('http://localhost:8080/asyncRedux');
  return result.data  
}) 


const asyncSlice = createSlice({
    name: 'asyncRedux',
    initialState: { 
        list: null, 
        status: null
    },
    
    extraReducers: {

    [fetchAsync.pending]: (state, action) => {
           state.status = 'loading'
          },
    [fetchAsync.fulfilled]: (state, {payload}) => {
    state.list = payload
    state.status = 'success'
    
    },
      
    [fetchAsync.rejected]: (state, action) => {
    state.status = 'failed'
    
    },
    },
  })



export default asyncSlice.reducer