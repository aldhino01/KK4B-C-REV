import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, Image, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from "./Custom/custombutton";
import { InputCustom } from "./Textinput/Textinput";
import axios from 'axios';
import Home from './Home'


const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "#FD8A8A", flex: 1, justifyContent: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={require('../assets/logo1.png')}
        />
      </View>
      <View style={{ padding: 21 }}>
        <View
          style={{
            width: "100%",
            borderRadius: 12,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 14,
            paddingVertical: 10,
          }}
        >
          <TextInput
            placeholder="Username"
            style={{width: "100%"}}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            borderRadius: 12,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 14,
            paddingVertical: 10,
          }}
        >
          <TextInput placeholder="Password" secureTextEntry={true} style={{ flex: 1 }} />
        </View>
      </View>

      <View style={{ padding: 21 }}>
        <View style={{}}>
          <ButtonCustom
            backgroundColor= {"#815555"}
            padding = {12}
            borderRadius= {15}
            minWidth={120}
            text={"Login"}
            fontSize={14}
            handlePress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={{ marginTop: 15, marginBottom: -90 , alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>
            Belum punya akun?{" "}
            <Text
              style={{ fontWeight: "bold", color: "" }}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;