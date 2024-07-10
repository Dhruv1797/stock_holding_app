import { View, Text, } from "react-native";
import { HoldingItem } from "../models/holding_item_model";
import { styles } from "../styles/styles";
import { calculatePnL } from "../services/calculate_PnL";

export const renderItem = ({ item }: { item: HoldingItem }) => {
    const { pnl } = calculatePnL(item);
    return (
      <View style={styles.item}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>{item.symbol}</Text>
            <Text>{item.quantity}</Text>
          </View>
          <View style={styles.col}>
            <View style={styles.ltprow}>
              <Text style={styles.ltptext}>LTP:</Text>
              <Text style={styles.ltpvalue}>${item.ltp}</Text>
            </View>
            <View style={styles.plprow}>
              <Text style={styles.ltptext}>P&L: </Text>
              <Text style={styles.ltpvalue}>${pnl.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };