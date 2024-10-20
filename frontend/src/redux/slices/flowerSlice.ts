import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000/api/flower";

const fetchFlowers = createAsyncThunk<Flower[]>(
  "flower/fetchFlowers",
  async () => {
    const { data } = await axios.get<Flower[]>(`${url}`);
    return data;
  }
);

interface Flower {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  type: string;
  offer?: string;
}

interface FlowerState {
  flowers: Flower[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FlowerState = {
  flowers: [],
  status: "idle",
  error: null,
};

const flowerSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.flowers = action.payload;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default flowerSlice.reducer;
