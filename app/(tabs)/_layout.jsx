import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Icon name={icon} size={24} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#2469C7",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="Home"
                icon="home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="organization"
          options={{
            title: "Organization",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="Organization"
                icon="building"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="facility"
          options={{
            title: "Facility",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="Facility"
                icon="hospital-o"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name="Profile"
                icon="user"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
