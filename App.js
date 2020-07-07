import { StatusBar } from "expo-status-bar";
import React from "react";
import Main from "./Main";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Main />
        <StatusBar 
          // hidden
          // visible
          style="auto" />
      </PaperProvider>
    </Provider>
  );
}
