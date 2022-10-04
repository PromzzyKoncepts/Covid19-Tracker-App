import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://covid19.mathdro.id/api/confirmed";
const FETCH = "redux/apicontainer/FETCH";

const fetchData = createAsyncThunk(FETCH, async () => fetch(url).then((res) => res.json()));

const DataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: 'idle'
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = 'fulfilled'
    },
  }
})

export { fetchData }
export default DataSlice.reducer;