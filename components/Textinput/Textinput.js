import React from "react";
import {TextInput, View } from "react-native";

export const InputText = ({
  text,
  password,
  onChangeText,
  value,
  ...props
}) => {
  return (
    <View style={{ ...props }}>
      <TextInput
        placeholder={text}
        secureTextEntry={password}
        onChangeText={onChangeText}
        value={value}
        style={{ width: props.width }}
      />
    </View>
  );
};