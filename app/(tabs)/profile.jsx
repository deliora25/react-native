import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useGlobalContext } from "../../hooks";
import { signOut } from "../../lib/appwrite";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "red",
  },
});

const Profile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const onLogoutClick = async () => {
    setIsSubmitting(true);

    try {
      await signOut();
      setUser(null);
      setIsLoggedIn(false);
      Alert.alert("Success", "Logged out successfully");
      router.replace("/sign-in");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <CustomButton
        handlePress={onLogoutClick}
        isLoading={isSubmitting}
        title="Logout"
        customClass="bg-gray-200"
        textColor="blue"
      />
    </View>
  );
};

export default Profile;
