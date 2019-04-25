import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const Main = ({ navigation }) => {
  const [name, setName] = useState('');

  const onChangeText = (newText) => {
    setName(newText)
  };

  const onPress = () => {
    navigation.navigate('Chat', { name });
  };

  return (
    <View>
      <Text style={styles.title}>Enter your name:</Text>
      <TextInput
        onChangeText={onChangeText}
        style={styles.nameInput}
        placeHolder="BAC 75 N"
        value={name}
      />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});
export default Main;