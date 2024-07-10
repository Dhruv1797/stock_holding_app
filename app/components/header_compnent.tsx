import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

export const MainHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Upstox Holding</Text>
    </View>
  );
};


