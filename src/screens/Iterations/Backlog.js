import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Item from './Item';
import Empty from '../../components/Empty';

const Backlog = ({ items: { data }, loading, refresh, loadMore }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        refreshing={loading}
        onRefresh={refresh}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => `${item.id}`}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={<Empty />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7'
  },
  list: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});

export default Backlog;
