import { FlatList, StyleSheet, View, Text } from 'react-native';
import TodoItem from './TodoItem';

const keyExtractor = (item) => item.id;

function EmptyComponent() {
  return (
    <View>
      <Text style={styles.emptyText}>Todo를 추가해주십사와요.</Text>
    </View>
  );
}

function TodoList({ data, onRemove, onChecked }) {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      style={styles.container}
      contentContainerStyle={data.length === 0 ? styles.emptyContent : null}
      ListEmptyComponent={EmptyComponent}
      renderItem={({ item }) => (
        <TodoItem item={item} onRemove={onRemove} onChecked={onChecked} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  emptyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#A3A3A3',
    fontSize: 18,
  },
});

export default TodoList;
