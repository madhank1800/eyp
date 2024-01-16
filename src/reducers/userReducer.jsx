import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInApi } from "../apis/authApi";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (credentials) => {
    // Simulate an API call (replace with actual API call)
    const response = await signInApi(credentials);
    return response;
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action);
        console.log(state);
        state.loading = false;
        state.isAuthenticated = true; // Assuming successful login means isAuthenticated is true
        state.user = action.payload; // Assuming action.payload contains user data
        state.error = null; // Reset any previous error

        // Additional checks for the response structure or error handling if needed
        if (!action.payload || action.payload.error) {
          state.isAuthenticated = false;
          state.error = "Invalid response from the server";
        }
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
// export const userReducer=(state=intialState,action)=>{
//     switch (action.type) {
//         case types.LOGIN_REQUEST:
//           return { ...state, isAuthenticated: true,userData: action.payload, error: null };

//         case types.LOGIN_FAILURE:
//           return { ...state, isLoading: false, error: action.payload };

//         default:
//           return state;
//       }
// }
