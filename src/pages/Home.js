import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Antonio!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    // eslint-disable-next-line no-dupe-keys
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
