import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const url = "https://covid19.mathdro.id/api/confirmed";
const FETCH = "redux/apicontainer/FETCH";

const fetchData = createAsyncThunk(FETCH, async () => fetch(url).then((res) => res.json()));

const DataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: 'idle',
    // id: uuidv4(),
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      const data = action.payload.slice(0, 40);
      state.data = data.map((item) => {
        return {
          ...item,
          id: uuidv4(),
        };
      });
      state.loading = 'fulfilled';
      // state.id = id;
    },
  }
})

export { fetchData }
export default DataSlice.reducer;