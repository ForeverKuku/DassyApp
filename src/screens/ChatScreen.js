import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




const ChatScreen = ({ navigation }) => {

  const handlePress = () => {
    // Implement functionality for pressing the icon
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="ionicon" color="black" size={24} />
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
          <MaterialCommunityIcons name="phone-outline" size={30} color="gray"/>
        </Pressable>
      </View>

      {/* Chat bubbles */}
      <View style={styles.messageContainer}>
        <View style={styles.messageLeft}>
          <Text style={styles.messageText}>Hi, Jimmy! Any update today?</Text>
        </View>

        <View style={styles.messageRow}>
          <Text style={styles.messageTime}>09:32 PM</Text>
          <MaterialCommunityIcons name="check-all" size={12} color="green"/>
        </View>
       
        <View style={styles.messageRight}>
          <Text style={styles.messageTextRight}>All good! We have some updates ✨</Text>
        </View>

        <View style={styles.messageRow}>
          <Text style={styles.messageTimeRight}>09:34 PM</Text>
          <MaterialCommunityIcons name="check-all" size={12} color="green"/>
        </View>

        <View style={styles.messageRight}>
          <View style={styles.linkContainer}>
            <Image
              source={require('../img/features.jpg')}
              style={styles.image}
            />
            <Text style={styles.linkText}>
              Here's the new landing page design! https://www.figma.com/file/EQJuT
            </Text>
          </View>
        </View>

        <View style={styles.messageRow}>
          <Text style={styles.messageTimeRight}>09:34 PM</Text>
          <MaterialCommunityIcons name="check-all" size={12} color="green"/>
        </View>

        <View style={styles.messageLeft}>
          <Text style={styles.messageText}>
            Cool! I have some feedback on the "How it works" section... but overall looks good now! 👍
          </Text>
        </View>

        <View style={styles.messageRow}>
          <Text style={styles.messageTime}>10:15 PM</Text>
          <MaterialCommunityIcons name="check-all" size={12} color="green"/>
        </View>

        <View style={styles.messageRight}>
          <Text style={styles.messageTextRight}>Perfect! Will check it 🔥</Text>
        </View>

        <View style={styles.messageRow}>
          <Text style={styles.messageTimeRight}>10:30 PM</Text>
          <MaterialCommunityIcons name="check-all" size={12} color="green"/>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerCard}>
          <TextInput 
            style={styles.input}
            placeholder="Type here..."
          />
          <View style={styles.iconsContainer}>
            <MaterialCommunityIcons name="camera" size={24} color="gray" />
            <MaterialCommunityIcons name="send-circle-outline" size={37} color="gray" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 29,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    color: 'green',
  },
  messageContainer: {
    padding: 15,
    flexGrow: 1,
  },
  messageLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    color: '#000',
  },
  messageTextRight: {
    color: '#fff',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageTime: {
    fontSize: 10,
    color: '#999',
    marginTop: 5,
    marginRight: 10
  },
  messageTimeRight: {
    fontSize: 10,
    color: '#ccc',
    marginTop: 5,
    textAlign: 'right',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  linkText: {
    color: '#fff',
    flex: 1,
  },
  circleCard: {
    marginLeft: 10,
  },
  footer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default ChatScreen;
