import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AnotherScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Pantalla Secundaria</Text>
            <Button 
                title="Regresemos a la pantalla Principal"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
