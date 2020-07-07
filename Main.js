import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MyDarkTheme, MyDefaultTheme } from "./constants/Theme";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContainer from "./components/CustomDrawerContainer";
import useCachedResources from "./hooks/useCachedResources";
import HomeScreen from './navigation/HomeScreen'
const Drawer = createDrawerNavigator();

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((x) => !x);
  }
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer theme={isDark ? MyDarkTheme : MyDefaultTheme}>
        <Drawer.Navigator
          drawerContent={(props) => (
            <CustomDrawerContainer toggleTheme={toggleTheme} {...props} />
          )}
          drawerType="slide"
          edgeWidth={100}
        >
          <Drawer.Screen name="homeScreen" component={HomeScreen} />
          <Drawer.Screen name="b" component={B} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};


function B() {
  return (
    <View>
      <Text>gefafaefhaufhkbvkB</Text>
    </View>
  );
}

export default Main;
