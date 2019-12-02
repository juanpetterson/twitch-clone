import React, { useState } from 'react';
import {
  Text, TextInput, ScrollView, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/core';

export default function SignIn() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [usernameFocused, setUsernameFocused] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function navigateToSignIn() {
    navigation.navigate('Home');
  }

  function toggleSecurityEntry() {
    setSecureTextEntry(!secureTextEntry);
  }

  TextInput.defaultProps.selectionColor = 'white';

  const noFocusStyle = [styles.passwordContainer, styles.input, styles.noFocusInput];
  const focusStyle = [styles.passwordContainer, styles.input];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.topText}>Entrar</Text>
        <ScrollView style={styles.formContainer}>
          <Text onPress={navigateToSignIn} style={styles.inputText}>Usuário</Text>
          <TextInput
            style={usernameFocused ? styles.input : [styles.input, styles.noFocusInput]}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            onFocus={() => setUsernameFocused(true)}
            onBlur={() => setUsernameFocused(false)}
            value={username}
            onChangeText={setUsername}
          />
          <Text onPress={navigateToSignIn} style={styles.inputText}>Senha</Text>
          <View style={passwordFocused ? focusStyle : noFocusStyle}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              value={password}
              onChangeText={setPassword}
            />
            <Icon name={secureTextEntry ? 'eye' : 'eye-off'} onPress={toggleSecurityEntry} size={20} color="#282828" />
          </View>
          <Text style={styles.problemsText}>Problemas ao efetuar login?</Text>
          <TouchableOpacity onPress={() => { }} style={username && password ? styles.button : [styles.button, styles.buttonDisabled]}>
            <Text style={username && password ? styles.buttonText : [styles.buttonText, styles.buttonTextDisabled]}>Entrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '80%',
  },
  formContainer: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#9147ff',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 40,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 5,
  },

  passwordInput: {
    paddingHorizontal: 0,
    fontSize: 16,
    color: '#444',
    height: 40,
    flex: 1,
  },

  noFocusInput: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    backgroundColor: '#ddd',
  },

  passwordContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9147ff',
    borderRadius: 3,
    height: 26,
    margin: 5,
  },
  buttonDisabled: {
    backgroundColor: '#ddd',
  },
  problemsText: {
    color: '#9147ff',
    fontSize: 11,
  },
  buttonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#999',
  },
  topText: {
    color: '#282828',
    fontSize: 14,
    marginTop: 15,
    fontWeight: 'bold',
  },
  inputText: {
    color: '#282828',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
