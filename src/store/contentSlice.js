import { createSlice } from "@reduxjs/toolkit";
import data from './content.json'

const initialState = {
    ...data
  }

export const contentSlice = createSlice({
    name: 'content',
    initialState: initialState,
})

export default contentSlice.reducer;