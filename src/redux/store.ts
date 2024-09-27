import {configureStore} from '@reduxjs/toolkit';
import {favoritesSlice} from './favorites';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const favoritesConfig = {
  key: 'favorites',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesConfig, favoritesSlice.reducer),
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
