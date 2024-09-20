import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Scarlett');
  const [nickName, setNickName] = useState('Davis');
  const [email, setEmail] = useState('Scarlettdavis@gmail.com');
  const [phone, setPhone] = useState('555-1234-5678');
  const [dob, setDob] = useState('18.May.2001');

  return (
    <View style={styles.container}>
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


      {/* Input with Save button inside */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.circularInput}
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity style={styles.saveButtonInside}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nick Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.circularInput}
            value={nickName}
            onChangeText={setNickName}
          />
          <TouchableOpacity style={styles.saveButtonInside}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.circularInput}
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.circularInput}
            value={phone}
            onChangeText={setPhone}
          />
          <TouchableOpacity style={styles.saveButtonInside}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.circularInput}
            value={dob}
            onChangeText={setDob}
          />
          <TouchableOpacity style={styles.saveButtonInside}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 20,
    marginLeft: 90,
  },
  profileImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 100,
    height: 100,
    position: 'relative',
    left:100,
    marginTop:21,
    marginBottom:30,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50, 
    marginLeft: 30,
  },
  editImage: {
    position: 'absolute',
    bottom: '0%',
    right: '3%',
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
    fontWeight:'bold',
    color: '#333',
    marginBottom: 5,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
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
    right: 0,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  verifyButton: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 9,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default EditProfileScreen;
