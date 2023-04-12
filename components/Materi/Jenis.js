import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Jenis = () => {
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
          1. Tragedi
        </Text>
        <View>
          Tragedi merupakan satu di antara jenis drama yang berisi cerita penuh kesedihan. Sepanjang jalannya cerita, kita akan menyaksikan tokoh atau pelaku utama akan mengalami kegagalan yang biasanya berujung dengan duka atau kematian.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          2. Komedi
        </Text>
        <View>
          Komedi merupakan jenis drama yang menggambarkan suasana suka cita yang biasanya berisi lelucon. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          3. Opera
        </Text>
        <View>
          Opera adalah drama yang dialognya diiringi dengan musik. Adapun lagu yang dinyanyikan pemain satu biasanya berbeda dengan pemain lain. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          4. Melodrama
        </Text>
        <View>
          Melodrama merupakan jenis drama yang dialognya diucapkan dengan iringan melodi atau musik. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          5. Farce
        </Text>
        <View>
          Farce bisa disebut juga sebagai dagelan. Naskah drama jenis inu adalah jenis drama yang lucu dan ringan. Adegan-adegan yang ada di dalam naskah drama ini umumnya dibuat berlebihan dengan komedinya. 
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          6. Tablo
        </Text>
        <View>
          Naskah drama tablo yang akan dipentaskan akan mengutamakan sebuah penampilan. Penampilan seperti aspek tarian dan aspek gerak akan dilihatkan pada pementasan naskah drama tablo.
        </View>
      </Text>

      <Text style={{padding:5}}>
        <Text style={{fontWeight:"bold"}}>
          7. Sendratari
        </Text>
        <View>
          Sendratari adalah jenis naskah drama yang akan menggabungkan dua hal. Dua hal tersebut adalah seni tari dan seni drama. Sendratari ini akan mengutamakan gerak-gerak yang dilakukan sebagai penguat ekspresi.
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

export default Jenis;