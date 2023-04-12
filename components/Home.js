import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from './Custom/custombutton';
import { InputCustom } from './Textinput/Textinput';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View 
      style={{ backgroundColor:"white", justifyContent: "center" }}>
      <View style={{height:60, backgroundColor:"#FD8A8A"}}>
        <View style={{}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Pengertian Seni Drama"}
              fontSize={14}
              marginTop={80}
              handlePress={() => navigation.navigate('Pengertian')}
            />
        </View>

        <View style={{}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Jenis-jenis Seni Drama"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Jenis')}
            />
        </View>

        <View style={{}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Contoh Seni Drama"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Contoh')}
            />
        </View>

        <View style={{}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Sejarah Seni Drama"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Sejarah')}
            />
        </View>

        <View style={{}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Fungsi Seni Drama"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Fungsi')}
            />
        </View>

        <View style={{}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Unsur Seni Drama"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Unsur')}
            />
        </View>

        <View style={{marginTop:10}}>
            <ButtonCustom
              backgroundColor= {"#815555"}
              padding = {12}
              borderRadius= {15}
              minWidth={120}
              text={"Quiz"}
              fontSize={14}
              marginTop={30}
              handlePress={() => navigation.navigate('Quiz')}
            />
        </View>

      </View>
      <View style={{height:60, backgroundColor:"#FD8A8A", marginTop:530}}>
        
      </View>
      <View>
      </View>
        
    </View>
  )
}

export default Home;