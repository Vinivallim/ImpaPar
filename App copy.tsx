import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Login from './Condicao/Login'

export default () => (
  <SafeAreaView style={style.App}>
    <Login usuario={{nome:'Paulo', email:'paulo@gmail.com'}}/>
    <Login usuario={{nome:'Pedro', email:'pedro@gmail.com'}}/>
    <Login usuario={{nome:'Maria'}}/>
    <Login usuario={{email:'Marta@gmail.com'}}/>
    <Login usuario={{}}/>
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: { 
      backgroundColor: '#AC9', 
      flexGrow: 1, 
      justifyContent: "center", 
      alignItems: "center",
  } 
})