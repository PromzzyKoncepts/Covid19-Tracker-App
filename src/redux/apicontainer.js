import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://covid19.mathdro.id/api/confirmed';
const FETCH = 'redux/apicontainer/FETCH';

const fetchData = createAsyncThunk(FETCH, async () => fetch(url).then((res) => res.json()));

const DataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: 'idle',
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      const data = action.payload.slice(250, 360);
      state.data = data.map((item) => ({
        ...item,
        id: uuidv4(),
      }));
      state.loading = 'fulfilled';
    },
  },
});

export { fetchData };
export default DataSlice.reducer;
