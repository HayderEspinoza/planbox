import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Empty from '../../components/Empty';
import Task from './Task';

const Tasks = ({
  tasks: { data },
  loading,
  handleOptions,
  users,
  refresh,
  loadMore
}) => {
  return (
    <FlatList
      data={data}
      refreshing={loading}
      onRefresh={refresh}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Task {...item} handleOptions={handleOptions} users={users} />
      )}
      keyExtractor={item => `${item.id}`}
      onEndReached={loadMore}
      onEndReachedThreshold={0.2}
      ListEmptyComponent={<Empty />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f7f7f7'
  }
});

export default Tasks;
