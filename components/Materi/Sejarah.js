import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Sejarah = () => {
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
      <Text>
        <Text style={{fontWeight:"bold"}}>
         Drama 
        </Text> 
        sebagai salah satu bentuk pagelaran seni dan pertunjukan, tentunya sudah ada sejak jaman dulu sejak jaman nenek moyang kita. Dari jaman dulu sudah banyak orang yang bermain peran dalam drama. Bukti tertulis yang dapat dipertanggungjawabkan dalam mengungkap hal ini adalah bahwa drama sudah banyak dipentaskan dan populer sejak abad ke-5 sebelum masehi.
      <View style={{marginTop:5}}>
Sejarah drama ini didukung dengan adanya penemuan naskah drama kuno dari bangsa Yunani yang ditulis oleh Aeschylus, seorang tokoh yang hidup pada tahun 524 hingga 456 sebelum masehi. Dalam drama yang ditulisnya, terdapat lakon yang digunakan sebagai persembahan untuk dewa dewa.
Sejarah kelahiran drama juga dikenal di Indonesia sebagaimana kelahiran drama di Yunani. Di Indonesia, drama diawali dengan adanya upacara keagamaan yang diadakan oleh para pemuka agama. Pada intinya, para pemuka ini akan mengucapkan sebuah mantra dan juga semacam doa sembari mempertunjukkan suatu karya sastra kepada khalayak ramai.
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

export default Sejarah;