import React, { useState } from "react";
import { View, Text, ScrollView, Image, Alert } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../hooks";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { setUser, setIsLoggedIn } = useGlobalContext();

  const handleSubmit = async () => {
    const { userName, email, password } = form || {};

    if (!userName || !email || !password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(email, password, userName);
      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChangeEmail = (e) => {
    setForm({ ...form, email: e });
  };

  const handleChangeUsername = (e) => {
    setForm({ ...form, userName: e });
  };

  const handleChangePassword = (e) => {
    setForm({ ...form, password: e });
  };

  const handleCancelClick = () => {
    router.back();
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6 min-h-[85vh]">
          <Image
            source={images.informed_logo_white2_565}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-xl text-white">
            Sign up to Informed Medical
          </Text>
          <FormField
            title="Username"
            value={form.userName}
            handleChangeText={handleChangeUsername}
            customClass="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={handleChangeEmail}
            customClass="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={handleChangePassword}
            customClass="mt-7 text-whtie"
          />

          <View className="my-6 items-center justify-center flex-row w-full">
            <CustomButton
              title="Cancel"
              handlePress={handleCancelClick}
              customClass="bg-gray-200 mr-2 mt-7"
              textColor="gray"
            />
            <CustomButton
              title="Sign up"
              handlePress={() => handleSubmit(form)}
              customClass="bg-blue-400 mt-7"
              isLoading={isSubmitting}
            />
          </View>
          <View className="justify-center pt-5 flex-row space-x-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-blue-500"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
