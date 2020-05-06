import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

const Input = ({
  label,
  onChange,
  autoFocus = false,
}: {
  label: string;
  onChange: () => void;
  autoFocus?: boolean;
}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputWrapper}>
      <TextInput
        autoFocus={autoFocus}
        style={styles.inputTextInput}
        onChange={onChange}
      />
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
    padding: 0,
  },
});

export default Input;
