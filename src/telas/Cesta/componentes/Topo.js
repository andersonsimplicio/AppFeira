import React from "react";
import { Image, StyleSheet,Dimensions} from 'react-native';
import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';
const width = Dimensions.get('screen').width;


export default function Topo({titulo}){
    return <>
         <Image  source={topo} style={estilo.topo}  />
         <Texto style={estilo.titulo}> {titulo}</Texto>
    </>
}


const estilo = StyleSheet.create(
    {
        topo:{
            width:'100%',
            height:578/768 * width,
        },
        titulo:{
            width:'100%',
            position:'absolute',
            textAlign:'center',
            fontSize:24,
            lineHeight:26,
            color:'white',
            fontWeight:'bold',
            padding:16,
        },
    }
)