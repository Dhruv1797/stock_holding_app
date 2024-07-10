import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import { styles } from '../styles/styles';
import { MainHeader } from '../components/header_compnent';
import { HoldingFlatList } from '../components/render_flat_list';
import { ExpandedItems, ReducedItem } from '../components/expanded_item';

const HoldingsScreen: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const animatedHeight = useRef(new Animated.Value(100)).current;
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  const toggleExpanded = () => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? 100 : 250,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      expanded ? null : setExpanded(!expanded)
    });
    expanded ? setExpanded(!expanded) : null

    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      < MainHeader />
      < HoldingFlatList />
      <Animated.View style={[styles.bottomsheet, { height: animatedHeight }]}>
        <TouchableOpacity style={styles.button} onPress={toggleExpanded}>
          <Animated.Text style={[styles.uparrow, { opacity: animatedOpacity }]}>
            {expanded ? '\\/' : '/\\'}
          </Animated.Text>
        </TouchableOpacity>
        <ReducedItem />
        < Animated.View style={{ opacity: animatedOpacity }}>
          {expanded && (<ExpandedItems />)}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default HoldingsScreen;
