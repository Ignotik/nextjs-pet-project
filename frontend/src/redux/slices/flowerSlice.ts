import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const url = "http://localhost:4000/";

interface Flower {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  type: string;
  offer?: string;
}

interface FetchFlowersResponse {
  flowers: Flower[];
  count: number;
}

export const fetchFlowers = createAsyncThunk<
  FetchFlowersResponse,
  { page: number; limit: number }
>("flower/fetchFlowers", async ({ page, limit }) => {
  const response = await axios.get<{ flowers: Flower[]; count: number }>(
    `${url}api/flower?page=${page}&limit=${limit}`
  );

  return {
    flowers: response.data.flowers,
    count: response.data.count,
  };
});

export const fetchFlowerById = createAsyncThunk<Flower, number>(
  "flower/fetchFlowerById",
  async (id) => {
    const response = await axios.get<Flower>(`${url}api/flower/${id}`);
    return response.data;
  }
);

interface FlowerState {
  count: number;
  flowers: Flower[];
  selectedFlower: Flower | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FlowerState = {
  flowers: [],
  count: 0,
  selectedFlower: null,
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
        const { flowers, count } = action.payload;
        state.flowers = flowers;
        state.count = count;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(fetchFlowerById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFlowerById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedFlower = action.payload;
      })
      .addCase(fetchFlowerById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default flowerSlice.reducer;
