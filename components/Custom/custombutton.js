import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

export const ButtonCustom = ({text, minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: fontSize,
          color: "#fff",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};