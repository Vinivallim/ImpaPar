import React from 'react'
import { Text } from 'react-native'
import estilo from '../src/estilo'
import SE from './SE'

export default ({ usuario = {} }) => {
    return (
        <>
            <SE teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.FontGrande}>Usuário Logado: </Text>
                <Text style={estilo.FontGrande}>{usuario.nome} - {usuario.email}</Text>
            </SE>
        </>
    )
}