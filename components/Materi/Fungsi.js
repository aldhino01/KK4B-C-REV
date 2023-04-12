import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Fungsi = () => {
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
        Ada beberapa fungsi seni drama, diantaranya :
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          1. Drama sebagai sarana upacara 
        </Text>
        <View>
          Awalnya, drama hadir sebagai sarana upacara persembahan Dewa Dyonesos dan pesta untuk Dewa Apollo. Drama sebagai sarana upacara tidak membutuhkan penonton, karena penonton adalah bagian dari peserta upacara.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          2. Drama sebagai media ekspresi
        </Text>
        <View> 
          Drama memiliki fokus utama pada laku dan dialog. Seniman drama akan menunjukkan seninya dalam bentuk gerak tubuh dan ucapan.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          3. Drama sebagai media hiburan
        </Text>
        <View>
          Drama dipersiapkan secara maksimal sebelum pementasan dengan harapan agar penonton dapat terhibur. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          4. Drama sebagai media pendidikan
        </Text>
        <View>
          Drama tidak dikerjakan secara mandiri, tetapi diperlukan kerja tim. Melalui sebuah pertunjukan, manusia lebih mudah mengambil nilai baik buruk kehidupan dibandingkan hanya membaca cerita. 
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

export default Fungsi;