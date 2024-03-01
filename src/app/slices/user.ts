import { createSlice } from '@reduxjs/toolkit';

const initial_state: UserI | null = JSON.parse(
  localStorage.getItem('user') || 'null'
);

const userSlice = createSlice({
  name: 'user',
  initialState: initial_state,
  reducers: {
    setUser: (_state, action) => {
      _state = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      return action.payload;
    },
    logout: (_state) => {
      localStorage.removeItem('user');
      _state = null;
      return null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
