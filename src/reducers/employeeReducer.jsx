import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addEmployeeApi,fetchAllUsersEmployeeIds } from "../apis/Apis";

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data) => {
    const response = await addEmployeeApi(data);
    return response;
  }
);
export const getAllEmployeeIds = createAsyncThunk(
  "employee/getAllEmployeeIds",
  async () => {
    const response = await fetchAllUsersEmployeeIds();
    return response;
  }
);
const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employee: null,
    error: null,
    empIds:[]
  },
  reducers: {
    setAllEmployees: (state, action) => {
      state.employee = action.payload.user;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.employee = null;
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.error =null;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        // state.employee = action.payload;  
        state.error = action.payload;
      });
    builder
      .addCase(getAllEmployeeIds.pending, (state) => {
        state.empIds = null;
        state.error = null;
      })
      .addCase(getAllEmployeeIds.fulfilled, (state, action) => {
        state.empIds = action.payload;
        state.error =null;
      })
      .addCase(getAllEmployeeIds.rejected, (state, action) => {
        // state.employee = action.payload;  
        state.error = action.payload;
      });
  },
});

export const {setAllEmployees} = employeeSlice.actions
export default employeeSlice.reducer