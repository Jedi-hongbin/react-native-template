import React, { useState } from "react";
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import styled from "styled-components";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Drawer,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { FlexView } from '../constants/StyledComponents'

const CustomDrawerContainer = (props) => {
  const [index, setIndex] = useState(0);
  const { colors, dark } = useTheme()

  return (
    <DrawerContentScrollView style={{ backgroundColor: colors.background }} {...props}>
      <Drawer.Section>
        <DrawerItem
          focused={index == 0}
          label="to A Screen"
          icon={({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "praying-hands" : "hands"}
              size={size}
              color={color}
            />
          )}
          activeBackgroundColor="#eef"
          activeTintColor="#0f6"
          inactiveBackgroundColor="#ccc"
          inactiveTintColor="#999"
          onPress={() => {
            setIndex((x) => (x = 0));
            props.navigation.navigate("homeScreen");
          }}
        />
        <DrawerItem
          focused={index == 1}
          label="to B Screen"
          icon={({ focused, size, color }) => (
            <MaterialIcons
              name={focused ? "star-half" : "wb-sunny"}
              size={size}
              color={color}
            />
          )}
          activeBackgroundColor="#fee"
          activeTintColor="#f55"
          inactiveBackgroundColor="#ccc"
          inactiveTintColor="#999"
          onPress={() => {
            setIndex((x) => (x = 1));
            props.navigation.navigate("b");
          }}
        />
      </Drawer.Section>
      <Drawer.Section>
        <TouchableRipple onPress={() => {
          props.toggleTheme()
        }}>
          <FlexView direction="row" content="space-between">
            <Caption style={{ color: colors.text }}>夜晚模式</Caption>
            <Switch value={dark}
            onValueChange={props.toggleTheme} />
          </FlexView>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContainer;
