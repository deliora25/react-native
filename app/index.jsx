import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../hooks";

const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }
  const handlePressLogin = () => {
    router.push("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-start items-center min-h-[85vh]">
          <Image
            source={images.informed_logo_white2_565}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.informed_logo_transparent}
            className="max-w-[380px] w-full h-[150px]"
            resizeMode="contain"
          />
          <Text className="text-5xl text-blue-600">Chats</Text>
          <View className="relative mt-10">
            <Text className="text-3xl text-white font-bold text-center">
              Helping Providers Manage Relationships
            </Text>
            <Text className="text-xl text-gray-500 text-center">
              The right communication at the right time.
            </Text>
          </View>
        </View>
        <View className="w-full justify-center items-center">
          <CustomButton
            title="Continue with Email"
            customClass="bg-blue-400"
            handlePress={handlePressLogin}
            mode="contained"
            icon="email"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" />
    </SafeAreaView>
  );
};

export default App;
