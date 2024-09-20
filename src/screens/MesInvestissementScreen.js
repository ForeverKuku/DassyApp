import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { renderItem as RenderItemComponent } from '../utils/RenderItem';
import { investments } from '../utils/Investments';



const { width, height } = Dimensions.get('window'); 

const MesInvestmentScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('InvestissementScreen', { investment: item })}>
      <RenderItemComponent item={item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mes investissements</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#ccc" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Rechercher" />
        </View>
      </KeyboardAvoidingView>

      <FlatList
        data={investments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04, 
    paddingVertical: height * 0.02,  
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: width * 0.045, 
    fontWeight: 'bold',
  },
  plusButton: {
    width: width * 0.1, 
    height: width * 0.1, 
    borderRadius: (width * 0.1) / 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    paddingHorizontal: width * 0.04, 
    marginVertical: height * 0.01, 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: width * 0.02, 
  },
  searchIcon: {
    marginRight: width * 0.02, 
  },
  searchInput: {
    flex: 1,
    paddingVertical: height * 0.015, 
  },
  listContainer: {
    paddingHorizontal: width * 0.04, 
    paddingBottom: height * 0.02, 
  },
});

export default MesInvestmentScreen;
