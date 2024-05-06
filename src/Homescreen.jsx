import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text}>Symbol</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.column}>
          <Text style={styles.text}>LTP</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  column: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homescreen;
