import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const BudgetrenderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.iconPlaceholder}>
    <MaterialCommunityIcons name={item.icon} size={24} color="blue" />
    </View>
    <View style={styles.itemContent}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
    <View style={styles.amountContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={[styles.change, { color: item.changeColor }]}>{item.change}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666', 
    marginBottom: 4, 
  },
  category: {
    color: '#888',
    marginTop: 4,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  change: {
    marginTop: 4,
  },
});
