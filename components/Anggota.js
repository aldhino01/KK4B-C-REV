import React from "react";
import { Text, View, ScrollView, Image, Button, TextInput } from "react-native";

const Anggota = (props) => {
  return(
    <View style={{backgroundColor: props.color}}>
      <Text>Name: {props.nama}</Text>
      <Text>Umur: {props.umur}</Text>
      <Text>JK: {props.jk}</Text>
    </View>
  );
}

export default Anggota;