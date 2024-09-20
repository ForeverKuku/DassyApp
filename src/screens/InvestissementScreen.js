import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import pickerSelectStyles from '../utils/pickerSelectStyles';
import LineChart from '../components/LineChart';
import { data } from '../utils/ChartData';

const { width, height } = Dimensions.get('window');

const InvestissementScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Semaine dernière");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('MesInvestmentScreen')}>
            <Icon name="arrow-back" color="#fff" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Investissement</Text>
          <Icon name="ellipsis-vertical" color="#fff" size={24} />
        </View>
        <View style={styles.card}>
          <View style={styles.investmentSummary}>
            <View style={styles.investmentRow}>
              <View style={styles.iconContainer} />
              <View>
                <Text style={styles.investmentCompany}>Ecobank Inc.</Text>
                <Text style={styles.investmentType}>Compte Titres</Text>
              </View>
              <View style={styles.investmentValueContainer}>
                <Text style={styles.investmentValue}>CFA 332.210</Text>
                <Text style={styles.investmentChange}>-3.12 (-1.25%)</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Performance</Text>
        <View style={styles.card2}>
          <View style={styles.chartContainer}>
            <View style={styles.pickerWrapper}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                  { label: 'Semaine dernière', value: 'Semaine dernière' },
                  { label: 'Ce mois', value: 'Ce mois' },
                  { label: 'Cette année', value: 'Cette année' },
                ]}
                style={pickerSelectStyles}
                value={selectedValue}
                useNativeAndroidPickerStyle={false}
                Icon={() => <Ionicons name="chevron-down" size={24} color="gray" />}
                modalProps={{
                  animationType: 'slide',
                  transparent: true,
                }}
              />
            </View>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentage}>+32.3 (9%)</Text>
            </View>
            <View style={styles.chartWrapper}>
              <LineChart data={data} width={width * 0.9} height={height * 0.25} style={styles.chart} />
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>CFA 350.000</Text>
              </View>
            </View>
          </View>
        </View>

        
        <View style={{ marginBottom: 20 }} />
        <View style={styles.priceCard}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Prix d'achat</Text>
            <View>
              <Text style={styles.priceValue}>CFA 17.00</Text>
              <Text style={styles.priceChange}>+1.34 (8.43%)</Text>
            </View>
          </View>
        </View>

        <View style={styles.priceCard}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Prix actuel</Text>
            <View>
              <Text style={styles.priceValue}>CFA 10.00</Text>
              <Text style={styles.priceChangeNegative}>-7.00 (-12.89%)</Text>
            </View>
          </View>
        </View>

        {/* Sell Button */}
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.sellButtonText}>J'AI VENDU CET ACTIF</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  headerContainer: {
    backgroundColor: '#1D891D',
    paddingBottom: 20,
    borderRadius: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 27,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    marginBottom: 5,
  },
  investmentSummary: {
    borderRadius: 10,
  },
  investmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  investmentCompany: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  investmentType: {
    fontSize: 12,
  },
  investmentValueContainer: {
    alignItems: 'flex-end',
  },
  investmentValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  investmentChange: {
    color: '#FF6B6B',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    margin: 20,
  },
  card2: {
    padding: 4,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginTop: 0,
    marginHorizontal: 10,
  },
  chartContainer: {
    marginBottom: 20, 
  },
  pickerWrapper: {
    width: 200, 
  },
  percentageContainer: {
    marginBottom: 10,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0E774D',
  },
  chartWrapper: {
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  amountContainer: {
    position: 'absolute',
    bottom: 100,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    alignItems: 'center',
  },
  amount: {
    fontSize: 10,
    fontWeight: 'normal',
    marginBottom: 55,
  },
  priceCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 15,
    padding: 10,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 12,
  },
  priceValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceChange: {
    color: 'green',
    fontSize: 10,
  },
  priceChangeNegative: {
    color: 'red',
    fontSize: 10,
  },
  sellButton: {
    backgroundColor: '#1D891D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sellButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvestissementScreen;
