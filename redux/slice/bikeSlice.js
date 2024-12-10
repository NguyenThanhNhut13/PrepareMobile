import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://6756c1e8c0a427baf94a3f05.mockapi.io/api/bikes';

const fetchData = createAsyncThunk('fetchData', async () => {
  try {
    const response = await axios.get(URL);
    return response.data
  } catch (e) {
    console.log(e.message)
    return []
  }
})

const addBike = createAsyncThunk('addbike', async (bike) => {
  try {
    const response = await axios.post(`${URL}`, bike);
    return response.data;
  } catch (e) {
    console.log(e.message)
  }
})

const updateBike = createAsyncThunk('updateBike', async (bike) => {
  try {
    const response = await axios.put(`${URL}/${bike.id}`, bike);
    return response.data;
  } catch (e) {
    console.log(e.message)
  }
})

const deleteBike = createAsyncThunk('deleteBike', async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return id; 
  } catch (e) {
    console.log(e.message)
  }
})

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    bikes: []
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.bikes = action.payload || [];
    })
    .addCase(addBike.fulfilled, (state, action) => {
      state.bikes = [...state.bikes, action.payload];
    })
    .addCase(updateBike.fulfilled, (state, action) => {
      const updatedBike = action.payload;
      state.bikes = state.bikes.map(bike => bike.id === updatedBike.id ? updatedBike : bike) 
    })
    .addCase(deleteBike.fulfilled, (state, action) => {
      state.bikes = state.bikes.filter(bike => bike.id !== action.payload)
    })
  }
})

export default bikeSlice.reducer;
export {fetchData, addBike, updateBike, deleteBike}


