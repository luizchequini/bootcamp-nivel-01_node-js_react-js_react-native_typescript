import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api'

/**
 * adb reverse tcp:3333 tcp:3333
 */

export default function App(){
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      api.get('projects').then(response => {
        setProjects(response.data);
      });
    }, []);


    async function handlerAddProject(){
        const response = await api.post('projects', {
            title: `Projeto ${Date.now()}`,
            owner: 'Luiz Chequini'
        });

        const project = projects.data;

        setProjects([...projects, project]);
    }

    return(
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.title}>{project.title}</Text>
                    )}
                    />
                
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={handlerAddProject}>
                    <Text style={styles.buttonTexto}>Adicionar Projeto</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#7159c1'
    },
    title:{
        color:'#fff',
        fontSize:20
    },
    button:{
        backgroundColor:'#fff',
        margin: 20,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTexto:{
        fontWeight:'bold',
        fontSize:16
    }
});