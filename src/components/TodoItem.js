import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Checkbox from './Checkbox';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, onRemove, onChecked }) => {
  console.log(`렌더링: ${item.title}`);

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={() => onChecked(item.id)} hitSlop={10}>
        <Checkbox checked={item.done} />
      </Pressable>
      <Text style={[styles.itemTitle, item.done && styles.doneText]}>
        {item.title}
      </Text>
      <Pressable style={styles.icon} onPress={() => onRemove(item.id)}>
        <MaterialIcons name="delete" size={30} color={'red'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: 'auto',
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: '#a3a3a3',
  },
});

export default React.memo(TodoItem);
