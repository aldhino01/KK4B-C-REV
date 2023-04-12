import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from './Custom/custombutton';
import { InputCustom } from './Textinput/Textinput';
import axios from 'axios';

const Quiz = () => {
  const navigation = useNavigation();
  return ( 
    <View style={{
      backgroundColor:"white", 
      justifyContent: "center"}}>
    <View style={{
      height:60, 
      backgroundColor:"#FD8A8A", 
      marginBottom:10}}>
    </View>
    <View style={{
      backgroundColor:"#F0EEED", 
      borderRadius:12, 
      padding:10}}>
      <View style={{marginTop:10}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Mulai Quiz"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Quiz1')}
            />
        </View>

      </View>
      <View style={{
      height:60, 
      backgroundColor:"#FD8A8A", 
      marginTop:10}}>
    </View>
    </View>
  )
}

export default Quiz;