import { dummyData } from "../data/holding_items_data";
import { HoldingItem } from "../models/holding_item_model";


export const calculatePnL = (item: HoldingItem) => {
    const currentValue = item.ltp * item.quantity;
    const investmentValue = item.avgPrice * item.quantity;
    const pnl = currentValue - investmentValue;
    const todaysPnl = (item.close - item.ltp) * item.quantity;
    return { currentValue, investmentValue, pnl, todaysPnl };
  };

export const calculateSummary = () => {
    let totalCurrentValue = 0;
    let totalInvestmentValue = 0;
    let totalTodaysPnL = 0;

    dummyData.forEach(item => {
      const { currentValue, investmentValue, todaysPnl } = calculatePnL(item);
      totalCurrentValue += currentValue;
      totalInvestmentValue += investmentValue;
      totalTodaysPnL += todaysPnl;
    });

    const totalPnL = totalCurrentValue - totalInvestmentValue;
    return { totalCurrentValue, totalInvestmentValue, totalPnL, totalTodaysPnL };
  };