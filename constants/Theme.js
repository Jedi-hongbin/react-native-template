import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

const MyDarkTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...DarkTheme.colors,
    background: '#333',
    primary: "#fffae5",
    text: '#fffae5'
  },
};
const MyDefaultTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: "#ccc",
    text: '#000'
  },
};

export { MyDarkTheme, MyDefaultTheme };
