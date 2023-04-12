import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from '../Custom/custombutton';
import { InputCustom } from '../Textinput/Textinput';
import axios from 'axios';

const Pengertian = () => {
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
        <Text style={{
          fontWeight:"bold"}}>
          Seni drama  
        </Text>
        merupakan jenis kesenian pertunjukan drama yang dipentaskan di atas panggung. Secara spesifik, seni teater  yang menampilkan perilaku manusia dengan gerak, tari, dan nyanyian yang disajikan lengkap dengan dialog dan akting. Berikut ini rangkuman tentang pengertian seni teater menurut ahli:
      </Text>
      <Text style={{
        padding:5}}>
        <Text style={{
          fontWeight:"bold"}}>
          1.Balthazar Vallhagen 
        </Text>
        <View>
          Merupakan seni  yang melukiskan mengenai sifat serta watak manusia dengan melalui gerakan.
        </View>
      </Text>

      <Text style={{
        padding:5}}>
        <Text style={{
          fontWeight:"bold"}}>
          2.Moulton
        </Text>
        <View>
          Merupakan suatu kisah hidup yang digambarkan atau diilustrasikan di dalam bentuk gerakan atau disebut dengan life presented in action.
          </View>
      </Text>

      <Text style={{
        padding:5}}>
        <Text style={{
          fontWeight:"bold"}}>
          3. Anne Civardi
        </Text>
        <View>
          Merupakan suatu seni drama yang menceritakan mengenai sebuah kisah dengan melalui kata-kata serta gerakan.
        </View> 
      </Text>

      <Text style={{
        padding:5}}>
        <Text style={{
          fontWeight:"bold"}}>
          4. R.M.A. Harymawan
        </Text>
        <View>
          Mengacu kepada aktivitas melakukan kegiatan dalam seni pertunjukan (to act), sehingga tindak-tanduk pemain di atas pentas disebut acting. Istilah acting diambil dari kata Yunani “dran” yang berarti berbuat, berlaku, atau beraksi. Dikarenakan aktivitas beraksi ini, para pemain pria dalam teater disebut actor dan pemain wanita disebut actress.
        </View>
      </Text>
      
      <Text style={{
        padding:5}}>
        <Text 
        style={{fontWeight:"bold"}}>
          5. Seni Handayani dan Wildan
        </Text>
        <View>
          Merupakan suatu bentuk karangan yang berpijak di dua cabang kesenian, yaitu seni sastra serta seni pentas.
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

export default Pengertian;