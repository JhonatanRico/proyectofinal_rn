import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>Iinstituto Tecnologico de Tijuana</Text>
             <Text>Desarrollo de Aplicaciones Moviles</Text>
              <Text>9 de diciembre del 2021</Text>
              
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
