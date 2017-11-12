import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerGenerator from './PlayerGenerator'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://08825d1d.ngrok.io/graphql'
});

const client = new ApolloClient({
  networkInterface
});



export default class App extends React.Component {
 
 
 
  render() {

    return (
      <ApolloProvider client={client} > 
      <View style={styles.container}>
      <PlayerGenerator />
      </View>
    </ApolloProvider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
