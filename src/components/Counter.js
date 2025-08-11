import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Click Counter</Text>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4682b4',
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    margin: 20,
    elevation: 3,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 10,
  },
  count: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#191970',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ClickCounter;