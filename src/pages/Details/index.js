import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import logo from '../../../assets/logo.png'; // Já importa no melhor formato

/**
 * O onPress() é obrigatório quando usamos o TouchableOpactity
 */

export default function Details() {
  const navigation = useNavigation();
  function toBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}></Image>
        <TouchableOpacity onPress={toOther}>
          <Feather name='arrow-left' size={28} color='#E02041' />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentProperty}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentProperty}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentProperty}>R$ 120,00</Text>
        <TouchableOpacity style={styles.detailsButton} onPress={toDetails}>
          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name='arrow-right' size={23} color='#E02041'></Feather>
        </TouchableOpacity>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
