import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Icon } from 'native-base';

const Empty = () => (
  <View style={styles.container}>
    <View style={styles.wrapIcon}>
      <Icon name={'question'} type={'AntDesign'} style={styles.icon} />
    </View>
    <Text style={styles.text}>No results were found</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapIcon: {
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#f7f7f7'
  },
  icon: {
    fontSize: 38,
    color: '#8B94A3'
  },
  text: {
    color: '#8B94A3',
    fontSize: 19,
    paddingVertical: 5
  }
});

export default Empty;
