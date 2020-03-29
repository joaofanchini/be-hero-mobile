import React from 'react';

import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import logo from '../../../assets/logo.png'; // Já importa no melhor formato
import styles from './style';

// É utilizado para linkar activities criadas, necessário instanciar
import { useNavigation } from '@react-navigation/native';

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

/**
 * Para listar algo, devemos utilizar o elemento FlatList quando queremos listar itens,
 * "o que permite o efeito de scroll"
 *
 * O FlatList consiste em ser um elemento de chaves único que através de alguns atributos realiza
 * a listagem de elementos:
 *  data => Consiste em ser o array de elementos que irá receber
 *  keyExtractor => Consiste em ser qual propriedade que indica a unicidade entre os elementos,
 *  recebe como elemento uam String, como a chave de teste pode ser um número, você pode executar uma função tratamento o parâmetro para uma string
 *  style => Função de estilo
 *  renderItem => O que será renderizado por cada elemento da lista (lembrando que quando
 *  passamos entre parenteses, estamos retornando um JSX.) que recebe uma função que retorna
 * JSX.
 *
 *  Passando a propriedade showsVerticalScrollIndicator conseguimos retirar a barra ao lado de scroll
 */

export default function Incident() {
  const navigation = useNavigation();

  function toDetails() {
    navigation.navigate('Details'); // Same name defined on the routes
  }

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

      <FlatList
        data={[1, 2, 3]}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident)}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
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
        )}
      />
    </View>
  );
}
