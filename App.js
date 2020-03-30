import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; // Assim é importada na aplicação inteira

export default function App() {
  return <Routes></Routes>;
}
