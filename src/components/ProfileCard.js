import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ name, username, avatarUrl, bio }) => {
  return (
    <View style={styles.container}>
      <Image
        source={          avatarUrl        }
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
      {bio ? <Text style={styles.bio}>{bio}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4682b4',
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    margin: 20,
    elevation: 3,
    minWidth: 250,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4682b4',
    marginBottom: 16,
    backgroundColor: '#e6e6e6',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682b4',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#191970',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default ProfileCard;