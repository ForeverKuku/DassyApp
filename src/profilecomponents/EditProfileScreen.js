import React, { useState } from 'react';
import { View,Text, StyleSheet,TextInput, TouchableOpacity,Image,KeyboardAvoidingView, ScrollView, Platform,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Scarlett');
  const [nickName, setNickName] = useState('Davis');
  const [email, setEmail] = useState('Scarlettdavis@gmail.com');
  const [phone, setPhone] = useState('555-1234-5678');
  const [dob, setDob] = useState('18.May.2001');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
        </View>

        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editImage}>
            <Ionicons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {[
          { label: 'Name', value: name, setValue: setName },
          { label: 'Nick Name', value: nickName, setValue: setNickName },
          { label: 'Email', value: email, setValue: setEmail },
          { label: 'Phone Number', value: phone, setValue: setPhone },
          { label: 'Date of Birth', value: dob, setValue: setDob },
        ].map(({ label, value, setValue }) => (
          <View style={styles.inputGroup} key={label}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.circularInput}
                value={value}
                onChangeText={setValue}
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
              <TouchableOpacity style={styles.saveButtonInside} onPress={() => console.log(`Saved ${label}: ${value}`)}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
    marginLeft: 100,
    marginTop: 30,
  },
  profileImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    position: 'relative', // Enable positioning of child elements
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editImage: {
    position: 'absolute',
    bottom: '0%', // Adjust the distance from the bottom
    right: '35%', // Adjust the distance from the right
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  circularInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  saveButtonInside: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default EditProfileScreen;
