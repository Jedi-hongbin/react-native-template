import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/homeScreenComponents/index";
import AboutScreen from "../screen/aboutScreenComponents/index";
import { FontAwesome5 } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "首页",
          tabBarIcon: ( { focused, color, size } ) => <FontAwesome5 size={size} color={color} name={ focused ? 'bacon' : 'kaaba'} />
        }}
      />
      <BottomTab.Screen
        name="about"
        component={AboutScreen}
        options={{
          title: "关于",
          tabBarIcon: ( { focused, color, size } ) => <FontAwesome5 size={size} color={color} name={ focused ? 'cc-diners-club' : 'vaadin'} />
        }}
      />
    </BottomTab.Navigator>
  );
}
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? 'home';

  switch (routeName) {
    case 'home':
      return <Text>首页</Text>;
    case 'about':
      return <Text>关于</Text>;
  }
}