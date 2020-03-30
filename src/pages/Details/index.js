import React from 'react';
// Linking é utilizado para fazer deepLink no celular (chamar url de app)
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
//UseRoute pega informações da página passada
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './style';
import logo from '../../../assets/logo.png'; // Já importa no melhor formato

/**
 * O onPress() é obrigatório quando usamos o TouchableOpactity
 */

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato para ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(incident.value)}`;
  function toBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso:${incident.title}`,
      recipients: [incident.email],
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
        <Text>
          {incident.name} de {incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text>
          {' '}
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(incident.value)}
        </Text>
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
                `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
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
