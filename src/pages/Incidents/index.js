import React, { useState, useEffect } from 'react'; // USeEffect -> Sempre para carregar algo

import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import logo from '../../../assets/logo.png'; // Já importa no melhor formato
import styles from './style';

// É utilizado para linkar activities criadas, necessário instanciar
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import api from '../../services/service';
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
 *  JSX. Na função ela retorna um objeto, onde o dado esta dentro de variável como 'item', para utiliza-lo, pode renomea-lo
 *  onEndReached => Passa uma função que será executada automaticamente quando o usuário chegar no final da lista
 *  onEntReachedThreshold=> Passa uma porcentagem (entre 0 e 1) que indica quanto da lista o usuário precisa visualizar para atualizar a lista (chamar a função onEndReached)
 * para ele ir carregando dados enquanto o usuário dá o scroll
 *
 *
 *
 *  Passando a propriedade showsVerticalScrollIndicator conseguimos retirar a barra ao lado de scroll
 */

export default function Incident() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) return;
    if (totalCount > 0 && incidents == 0) return;
    setLoading(true);
    //let response = await api.get(`incident`,{
    //  params: {page}
    //});
    //let header = response.headers['x-total-count'];
    //setTotalCount(header);
    //setIncidents([...incidents,...response.data]); // forma de ligar dois vetores
    setIncidents([
      {
        id: 3,
        title: 'Ajuda de custo',
        value: 12,
        ong_id: '2394dd76',
        description: 'Lorem ipsulum',
        name: 'Atados',
        email: 'contato@email.com.br',
        whatsapp: '5511911111111',
        uf: 'SP'
      }
    ]);
    setTotalCount(1);
    setPage(page + 1);
    setLoading(false);
  }

  function toDetails(incident) {
    navigation.navigate('Details', { incident }); // Same name defined on the routes
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}></Image>
        <Text style={styles.headerText}>
          Total de{' '}
          <Text style={styles.headerTextBold}>{totalCount} casos.</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents} // método que carrega mais elementos
        onEndReachedThreshold={0.2} // Quando faltar 20 da lista, começa a rodar o método que carrega mais elementos
        renderItem={(
          { item: incident } // Renomeando propriedade descontruída para incidente
        ) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => toDetails(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={23} color='#E02041'></Feather>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
