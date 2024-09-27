import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowUp from '../assets/icons/arrow-up';
import ArrowDown from '../assets/icons/arrow-down';
import Clear from '../assets/icons/clear';
import {useNavigation} from '@react-navigation/native';
import {MealItem} from '../components/MealItem';
import {useDispatch, useSelector} from 'react-redux';
import {favoritesSlice} from '../redux/favorites';
import {RootState} from '../redux/store';

export const Meals = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const scrollRef = useRef<FlatList>(null);
  const inputRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState('');
  const [meals, setMeals] = useState([]);
  const favorites = useSelector((state: RootState) => state.favorites.meals);

  const handleFetch = async (value = 'Beef') => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
      {
        method: 'GET',
      },
    );
    const data = await response.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    handleFetch(searchValue);
  }, [searchValue]);

  const onAddPress = (item: any) => {
    dispatch(favoritesSlice.actions.addFavorites(item));
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.inputWrap}>
        <TextInput
          ref={inputRef}
          value={searchValue}
          style={styles.input}
          onChangeText={text => setSearchValue(text)}
        />
        <TouchableOpacity
          onPress={() => {
            inputRef.current?.clear();
            setSearchValue('');
          }}>
          <Clear />
        </TouchableOpacity>
      </View>
      <FlatList
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        data={meals}
        keyExtractor={item => `${item.idMeal}`}
        renderItem={({item}) => {
          return (
            <MealItem
              name={item.strMeal}
              imageUrl={item.strMealThumb}
              actionText={
                !favorites.find(elem => elem.idMeal === item.idMeal)
                  ? 'Add'
                  : 'Delete'
              }
              onActionPress={() => onAddPress(item)}
              onPress={() => navigation.navigate('Details', {id: item.idMeal})}
            />
          );
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          scrollRef.current?.scrollToIndex({index: 0, animated: true})
        }>
        <ArrowUp />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {bottom: 42}]}
        onPress={() => scrollRef.current?.scrollToEnd()}>
        <ArrowDown />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrap: {
    backgroundColor: '#C2C2C2',
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 12,
    marginTop: 16,
    flexDirection: 'row',
  },
  input: {
    fontSize: 14,
    flex: 1,
  },
  title: {
    fontSize: 28,
  },
  image: {
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').width - 32,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 100,
    right: 16,
  },
  header: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: '500',
    padding: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 2, 0.7)',
  },
  scroll: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
    gap: 16,
  },
});
