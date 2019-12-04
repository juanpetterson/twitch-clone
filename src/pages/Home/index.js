import React from 'react';
import {
  Text, SafeAreaView, View, StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';

export default function Home() {
  const navigation = useNavigation();

  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Boas-vindas à</Text>
        <Text style={[styles.title, styles.titleMargin]}>Twitch</Text>
        <Button onPress={navigateToSignIn} buttonText="Entrar" />
        <Button buttonText="Cadastrar-se" textColor="#282828" disabled />
        <Text style={styles.ignoreText}>Ignorar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Montserrat-SemiBold',
  },
  titleMargin: {
    marginBottom: 20,
  },
  ignoreText: {
    color: '#9147ff',
    fontSize: 11,
    marginTop: 30,
    fontFamily: 'Montserrat-SemiBold',
  },
});
