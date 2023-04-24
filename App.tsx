import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import ImparPar from './src/ImparPar'

export default () => (
  <SafeAreaView style={style.App}>
    <ImparPar num={7}/>
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