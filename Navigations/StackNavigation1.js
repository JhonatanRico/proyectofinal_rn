import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetalisScreen';
import AnotherScreen from '../Screens/AnotherScreen';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:true, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                options={({route})=>({ title: route.params.nombre})}
            />

            <Stack.Screen name="AnotherScreen" component={AnotherScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'black',
                        borderBottomColor:'red',
                        borderBottomWidth:3
                    },
                    headerTitleStyle:{
                        color:'white',
                        textAlign:'center'
                    }
                    
                    
                }}
            />

        </Stack.Navigator>

    )
}