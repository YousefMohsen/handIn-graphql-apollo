import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { graphql, gql } from 'react-apollo'

 class PlayerGenerator extends React.Component {
     constructor(props){
super(props)
this.generateNew = this.generateNew.bind(this);

     }

generateNew(){
    this.props.playerStore.refetch();
    

}

  render() {
    if (this.props.playerStore && this.props.playerStore.loading) {
        return <Text>Loading</Text>
      }
      if (this.props.playerStore && this.props.playerStore.error) {
        return <Text>Error</Text>
      }
    
    
      const player = this.props.playerStore.getRandom;
      
    
        return (
            <View>
        <Text>Name: {player.name}</Text>
        <Text>Shirtnumber: {player.shirt}</Text>
        <Text>Nationality: {player.nationality}</Text>
        <Button onPress={this.generateNew} title={"Refetch"}/>
        </View>
        )
      }
    
}

const PLayerQuery = gql`
query  {
    getRandom {
        name
        shirt
        nationality
        
      }
}
`

export default  graphql(PLayerQuery, { name: 'playerStore' }) (PlayerGenerator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
