import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import logo from '../../../assets/logo.png'; // Já importa no melhor formato
import styles from './style';

import { Feather } from '@expo/vector-icons';

/**
 * Temos diferentes imagens de logos pois dentro do mobile temos densidades de pixels diferentes,
 * o que faz com que ao descrevermos '@2x' faz com que ele ja identifica as diferentes
 * denisades dinamicamente, da mesma imagem, de acordo com o smartphone
 */

/**
 * No React até existe um elemento Button, porém ele já vem estilizado.
 * Para deixar de modo mais livre de estilização, você pode utilizar o TouchableOpacity,
 * elemento este que deixa qualquer área indicada como 'clicavel' e após o click tem
 * um efeito de opacidade no local.
 */

export default function Incident() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}></Image>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <View style={styles.incidentsList}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentProperty}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentProperty}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentProperty}>R$ 120,00</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name='arrow-right' size={23} color='#E02041'></Feather>
          </TouchableOpacity>
        </View>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentProperty}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentProperty}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentProperty}>R$ 120,00</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name='arrow-right' size={23} color='#E02041'></Feather>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
