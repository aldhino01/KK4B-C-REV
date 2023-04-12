import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Quiz = () => {
  const navigation = useNavigation();
  return ( 
    <View style={{
      backgroundColor:"white", 
      justifyContent: "center"}}>
    <View style={{
      height:200, 
      backgroundColor:"#AB7474", 
      marginBottom:1,
      borderRadius:10}}>
        <View style={{
          backgroundColor:"#815555", 
          borderRadius:12, 
          padding:40,
          marginTop:40,
          opacity:1}}>
            <Text style={{
              textAlign: "center", 
              color: "white", 
              fontWeight: "bold", 
              fontSize: 15}}> 
                Apa itu seni drama?    
            </Text>
        </View>  
    </View>

    <View style={{
      backgroundColor:"white", 
      borderRadius:12, 
      padding:10}}>
      <View style={{marginTop:5}}>
            <ButtonCustom
              backgroundColor= {"#FD8A8A"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"A. Seni drama merupakan seni yang banyak drama"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Quiz1Ans')}
            />
        </View>

        <View style={{marginTop:5}}>
            <ButtonCustom
              backgroundColor= {"#FD8A8A"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"B. Seni drama merupakan gabungan antar beberapa seni yang lain"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Quiz1Ans')}
            />
        </View>

        <View style={{marginTop:5}}>
            <ButtonCustom
              backgroundColor= {"#FD8A8A"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"C. Seni drama  merupakan jenis kesenian pertunjukan drama yang dipentaskan di atas panggung."}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Quiz1Ans')}
            />
        </View>

        <View style={{marginTop:5}}>
            <ButtonCustom
              backgroundColor= {"#FD8A8A"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"D. Seni drama  merupakan jenis seni yang berisikan banyak pemain"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Quiz1Ans')}
            />
        </View>

      </View>

      <View style={{
      height:100, 
      backgroundColor:"#AB7474", 
      marginBottom:10,
      borderRadius:10}}>
        <View style={{
      height:50, 
      backgroundColor:"#FD8A8A", 
      marginBottom:10,
      borderRadius:10}}>
        </View>  
        </View>  
    </View>
  )
}

export default Quiz;