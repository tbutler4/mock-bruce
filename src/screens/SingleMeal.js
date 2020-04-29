import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleMealScreen = props => {
  const meal = props.route.params;
  return (
    <View style={styles.container}>
      <Text>{meal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SingleMealScreen;
