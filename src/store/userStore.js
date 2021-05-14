import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  email: undefined,
  login: undefined,
  isLoading: false,
  users: [],
};

const getUsersAsync = createAsyncThunk("user/getUsersAsync", async () => {
  const asyncMock = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(["Georg Wittig", "Michael Levitt", "Jerome Karle"]),
        1500
      );
    });
  };
  const response = await asyncMock();
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setLogin(state, action) {
      state.login = action.payload;
    },
    resetUser(state) {
      state.email = undefined;
      state.login = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
  },
});

export const useUserStore = () => {
  const dispatch = useDispatch();
  const { email, login, isLoading, users } = useSelector((state) => state.user);
  const setEmail = (email) => dispatch(userSlice.actions.setEmail(email));
  const setLogin = (login) => dispatch(userSlice.actions.setLogin(login));
  const resetUser = () => dispatch(userSlice.actions.resetUser());
  const getUsers = () => dispatch(getUsersAsync());

  return {
    email,
    login,
    isLoading,
    users,
    actions: {
      setEmail,
      setLogin,
      resetUser,
      getUsers,
    },
  };
};

export default userSlice.reducer;
