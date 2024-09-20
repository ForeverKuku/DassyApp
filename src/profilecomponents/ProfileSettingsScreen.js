import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  Dimensions, ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ProfileSettingsScreen = ({ navigation }) => {
  const [notificationEnabled, setNotificationEnabled] = React.useState(false);

  const toggleSwitch = () => setNotificationEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.profileDescription}>Profile Settings</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Scarlett Davis</Text>
            <Text style={styles.profileEmail}>Scarlettdavis@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* General Settings Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('EditProfileScreen')}
        >
          <View style={styles.optionLeft}>
            <Ionicons name="person" size={22} color="#007bff" style={styles.optionIcon} />
            <Text style={styles.optionText}>Edit Profile</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#007bff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name="lock-closed" size={22} color="#007bff" style={styles.optionIcon} />
            <Text style={styles.optionText}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#007bff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name="document-text" size={22} color="#007bff" style={styles.optionIcon} />
            <Text style={styles.optionText}>Terms of Use</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#007bff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name="card" size={22} color="#007bff" style={styles.optionIcon} />
            <Text style={styles.optionText}>Add Card</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons
              name="notifications"
              size={22}
              color="#007bff"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Notification</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notificationEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={notificationEnabled}
          />
        </View>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <MaterialCommunityIcons
              name="progress-alert"
              size={22}
              color="#007bff"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>FAQ</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#007bff" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, styles.logoutOption]}>
          <View style={styles.optionLeft}>
            <Ionicons name="log-out" size={22} color="#d9534f" style={styles.optionIcon} />
            <Text style={[styles.optionText, styles.logoutText]}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: width * 0.05,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profileDescription: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 90, 
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#333',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  optionIcon: {
    marginRight: 10,
  },
  logoutOption: {
    borderBottomWidth: 0,
    marginBottom: 20,
  },
  logoutText: {
    color: '#d9534f',
  },
});

export default ProfileSettingsScreen;
