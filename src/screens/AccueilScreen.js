import React, { useState} from 'react';
import { View, Text, Button,StyleSheet,  TouchableOpacity, Dimensions, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import pickerSelectStyles from '../utils/pickerSelectStyles'; 
import Feather from 'react-native-vector-icons/Feather';
import MesInvestmentScreen from './MesInvestissementScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LineChart from '../components/LineChart';
import { data } from '../utils/ChartData';
import { usePushNotifications, sendPushNotification } from '../services/PushNotification'; 



const screenWidth = Dimensions.get('window').width;
const canvasWidth = 400;
const canvasHeight = 300;


const AccueilScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("Semaine dernière");

  const { expoPushToken, notification } = usePushNotifications();

 
  const handleWallet = () => {
    navigation.navigate('BudgetList');
  };
  
  const handleProfilePress = () => {
    navigation.navigate('CompleteProfileScreen');
  };
  
  

  const handlePress = () => {
    navigation.navigate('ProfileSettingsScreen'); 
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleProfilePress}>
        <Ionicons name="menu" color="#fff" size={43} />
        </Pressable>
        <Text style={styles.headerTitle}>Accueil</Text>
        <Pressable onPress={handlePress} style={styles.circleCard}>
      <MaterialCommunityIcons name="account-outline" color="#d3d3d3" size={30} />
    </Pressable>
      </View>

      <View style={styles.portfolioContainer}>
        <Text style={styles.headerText}>Valeur totale du portefeuille</Text>
        <View style={styles.portfolioRow}>
          <Text style={styles.portfolioValue}>CFA 150.540.000</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MesInvestmentScreen')}>
            <Icon  name="plus" type="feather" color="blue" size={24} containerStyle={styles.plusButton}/>
          </TouchableOpacity>
        </View>

    
        <View style={styles.portfolioStats}>
          <View style={styles.card}>
             <TouchableOpacity onPress={handleWallet}>
              <Ionicons name="wallet" color="#000" size={30} />
              </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.statText}>Revenu Mensuel</Text>
              <Text style={styles.statValue}>CFA 900,000</Text>
            </View>
          </View>
          
          <View style={styles.secondCard}>
          <TouchableOpacity onPress={() => navigation.navigate('VosTransactionScreen')}>
              <MaterialCommunityIcons name="poll" color="#000" size={30} />
              </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.statText}>Dépenses du mois</Text>
              <Text style={styles.statValue}>CFA 600,500</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitleheader}>Activités du compte</Text>
      <View style={styles.chartContainer}>
        <View style={styles.subHeaderContainer}>
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
            Icon={() => {
                return <Ionicons name="chevron-down" size={24} color="gray" />;
            }}
          />
        </View>
        </View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>+32.3 (9%)</Text>
        </View>
         
        <View style={styles.chartWrapper}>
        <LineChart data={data} width={300} height={200} />
       <View style={styles.amountContainer}>
        <Text style={styles.amount}>CFA 350.000</Text>
        </View>
        </View>
      </View>
    


      <View style={styles.investmentContainer}>
          <View style={styles.investmentSummary}>
            <View style={styles.investmentRow}>
              <View style={styles.iconContainer}>
              </View>
              <View>
                <Text style={styles.investmentCompany}>Ecobank Inc.</Text>
                <Text style={styles.investmentType}>Compte Titres</Text>
              </View>
              <View style={styles.investmentValueContainer}>
                <Text style={styles.investmentValue}>CFA 245.890</Text>
                <Text style={styles.investmentChange}>-1.43 (2%)</Text>
              </View>
            </View>
          </View>
        </View>
       

      <View style={styles.pushNotificationContainer}>
        <Text>Your expo push token: {expoPushToken}</Text>
        <View style={styles.notificationDetails}>
          <Text>Title: {notification && notification.request.content.title}</Text>
          <Text>Body: {notification && notification.request.content.body}</Text>
          <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
        </View>
        <Button title="Press to Send Notification" onPress={async () => {  await sendPushNotification(expoPushToken); }} />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1D891D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 10,
  },
  circleCard: {
    width: 40,
    height: 40,
    borderRadius: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioContainer: {
    backgroundColor: '#1D891D',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'normal',
    marginBottom: 20,
    marginTop: -36,
  },
  portfolioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  portfolioValue: {
    fontSize: 26,
    fontWeight: 'bold', 
    color: '#fff',
    marginVertical: 10,
    marginLeft: 70,
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  portfolioStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    flex: 1,
    maxWidth: 190,
    height: 100,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0,
  },
  secondCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    flex: 1,
    maxWidth: 190,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  statText: {
    fontSize: 14,
     textAlign:'right',
     marginBottom: 10,
  },
  statValue: {
    fontSize: 19,
    color: '#333',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign:'right'
  },
  chartContainer: {
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  sectionTitleheader: {
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 20,
    marginLeft:20, 
  },
  subHeaderContainer: {
    justifyContent: 'center', 
    alignItems: 'left', 
    marginBottom: 10,
  },
  pickerWrapper: {
    width: 200, 
  },
  percentageContainer: {
    alignItems: 'center', 
    marginBottom: 10,
    alignItems: 'left',
  },
  percentage: {
    color:'green'
  },
  chartWrapper: {
    position: 'relative',
    width: screenWidth - 40,
    height: 220, 
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
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
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    marginBottom:55,
  },
  investmentContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginHorizontal: 20,
    marginTop: 40,
    padding: 15,
    marginBottom: 25,
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
    fontWeight: 'normal',
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
    color: 'green',
    fontSize: 12,
  },
  canvas: {
    height: canvasHeight,
    width: canvasWidth,
    backgroundColor: '#f0f0f0',
  },

});

export default AccueilScreen;
