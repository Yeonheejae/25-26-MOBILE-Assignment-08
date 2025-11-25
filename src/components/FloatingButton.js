import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  TextInput,
  Platform,
  Keyboard,
} from 'react-native';
import { useRef, useState, useEffect } from 'react';

const BOTTOM = 35;

function FloatingButton({ onInsert }) {
  const buttonRotation = useRef(new Animated.Value(0)).current;
  const inputAnimation = useRef(new Animated.Value(0)).current;

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);

  useEffect(() => {
    const showEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const onShow = Keyboard.addListener(showEvent, (e) => {
      setKeyboardHeight(e.endCoordinates.height + BOTTOM);
    });

    const onHide = Keyboard.addListener(hideEvent, () => {
      setKeyboardHeight(BOTTOM);
    });

    return () => {
      onShow.remove();
      onHide.remove();
    };
  }, []);

  const handlePress = () => {
    if (isOpen && text.trim().length > 0) {
      onInsert(text);
      setText('');
      FabValue();
      return;
    }
    FabValue();
  };

  const FabValue = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.parallel([
      Animated.spring(buttonRotation, {
        toValue,
        useNativeDriver: false,
      }),
      Animated.timing(inputAnimation, {
        toValue,
        useNativeDriver: false,
        duration: 300,
      }),
    ]).start();
    setIsOpen(!isOpen);
  };

  const spring = buttonRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '315deg'],
  });

  const timing = inputAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '85%'],
  });

  return (
    <View style={[styles.container, { bottom: keyboardHeight }]}>
      <Animated.View style={[styles.fabinputContainer, { width: timing }]}>
        <TextInput
          style={styles.fabinput}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handlePress}
        />
      </Animated.View>
      <Animated.View style={{ transform: [{ rotate: spring }] }}>
        <Pressable style={styles.fab} onPress={handlePress}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  fabinputContainer: {
    overflow: 'hidden',
    marginRight: -30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  fabinput: {
    backgroundColor: 'blue',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: 60,
    width: '100%',
    fontSize: 15,
    color: 'white',
    paddingLeft: 15,
  },
});

export default FloatingButton;
