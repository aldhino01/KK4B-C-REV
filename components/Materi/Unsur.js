import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Unsur = () => {
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
      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          1. Tema
        </Text>
        <View>
          Tema merupakan ide pokok ataupun sebuah gagasan utama dari sebuah cerita dalam drama.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          2. Alur
        </Text>
        <View>
          Alur, merupakan jalan cerita sebuah pertunjukan drama mulai dari babak awal hingga babak yang terakhir. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          3. Tokoh
        </Text>
        <View>
          Tokoh atau pelaku drama yang dapat terdiri atas tokoh utama dan tokoh pembantu. Masing-masing tokoh mempunyai watak antagonis (jahat) dan watak protagonis (baik).
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          4. Setting
        </Text>
        <View>
          Latar atau setting berupa gambaran tempat, waktu dan tentunya sebuah situasi peristiwa yang ada pada sebuah cerita drama. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          5. Amanat
        </Text>
        <View>
          Amanat drama, berupa sebuah pesan yang disampaikan oleh si pengarang kepada penonton sebuah drama.
        </View>
      </Text>

      </View>
      <View style={{
      height:60, 
      backgroundColor:"#FD8A8A", 
      marginTop:10}}>
    </View>
    </View>
  )
}

export default Unsur;