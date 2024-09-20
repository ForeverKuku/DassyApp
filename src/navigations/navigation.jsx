import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../navigations/TabNavigator'; 
import AccueilScreen from '../screens/AccueilScreen';
import InvestissementScreen from '../screens/InvestissementScreen';
import BudgetScreen from '../screens/BudgetScreen';
import AIAdvisorScreen from '../screens/ChatScreen';
import MesInvestmentScreen from '../screens/MesInvestissementScreen';
import VosTransactionScreen from '../screens/VosTransactionScreen';
import BudgetList from '../screens/BudgetList';
import ProfileSettingsScreen from '../profilecomponents/ProfileSettingsScreen';
import EditProfileScreen from '../profilecomponents/EditProfileScreen';
import CompleteProfileScreen from '../profilecomponents/CompleteProfileScreen';


const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Investissement" component={InvestissementScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Budget" component={BudgetScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AI" component={AIAdvisorScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AccueilScreen" component={AccueilScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MesInvestmentScreen" component={MesInvestmentScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VosTransactionScreen" component={VosTransactionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BudgetList" component={BudgetList} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CompleteProfileScreen" component={CompleteProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
