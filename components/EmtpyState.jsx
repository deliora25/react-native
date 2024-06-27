import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
const EmtpyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="h-[215px] w-[270px]"
      />
    </View>
  );
};

export default EmtpyState;
