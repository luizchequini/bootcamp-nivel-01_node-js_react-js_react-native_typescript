import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

//Não possui valor semântico (significado)
//Não possui estilização própria
//Todos compl=onente possuem "display: flex"

//View: div, footer, header, main, aside, section ...
//Text: p, span, h1, h2, h3 não tem valor semântico

/**
 * Instalações
 * 
 * yarn add axios
 */

export default function App(){
    return (
        
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            <View style={styles.container}>
                <Text style={styles.title}>Luiz Chequini - Full Stack</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#7159c1',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
});