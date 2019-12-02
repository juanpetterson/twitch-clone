import React from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';

// import { Container } from './styles';

export default function Following({ navigation }) {
  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boas-vindas à</Text>
      <Text style={[styles.title, styles.titleMargin]}>Twitch</Text>
      <TouchableOpacity style={styles.button} title="navigate to Home" onPress={() => { }}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signUpButton]} title="navigate to Home" onPress={navigateToSignIn}>
        <Text style={[styles.buttonText, styles.signUpButtonText]}>Cadastrar-se</Text>
      </TouchableOpacity>
      <Text style={styles.ignoreText}>Ignorar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  titleMargin: {
    marginBottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9147ff',
    borderRadius: 3,
    height: 26,
    width: '80%',
    margin: 5,
  },
  signUpButton: {
    backgroundColor: '#ddd',
    color: '#282828',
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  signUpButtonText: {
    color: '#282828',
  },
  ignoreText: {
    color: '#9147ff',
    fontSize: 10,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
