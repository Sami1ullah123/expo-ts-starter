import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TextStyle,
  KeyboardType,
} from "react-native";
import IconButton from "./IconButton";

interface InputProps extends TextInputProps {
  type: "text" | "email" | "password";
  width?: number;
}

const Input: React.FC<InputProps> = ({ type, width, ...props }) => {
  const { colors } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const defaultStyles: TextStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    padding: 5,
    width: width ? `${width}%` : "70%",
  };

  const togglePasswordVisible = () => setPasswordVisible((prev) => !prev);

  const keyboardType: KeyboardType = type === "email" ? "email-address" : "default"

  return (
    <View style={defaultStyles}>
      <TextInput
        secureTextEntry={type === "password" && !passwordVisible}
        placeholderTextColor={colors.border}
        cursorColor={colors.text}
        keyboardType={keyboardType}
        style={{ flex: 1, color: colors.text }}
        {...props}
      />
      {type === "password" && (
        <IconButton
          iconName={passwordVisible ? "eye-with-line": "eye"}
          onPress={togglePasswordVisible}
        />
      )}
    </View>
  );
};

export default Input;
