import React from 'react';
import {StyleSheet, View} from 'react-native';

export const MyHOC = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderWidth: 4,
  },
});
