import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const { width, height } = Dimensions.get('window');

const ChatScreen = ({ navigation }) => {

  const handlePress = () => {
    // Implement functionality for pressing the icon
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" type="ionicon" color="black" size={width * 0.06} />
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>Sebastian Rudiger</Text>
            <Text style={styles.status}>Online</Text>
          </View>
          <Pressable onPress={handlePress} style={styles.circleCard}>
            <MaterialCommunityIcons name="phone-outline" size={width * 0.08} color="gray" />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.messageContainer}>
          <View style={styles.messageLeft}>
            <Text style={styles.messageText}>Hi, Jimmy! Any update today?</Text>
          </View>

          <View style={styles.messageRow}>
            <Text style={styles.messageTime}>09:32 PM</Text>
            <MaterialCommunityIcons name="check-all" size={width * 0.03} color="green" />
          </View>

          <View style={styles.messageRight}>
            <Text style={styles.messageTextRight}>All good! We have some updates ✨</Text>
          </View>

          <View style={styles.messageRow}>
            <Text style={styles.messageTimeRight}>09:34 PM</Text>
            <MaterialCommunityIcons name="check-all" size={width * 0.03} color="green" />
          </View>

          <View style={styles.messageRight}>
            <View style={styles.linkContainer}>
              <Image source={require('../img/features.jpg')} style={styles.image} />
              <Text style={styles.linkText}>Here's the new landing page design! https://www.figma.com/file/EQJuT</Text>
            </View>
          </View>

          <View style={styles.messageRow}>
            <Text style={styles.messageTimeRight}>09:34 PM</Text>
            <MaterialCommunityIcons name="check-all" size={width * 0.03} color="green" />
          </View>

          <View style={styles.messageLeft}>
            <Text style={styles.messageText}>
              Cool! I have some feedback on the "How it works" section... but overall looks good now! 👍
            </Text>
          </View>

          <View style={styles.messageRow}>
            <Text style={styles.messageTime}>10:15 PM</Text>
            <MaterialCommunityIcons name="check-all" size={width * 0.03} color="green" />
          </View>

          <View style={styles.messageRight}>
            <Text style={styles.messageTextRight}>Perfect! Will check it 🔥</Text>
          </View>

          <View style={styles.messageRow}>
            <Text style={styles.messageTimeRight}>10:30 PM</Text>
            <MaterialCommunityIcons name="check-all" size={width * 0.03} color="green" />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.footerCard}>
            <TextInput style={styles.input} placeholder="Type here..." />
            <View style={styles.iconsContainer}>
              <MaterialCommunityIcons name="camera" size={width * 0.06} color="gray" />
              <MaterialCommunityIcons name="send-circle-outline" size={width * 0.1} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: Platform.OS === 'ios' ? 29 : 0,
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    marginHorizontal: width * 0.03,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: width * 0.03,
  },
  name: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  status: {
    fontSize: width * 0.03,
    color: 'green',
  },
  messageContainer: {
    padding: width * 0.04,
    flexGrow: 1,
  },
  messageLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: width * 0.03,
    borderRadius: width * 0.03,
    marginBottom: width * 0.03,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#775ada',
    padding: width * 0.03,
    borderRadius: width * 0.03,
    marginBottom: width * 0.03,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    color: '#000',
    fontSize: width * 0.04,
  },
  messageTextRight: {
    color: '#fff',
    fontSize: width * 0.04,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTime: {
    fontSize: width * 0.03,
    color: '#999',
    marginTop: 5,
    marginRight: width * 0.03,
  },
  messageTimeRight: {
    fontSize: width * 0.03,
    color: '#ccc',
    marginTop: 5,
    textAlign: 'right',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.03,
    marginRight: width * 0.03,
  },
  linkText: {
    color: '#fff',
    flex: 1,
  },
  circleCard: {
    marginLeft: width * 0.03,
  },
  footer: {
    padding: width * 0.03,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.015,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
    fontSize: width * 0.04,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.03,
  },
});

export default ChatScreen;
