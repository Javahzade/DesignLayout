import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGetStorageItem = (key: string) => {
  return AsyncStorage.getItem(key).then(res => res);
};
