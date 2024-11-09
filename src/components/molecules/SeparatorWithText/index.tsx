import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface SeparatorProps {
  text: string;
}

export function SeparatorWithText({text}: SeparatorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#d3d3d3',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#a1a1a1',
  },
});
