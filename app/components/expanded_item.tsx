import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles/styles';
import { calculateSummary } from '../services/calculate_PnL';

export const ExpandedItems: React.FC = () => {
    const {  totalInvestmentValue, totalPnL, totalTodaysPnL } = calculateSummary();
  return (
    <View >
    <View style={styles.rowing}>
      <Text style={styles.value}>Total Investment:</Text>
      <Text style={styles.mainheading}> ₹ {totalInvestmentValue.toFixed(2)}</Text>
    </View>
    <View style={styles.rowing}>
      <Text style={styles.value}>Today's Profit & Loss:</Text>
      <Text style={styles.mainheading}> ₹ {totalTodaysPnL.toFixed(2)}</Text>
    </View>
    <View style={styles.lastrowing}>
      <Text style={styles.value}>Profit & Loss:</Text>
      <Text style={styles.mainheading}> ₹ {totalPnL.toFixed(2)}</Text>
    </View>
  </View>
  );
};

export const ReducedItem: React.FC = () => {
    const {  totalCurrentValue} = calculateSummary();
  return (
    <View style={styles.rowing}>
          <Text style={styles.value}>Current value:</Text>
          <Text style={styles.mainheading}> ₹ {totalCurrentValue.toFixed(2)}</Text>
        </View>

  );
};



