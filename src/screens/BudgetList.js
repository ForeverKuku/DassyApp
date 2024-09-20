import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';
import { Budgetinvestments } from '../utils/Budgetinvestment';
import { BudgetrenderItem } from '../utils/BudgetrenderItem';
import LineChart from '../components/LineChart';
import { data } from '../utils/ChartData';

const { width, height } = Dimensions.get('window'); 

const BudgetList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="ionicon" color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Budget</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Icon name="add" type="ionicon" color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {/* Summary and Chart Card */}
      <View style={styles.summaryChartCard}>
        <View style={styles.summaryContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Revenu mensuel</Text>
            <Text style={styles.cardAmountPositive}>CFA +900.000</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Dépenses du mois</Text>
            <Text style={styles.cardAmountNegative}>CFA -600.000</Text>
          </View>
        </View>

        {/* Performance Chart */}
        <LineChart data={data} width={width * 0.85} height={height * 0.3} />
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>CFA 350.000</Text>
        </View>
      </View>

      {/* Category Section */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Catégories</Text>
        <MaterialCommunityIcons name="chevron-up" size={24} color="#000" style={styles.chevronIcon} />
      </View>

      <FlatList
        data={Budgetinvestments}
        renderItem={BudgetrenderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04, 
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.03, 
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    marginBottom: height * 0.03, 
  },
  headerTitle: {
    fontSize: width * 0.055,
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  plusButton: {
    backgroundColor: '#1D891D',
    borderRadius: 50,
    padding: width * 0.03, 
  },
  summaryChartCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#F5F5F5',
    borderWidth: 1,
    padding: width * 0.04, 
    marginBottom: height * 0.03, 
    elevation: 2,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02, 
  },
  card: {
    backgroundColor: 'white',
    padding: width * 0.02, 
    borderRadius: 15, 
    borderColor: '#F5F5F5',
    borderWidth: 1,
    width: '45%', 
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontSize: width * 0.035, 
    color: '#666',
    marginBottom: height * 0.008,
  },
  cardAmountPositive: {
    fontSize: width * 0.04, 
    fontWeight: 'bold',
    color: '#1D891D',
  },
  cardAmountNegative: {
    fontSize: width * 0.04, 
    fontWeight: 'bold',
    color: 'red',
  },
  amountContainer: {
    position: 'absolute',
    bottom: height * 0.15, 
    left: width * 0.25,
    alignItems: 'center',
  },
  amount: {
    fontSize: width * 0.035, 
    fontWeight: 'normal',
    marginBottom: height * 0.05, 
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.03, 
  },
  categoryTitle: {
    fontSize: width * 0.05, 
    fontWeight: 'normal',
  },
  chevronIcon: {
    marginRight: width * 0.02, 
  },
  listContainer: {
    paddingBottom: height * 0.02, 
  },
});

export default BudgetList;
