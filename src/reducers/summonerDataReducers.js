import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: true,
}


export const summonerDataReducers = createSlice({
  name: 'summoners',
  initialState: initialState,
  reducers: {
    updateSummoners: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload  
    },   
  },
})

// Action creators are generated for each case reducer function
export const { updateSummoners, setLoading } = summonerDataReducers.actions

export default summonerDataReducers.reducer