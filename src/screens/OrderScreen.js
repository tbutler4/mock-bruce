import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderScreen = props => {
  return (
    <View style={styles.container}>
      <Text>This is my Order Screen!</Text>
      <Button
        title='Go To Single'
        onPress={() => {
          props.navigation.navigate('Single Meal');
        }}
      />
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

export default OrderScreen;
