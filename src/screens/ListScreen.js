import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';
import FloatingButton from '../components/FloatingButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@todo_list';

function ListScreen({ navigation }) {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addItem = (text) => {
    const newItem = {
      id: Date.now().toString(),
      title: text,
      done: false,
    };

    setTodo([...todo, newItem]);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: 'red',
      headerBackTitle: '뒤로!',
    });
  });

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue !== null) {
          setTodo(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log('error');
      } finally {
        setIsLoading(true);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    if (isLoading) {
      const saveTodos = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todo)); // 배열을 문자열로 변환
        } catch (e) {
          console.error('저장 에러:', e);
        }
      };
      saveTodos();
    }
  }, [todo, isLoading]);

  const deleteItem = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <TodoList data={todo} onRemove={deleteItem} onChecked={toggleItem} />
      <FloatingButton onInsert={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ListScreen;
