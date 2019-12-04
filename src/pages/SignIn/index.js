import React, { useState } from 'react';
import {
  Text, TextInput, ScrollView, View, SafeAreaView, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';

export default function SignIn() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [usernameFocused, setUsernameFocused] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function navigateToDashboard() {
    navigation.navigate('Dashboard');
  }

  function toggleSecurityEntry() {
    setSecureTextEntry(!secureTextEntry);
  }

  function handleUsernameFocus() {
    setUsernameFocused(true);
    setPasswordFocused(false);
  }

  function handlePasswordFocus() {
    setUsernameFocused(false);
    setPasswordFocused(true);
  }

  const noFocusStyle = [styles.passwordContainer, styles.input, styles.noFocusInput];
  const focusStyle = [styles.passwordContainer, styles.input];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.topText}>Entrar</Text>
        <ScrollView style={styles.formContainer}>
          <Text style={styles.inputText}>Usuário</Text>
          <TextInput
            style={usernameFocused ? styles.input : [styles.input, styles.noFocusInput]}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            onFocus={handleUsernameFocus}
            value={username}
            onChangeText={setUsername}
            selectionColor="#9046ff"
          />
          <Text style={styles.inputText}>Senha</Text>
          <View style={passwordFocused ? focusStyle : noFocusStyle}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              onFocus={handlePasswordFocus}
              value={password}
              onChangeText={setPassword}
              selectionColor="#9046ff"
            />
            <Icon name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'} onPress={toggleSecurityEntry} size={20} color="#616161" />
          </View>
          <Text style={styles.problemsText}>Problemas ao efetuar login?</Text>
          <Button buttonText="Entrar" disabled={!(username && password)} onPress={navigateToDashboard} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    width: '80%',
  },
  formContainer: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#9046ff',
    paddingHorizontal: 10,
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
    borderColor: '#ededed',
    backgroundColor: '#ededed',
  },

  passwordContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  problemsText: {
    color: '#9046ff',
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
  },

  topText: {
    color: '#282828',
    fontSize: 14,
    marginTop: 15,
    fontFamily: 'Montserrat-SemiBold',
  },

  inputText: {
    color: '#282828',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});
