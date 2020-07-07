import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { StyleSheet, View, Text } from "react-native";
import { Appbar } from "react-native-paper";

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        // header: ({ scene, previous, navigation } = props) => (
        //   <Header scene={scene} previous={previous} navigation={navigation} />
        // ),
        headerLeft: () => (
          <Appbar.Action
            icon="mail"
            onPress={() => console.log(navigation.openDrawer())}
          />
        ),
      }}
    >
      <Stack.Screen name="bottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

// function Header({ scene, previous, navigation }) {
//   console.log(previous)
//   console.log(navigation)
//   return (
//     <View style={{
//       height: height * 0.1,
//       backgroundColor: '#f58'
//     }}>
//       <Text>1</Text>
//     </View>
//   );
// }
