import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const renderStep = (stepNumber, title, isExpanded, toggleSection, content = null) => (
  <View style={styles.stepContainer}>
    <TouchableOpacity style={styles.stepHeader} onPress={() => toggleSection(stepNumber)}>
      <Text style={styles.stepText}>{`${stepNumber}. ${title}`}</Text>
      <Icon name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'} size={20} />
    </TouchableOpacity>
    {isExpanded && <View style={styles.stepContent}>{content}</View>}
  </View>
);

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 15,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stepText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepContent: {
    paddingTop: 10,
  },
});

export default renderStep;
