import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Texto from '../../../componentes/Texto';



export default function Botao({children}){

    return  <TouchableOpacity style = {estilos.botao} onPress={()=>{}}>
                    <Texto style = {estilos.TextoBotao}> {children} </Texto>
            </TouchableOpacity>

}

const estilos = StyleSheet.create({
    botao:{
        marginTop:18,
        backgroundColor:'#2A9F85',
        paddingVertical:18,
        borderRadius:6,
    },
    TextoBotao:{
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:18,
        lineHeight:18,
        fontWeight:'bold',
    },
})