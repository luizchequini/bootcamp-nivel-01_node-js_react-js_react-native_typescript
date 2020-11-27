import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import api from './services/api'

export default function App(){
    
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);


    return(
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
            <View style={style.container}>
                {projects.map(project => <Text style={style.title} key={project.id} >{project.title}</Text>)}
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#7159c1',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'#fff',
        fontSize:20
    },
});