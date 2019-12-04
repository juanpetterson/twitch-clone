import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button(props) {
  const {
    buttonText, onPress, disabled, textColor,
  } = props;
  return (
    <TouchableOpacity
      style={disabled ? [styles.button, styles.disabledButton] : styles.button}
      onPress={onPress}
    >
      <Text
        style={disabled ? [styles.buttonText, { color: textColor }] : styles.buttonText}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  textColor: '#a5a5a5',
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9147ff',
    borderRadius: 5,
    height: 32,
    marginTop: 10,
    width: '100%',
  },

  disabledButton: {
    backgroundColor: '#ededed',
  },

  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },

  signUpButtonText: {
    color: '#282828',
  },
});
