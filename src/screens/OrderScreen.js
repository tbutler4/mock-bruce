import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const OrderScreen = props => {
  const Arr = [
    { id: 1, title: 'Pancakes and Eggs' },
    { id: 2, title: 'Biscuits and Gravy' },
  ];

  return (
    <FlatList
      data={Arr}
      renderItem={itemData => {
        return (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                props.navigation.navigate('Single Meal', {
                  mealId: itemData.item.id,
                });
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
