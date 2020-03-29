import React from 'react';
// Linking é utilizado para fazer deepLink no celular (chamar url de app)
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './style';
import logo from '../../../assets/logo.png'; // Já importa no melhor formato

/**
 * O onPress() é obrigatório quando usamos o TouchableOpactity
 */

export default function Details() {
  const navigation = useNavigation();
  const message =
    'Olá {ongName}, estou entrando em contato paar ajudar no case {incident} com o valor de {value}';
  function toBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['ondeseraenviado@gmail.com'],
      body: message
    });
  }

  function sendWhats() {}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}></Image>
        <TouchableOpacity onPress={toBack}>
          <Feather name='arrow-left' size={28} color='#E02041' />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text>R$ 120,00</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={() => {
              Linking.openURL(
                `whatsapp://send?phone=5511981008626&text=${message}`
              );
            }}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
