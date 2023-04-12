import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Contoh = () => {
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
        Beberapa contoh seni drama yang ada di Indonesia di antara lain :
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          1. Ludruk
        </Text>
        <View>
          Ludruk merupakan seni pementasan yang digelar pada moment-moment penting seperti acara syukuran pemerintahan, kemerdekaan, dan juga acara pernikahan tradisional.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          2. Lenong
        </Text>
        <View>
          Lenong sendiri seni teater yang sering di ditayangkan di saluran televisi nasional pada era 90an.
Seni teater lenong dibagi menjadi dua genre yakini lenong preman dan lenong denes dan di bawakan dalam Bahasa Betawi.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          3.  Wayang
        </Text>
        <View>
          Kesenian ini terbagi menjadi beberapa tipe yakini wayang kulit, wayang golek dan wayang orang.
Wayang merupakan kesenian yang banyak ditemukan di Jawa Tengah dan Jawa Barat. Jika Jawa Tengah menggunakan wayang kulit, maka Jawa Barat menggunakan wayang golek dalam pementasannya.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          4. Ketoprak
        </Text>
        <View>
          Kesenian ini umumnya mengangkat kisah-kisah kehidupan kerajaan dengan salah satu pemerannya didapuk menjadi perwakilan suara rakyat.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          5. Reog Ponorogo
        </Text>
        <View>
          Reog Ponorogo adalah kesenian yang sangat populer di Indonesia, kesenian yang satu ini merupakan pertunjukan sakral yang mengandung unsur supranatural.
Reog di simbolkan sebagai sosok singa dengan bulu merak di area wajahnya. Dikisahkan bahwa pertunjukan ini adalah hadiah untuk putri raja yang akan dipinang oleh seorang pangeran.
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

export default Contoh;