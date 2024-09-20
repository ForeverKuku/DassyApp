import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.iconPlaceholder} />
    <View style={styles.itemContent}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
    </View>
    <View style={styles.amountContainer}>
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
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
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
  },
  change: {
    marginTop: 4,
  },
});
