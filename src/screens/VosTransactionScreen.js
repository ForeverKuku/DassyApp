import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { transactions } from '../utils/transactions';



const VosTransactionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#fff" style={{ marginTop: 20 }} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Vos Transactions</Text>
          <TouchableOpacity style={styles.plusButton} onPress={() => console.log('Plus pressed')}>
            <Icon name="plus" size={24} color="green" />
          </TouchableOpacity>
        </View>

        {/* Card Items */}
        <View style={styles.cardContainer}>
          <View style={styles.cardItem}>
            <Text style={styles.cardTitle}>Revenu mensuel</Text>
            <Text style={styles.cardAmountPositive}>CFA +900.000</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.cardTitle}>Dépenses du mois</Text>
            <Text style={styles.cardAmountNegative}>CFA -600.000</Text>
          </View>
        </View>
      </View>

      {/* Transaction History */}
      <ScrollView style={styles.historyContainer}>
        <View style={styles.historyCard}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>Historique</Text>
            <Icon name="minus" size={49} color="#d3d3d3" style={styles.icon} />
            <Icon name="chevron-down" size={29} color="#d3d3d3" style={styles.icon} />
          </View>
          {transactions.map((transaction, index) => (
            <View key={index} style={styles.transaction}>
              <MaterialCommunityIcons  name={transaction.icon}  size={24}  color="#00B386" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{transaction.title}</Text>
                <Text style={styles.transactionSubtitle}>{transaction.subtitle}</Text>
              </View>
              <View style={styles.transactionAmountContainer}>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
                <Text
                  style={transaction.amount.startsWith('-') ? styles.transactionAmountNegative : styles.transactionAmountPositive}
                >
                  {transaction.amount}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    width: '100%',
    height: 220,
    marginBottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#fff',
    marginTop:20
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    elevation: 1,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  cardAmountPositive: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00B386',
  },
  cardAmountNegative: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  historyContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '100%',
    marginBottom: 20,
  },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#333',
  },
  transactionSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmountPositive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00B386',
  },
  transactionAmountNegative: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
});

export default VosTransactionScreen;
