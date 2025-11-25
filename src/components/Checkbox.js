import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';

function Checkbox({ checked }) {
  return (
    <View style={styles.container}>
      <View style={styles.sqaure}>
        {checked && <Text style={styles.check}>✓</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sqaure: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center ',
  },
  check: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Checkbox;
