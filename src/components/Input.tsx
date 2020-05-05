import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const Input = ({label, onChange}: {label: string; onChange: () => void}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputWrapper}>
      <TextInput style={styles.inputTextInput} onChange={onChange} />
    </View>
  </>
);

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#B1B9CC',
    fontSize: 22,
  },
  inputTextInput: {
    margin: 10,
  },
});

export default Input;
