import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {B} from './B';

export const A = () => {
  const [num, setNum] = useState(50);
  return (
    <View>
      <B num={num} />
      <Button title="Click" onPress={() => setNum(num * 2)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
