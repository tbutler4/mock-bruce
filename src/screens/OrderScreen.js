import React, { useContext } from 'react';
import MealContext from '../context/Context';

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const OrderScreen = props => {
  const { state, changeName, addMealToOrder } = useContext(MealContext);
  const meals = state.meals;

  return (
    <FlatList
      data={meals}
      renderItem={itemData => {
        return (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                changeName(itemData.item);
              }}>
              <Text style={styles.title}>{itemData.item.title}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    margin: 10,
    padding: 20,
  },
  title: {
    color: '#eee',
  },
});

export default OrderScreen;
