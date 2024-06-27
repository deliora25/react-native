import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  handleChangeText,
  value,
  customClass,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-blue-500 items-center flex-row">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={value}
        placeholder="Search"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
