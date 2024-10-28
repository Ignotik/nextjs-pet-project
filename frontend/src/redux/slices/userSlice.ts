import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../store/store";

const url = "http://localhost/api";

interface User {
  id: string;
  fullName: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  registerStatus: "idle" | "loading" | "succeeded" | "failed";
  loginStatus: "idle" | "loading" | "succeeded" | "failed";
  fetchStatus: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token") || null,
  registerStatus: "idle",
  loginStatus: "idle",
  fetchStatus: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: { fullName: string; email: string; password: string }) => {
    const response = await axios.post(`${url}/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${url}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (token: string) => {
    const response = await axios.get(`${url}/auth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.registerStatus = "idle";
      state.loginStatus = "idle";
      state.fetchStatus = "idle";
      state.error = null;
      localStorage.removeItem("token");
    },
    clearUserState: (state) => {
      state.user = null;
      state.registerStatus = "idle";
      state.loginStatus = "idle";
      state.fetchStatus = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        state.registerStatus = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerStatus = "failed";
        state.error = action.error.message || null;
      })

      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.loginStatus = "succeeded";
        localStorage.getItem("token");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error = action.error.message || null;
      })

      .addCase(fetchCurrentUser.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.fetchStatus = "succeeded";
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const initializeAuth = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    await dispatch(fetchCurrentUser(token));
  }
};

export const { logout, clearUserState } = userSlice.actions;

export default userSlice.reducer;
