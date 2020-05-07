import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';

const PrimaryButton = ({
  label,
  onPress,
  style,
  inverse,
}: {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  inverse?: boolean;
}) => (
  <TouchableOpacity
    style={[
      inverse ? styles.buttonInverse : styles.button,
      styles.buttonCommon,
      style,
    ]}
    onPress={onPress}>
    <Text style={inverse ? styles.buttonTextInverse : styles.buttonText}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonCommon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#232F6B',
  },
  buttonInverse: {
    backgroundColor: '#fff',
    borderColor: '#232F6B',
  },
  buttonText: {fontSize: 16, color: '#fff'},
  buttonTextInverse: {fontSize: 16, color: '#232F6B'},
});

export default PrimaryButton;
