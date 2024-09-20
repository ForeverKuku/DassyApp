import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccueilScreen from '../screens/AccueilScreen';
import InvestissementScreen from '../screens/InvestissementScreen';
import BudgetScreen from '../screens/BudgetScreen';
import AIAdvisorScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Accueil':
              iconName = 'home';
              break;
            case 'Investissements':
              iconName = 'pulse';
              break;
            case 'Budget':
              iconName = 'format-list-bulleted';
              break;
            case 'AI Advisor':
              iconName = 'account';
              break;
            default:
              iconName = 'home';
              break;
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        tabBarLabel: route.name, 
        tabBarActiveTintColor: '#1D891D',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { 
          fontSize: 12,
          marginBottom: 5, 
        },
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'gray',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Investissements" component={InvestissementScreen} />
      <Tab.Screen name="Budget" component={BudgetScreen} />
      <Tab.Screen name="AI Advisor" component={AIAdvisorScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
