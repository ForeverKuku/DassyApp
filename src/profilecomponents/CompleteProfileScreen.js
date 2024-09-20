import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import renderStep from '../utils/renderStep';

const CompleteProfileScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // States for Finance section
  const [profession, setProfession] = useState('');
  const [showProfessionModal, setShowProfessionModal] = useState(false);

  // States for SalaryRange section
  const [salaryRange, setSalaryRange] = useState('');
  const [secondaryIncome, setSecondaryIncome] = useState('');

  // States for Currency section
  const [currency, setCurrency] = useState('');
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);

  // States for Family section
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [maritalStatus, setMaritalStatus] = useState('');
  const [showMaritalStatusModal, setShowMaritalStatusModal] = useState(false);

  const [children, setChildren] = useState('');
  const [dependents, setDependents] = useState('');

  // States for Language section
  const [language, setLanguage] = useState('');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  // State for Security section
  const [securityCode, setSecurityCode] = useState('');
  const [confirmSecurityCode, setConfirmSecurityCode] = useState('');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const renderModal = (visible, data, onSelect, onClose) => (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { onSelect(item.value); onClose(); }}>
                <Text style={styles.modalItemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../img/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.headerText}>Complete Profile</Text>
        <Text style={styles.subHeaderText}>Complete all 5 steps to be secure.</Text>

        {/* Progress Bar */}
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '10%' }]} /> 
        </View>

        {/* Steps Section */}
        {renderStep(
          1,
          'Locations',
          expandedSection === 1,
          toggleSection,
          <View>
            <Text style={styles.label}>Locations your team works from:</Text>
            <TextInput style={styles.input} placeholder="Search for a country" />
            <Text style={styles.label}>Suggested locations to add:</Text>
            <View style={styles.suggestedLocations}>
              {['United States', 'Canada', 'Germany'].map((location, index) => (
                <TouchableOpacity key={index}>
                  <Text style={styles.suggestedText}>{location}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Finance Section */}
        {renderStep(
          2,
          'Finance',
          expandedSection === 2,
          toggleSection,
          <View>
            <Text style={styles.label}>Profession:</Text>
            <TouchableOpacity onPress={() => setShowProfessionModal(true)} style={styles.input}>
              <Text>{profession || "Select Profession"}</Text>
            </TouchableOpacity>
            {renderModal(
              showProfessionModal,
              [
                { label: "Engineer", value: "Engineer" },
                { label: "Teacher", value: "Teacher" },
                { label: "CEO", value: "CEO" },
                { label: "Lawyer", value: "Lawyer" },
                { label: "Economist", value: "Economist" },
              ],
              setProfession,
              () => setShowProfessionModal(false)
            )}

            <Text style={styles.label}>Salary Range:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your salary range"
              value={salaryRange}
              onChangeText={setSalaryRange}
            />

            <Text style={styles.label}>Secondary Income (if any):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter secondary income"
              value={secondaryIncome}
              onChangeText={setSecondaryIncome}
            />

            <Text style={styles.label}>Currency:</Text>
            <TouchableOpacity onPress={() => setShowCurrencyModal(true)} style={styles.input}>
              <Text>{currency || "Select Currency"}</Text>
            </TouchableOpacity>
            {renderModal(
              showCurrencyModal,
              [
                { label: "USD", value: "USD" },
                { label: "EUR", value: "EUR" },
                { label: "CFA", value: "CFA" },
                { label: "RFW", value: "RFW" }, 
              ],
              setCurrency,
              () => setShowCurrencyModal(false)
            )}
          </View>
        )}

        {/* Family Section */}
        {renderStep(
          3,
          'Family',
          expandedSection === 3,
          toggleSection,
          <View>
            <Text style={styles.label}>Date of Birth:</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
              <Text>{dob.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker value={dob} mode="date" display="default" onChange={handleDateChange} />
            )}

            <Text style={styles.label}>Marital Status:</Text>
            <TouchableOpacity onPress={() => setShowMaritalStatusModal(true)} style={styles.input}>
              <Text>{maritalStatus || "Select Marital Status"}</Text>
            </TouchableOpacity>
            {renderModal(
              showMaritalStatusModal,
              [
                { label: "Single", value: "Single" },
                { label: "Married", value: "Married" },
                { label: "Divorced", value: "Divorced" },
              ],
              setMaritalStatus,
              () => setShowMaritalStatusModal(false)
            )}

            <Text style={styles.label}>Children:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter number of children"
              value={children}
              onChangeText={setChildren}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Dependents:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter number of dependents"
              value={dependents}
              onChangeText={setDependents}
              keyboardType="numeric"
            />
          </View>
        )}

        {/* Language Section */}
        {renderStep(
          4,
          'Language',
          expandedSection === 4,
          toggleSection,
          <View>
            <Text style={styles.label}>Select Language:</Text>
            <TouchableOpacity onPress={() => setShowLanguageModal(true)} style={styles.input}>
              <Text>{language || "Select Language"}</Text>
            </TouchableOpacity>
            {renderModal(
              showLanguageModal,
              [
                { label: "English", value: "English" },
                { label: "French", value: "French" },
                { label: "Spanish", value: "Spanish" },
              ],
              setLanguage,
              () => setShowLanguageModal(false)
            )}
          </View>
        )}

        {/* Security Section */}
        {renderStep(
          5,
          'Security',
          expandedSection === 5,
          toggleSection,
          <View>
            <Text style={styles.label}>Create Security Code:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter security code"
              keyboardType="numeric"
              secureTextEntry
              value={securityCode}
              onChangeText={setSecurityCode}
              maxLength={6}
            />

            <Text style={styles.label}>Confirm Security Code:</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm security code"
              keyboardType="numeric"
              secureTextEntry
              value={confirmSecurityCode}
              onChangeText={setConfirmSecurityCode}
              maxLength={6}
            />
          </View>
        )}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#e3e3e3',
    borderRadius: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 30,
  },
  progress: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  suggestedLocations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  suggestedText: {
    fontSize: 14,
    color: '#3498db',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalItemText: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  modalCloseButton: {
    padding: 10,
    backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CompleteProfileScreen;
