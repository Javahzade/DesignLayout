import React from 'react';
import {FlatList} from 'react-native';
import {MealItem} from '../components/MealItem';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {favoritesSlice} from '../redux/favorites';

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.meals);

  const onAddPress = (item: any) => {
    dispatch(favoritesSlice.actions.deleteFavorites(item));
  };

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => `${item.idMeal}`}
      renderItem={({item}) => (
        <MealItem
          name={item.strMeal}
          imageUrl={item.strMealThumb}
          onPress={() => {}}
          actionText={
            !favorites.find(elem => elem.idMeal === item.idMeal)
              ? 'Add'
              : 'Delete'
          }
          onActionPress={() => onAddPress(item)}
        />
      )}
    />
  );
};
