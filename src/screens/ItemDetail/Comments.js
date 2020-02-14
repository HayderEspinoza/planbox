import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Empty from '../../components/Empty';
import Comment from '../Comment';

const Comments = ({
  comments: { data, users },
  loading,
  handleOption,
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
        <Comment {...item} handleOption={handleOption} users={users} />
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

export default Comments;
