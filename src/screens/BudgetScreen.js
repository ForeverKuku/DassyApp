import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';
import { Budgetinvestments } from '../utils/Budgetinvestment';
import {BudgetrenderItem} from '../utils/BudgetrenderItem';
import LineChart from '../components/LineChart';
import { data } from '../utils/ChartData';


const screenWidth = Dimensions.get('window').width;

const BudgetScreen = ({navigation}) => {
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
        <LineChart data={data} width={300} height={200} />
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
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 26,
    marginTop:20,
   
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#333',
    textAlign: 'center',
    flex: 1,
  },
  plusButton: {
    backgroundColor: '#1D891D', 
    borderRadius: 50,
    padding: 5,
  },
  summaryChartCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#F5F5F5', 
    borderWidth: 1, 
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    borderColor:'#F5F5F5',
    borderWidth: 1,
    width: '48%',
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  cardAmountPositive: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D891D',
  },
  cardAmountNegative: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  chart: {
    marginVertical: 10,
    borderRadius: 10,
  },
  amountContainer: {
    position: 'absolute',
    bottom: 100,
    left: 120,
    right: 0,
    transform: [
      { translateX: -50 },
      { translateY: -10 }
    ],
    alignItems: 'center',
  },
  amount: {
    fontSize: 10,
    fontWeight: 'normal',
    marginBottom:55,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 32,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  chevronIcon: {
    marginRight: 10, 
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default BudgetScreen;
