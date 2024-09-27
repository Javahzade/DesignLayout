import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Details = () => {
  const route = useRoute();
  const [details, setDetails] = useState(null);

  const getMealDetails = async id => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      {
        method: 'GET',
      },
    );

    const data = await response.json();

    setDetails(data.meals[0]);
  };

  useEffect(() => {
    getMealDetails(route.params.id);
  }, [route.params.id]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View>
        <Text style={styles.title}>{details?.strInstructions}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 24,
    padding: 16,
    marginTop: 24,
  },
});
