import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  meals: any[];
}

const initialState: CounterState = {
  meals: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      if (!state.meals.find(item => item.idMeal === action.payload.idMeal)) {
        state.meals = [...state.meals, action.payload];
      } else {
        state.meals = state.meals.filter(
          item => item.idMeal !== action.payload.idMeal,
        );
      }
    },
    deleteFavorites: (state, action) => {
      if (state.meals.find(item => item.idMeal === action.payload.idMeal)) {
        state.meals = state.meals.filter(
          item => item.idMeal !== action.payload.idMeal,
        );
      }
    },
  },
});
