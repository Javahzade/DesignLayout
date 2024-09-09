import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const categoryData = [
  'Filter',
  'Discount promo',
  'Recommended',
  'Highly Rated',
];

const foodData = [
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 4600,
    deliveryTime: 900,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 600,
    deliveryTime: 900,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 4600,
    deliveryTime: 900,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 4600,
    deliveryTime: 4000,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 4600,
    deliveryTime: 900,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 4600,
    deliveryTime: 900,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
  {
    name: 'Bottega Restorante',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
    rate: 4.6,
    rateCount: 456,
    description: 'Italian restaurant with various dishes',
    distance: 4600,
    deliveryTime: 900,
    bonus: ['EXTRA_DISCOUNT', 'FREE_DELIVERY'],
  },
];

const distanceFormatter = (distance: number) => {
  return distance >= 1000 ? `${distance / 1000}Km` : `${distance}M`;
};

const timeFormatter = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  let resultText = '';

  if (hours > 0) {
    resultText = hours + 'h';
  }
  if (minutes > 0) {
    resultText += (!hours ? '' : ' ') + minutes + 'm';
  }
  return resultText;
};

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.foodItem}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.image}} />
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              backgroundColor: 'orange',
              borderTopLeftRadius: 12,
            }}>
            <Text>{item.rate}</Text>
            <Text>{item.rateCount}</Text>
          </View>
        </View>
        <View style={styles.foodContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.title}>{'<3'}</Text>
          </View>
          <Text style={styles.subTitle}>{item.description}</Text>
          <View style={styles.info}>
            <Text>{distanceFormatter(item.distance)} Distance</Text>
            <View style={styles.dot} />
            <Text>{timeFormatter(item.deliveryTime)}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Near Me</Text>
      </View>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>Dishes near me</Text>
        <Text style={styles.subTitle}>Catch delicious eats near you</Text>
      </View>
      <ScrollView
        horizontal
        style={styles.categories}
        contentContainerStyle={styles.contentCategories}
        showsHorizontalScrollIndicator={false}>
        {categoryData.map((item, index) => (
          <View style={styles.category}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <FlatList
        data={foodData}
        style={styles.food}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 400,
  },
  contentHeader: {
    padding: 16,
  },
  categories: {
    maxHeight: 43,
    height: 43,
  },
  contentCategories: {
    gap: 12,
    height: 35,
    paddingHorizontal: 16,
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#EEEEEE',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 100,
  },
  food: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  foodItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  foodContent: {
    marginLeft: 18,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    width: 3,
    height: 3,
    backgroundColor: '#C4C4C4',
    borderRadius: 100,
  },
  imageContainer: {},
});
