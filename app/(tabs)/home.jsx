import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmtpyState from "../../components/EmtpyState";
const Home = () => {
  return (
    //SafeAreaView is used because scrollview does not support horizontal and vertical scroll at the same time
    <SafeAreaView className="bg-primary">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={[]}
        keyExtractor={(item) => item.$id}
        //how the data will be rendered
        renderItem={({ item }) => (
          <Text className="text-2xl text-white">{item.id}</Text>
        )}
        //header for the list
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 ">
            <View className="justify-between items-start mb-6 flex-row">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome!
                </Text>
                <Text className="font-psemibold text-2xl text-white">YOU!</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.informed_header_logo_white}
                  resizeMode="contain"
                  className="h-10 w-9"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Chika
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmtpyState title="No channel found" subtitle="Add a channel." />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
