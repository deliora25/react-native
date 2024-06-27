import React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({
  title,
  customClass,
  handlePress,
  isLoading,
  icon = "",
  textColor = "",
  mode = "contained",
}) => {
  return (
    <Button
      icon={icon}
      mode={mode}
      onPress={handlePress}
      className={customClass}
      loading={isLoading}
      disabled={isLoading}
      textColor={textColor}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
