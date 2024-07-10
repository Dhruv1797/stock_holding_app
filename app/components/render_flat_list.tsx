import React from 'react';
import {  FlatList } from 'react-native';
import { dummyData } from '../data/holding_items_data';
import { renderItem } from './holding_render_item';


export const HoldingFlatList: React.FC = () => {
  return (
    <FlatList
    data={dummyData}
    renderItem={renderItem}
    keyExtractor={(item) => item.symbol}
  />
  );
};
