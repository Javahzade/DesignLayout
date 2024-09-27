import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface Props {
  name: string;
  imageUrl: string;
  actionText?: string;
  onPress: () => void;
  onActionPress?: () => void;
}

export const MealItem: React.FC<Props> = ({
  name,
  imageUrl,
  actionText,
  onPress,
  onActionPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={onPress}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.header}>{name}</Text>
      {actionText && (
        <TouchableOpacity style={styles.button} onPress={onActionPress}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  image: {
    width: Dimensions.get('window').width - 32,
    height: Dimensions.get('window').width - 32,
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
  button: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    backgroundColor: 'rgba(255, 255, 2, 0.7)',
    padding: 10,
  },
  actionText: {
    fontSize: 14,
  },
});
