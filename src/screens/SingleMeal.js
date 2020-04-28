import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleMealScreen = props => {
  return (
    <View style={styles.container}>
      <Text>This is my Single Meal Screen!</Text>
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
