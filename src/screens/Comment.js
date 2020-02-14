import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { checkKey } from '../utils/helpers';
import { Text, Thumbnail, Icon } from 'native-base';

const Comment = props => {
  const { handleOption, users, links, text } = props;
  const user = links.user.linkage
    ? checkKey(users, links.user.linkage.id)
    : null;

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Thumbnail
          // style={styles.image}
          source={user ? { uri: user.image } : IMAGES.USER}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ fontWeight: 'bold' }}>{user && user.name}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity
        style={[styles.center, { paddingHorizontal: 6 }]}
        onPress={handleOption}>
        <Icon
          type={'MaterialCommunityIcons'}
          name={'trash-can-outline'}
          style={{ fontSize: 24, color: '#f00' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    elevation: 1,
    marginBottom: 6
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  text: {
    fontSize: 14
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Comment;
