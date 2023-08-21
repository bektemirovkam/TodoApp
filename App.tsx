import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppText, AppTextInput, Preloader, Screen } from "./components/ui";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { customFontsToLoad } from "./theme";

export default function App() {
  const [areFontsLoaded] = useFonts(customFontsToLoad);

  if (!areFontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Screen>
        <ScrollView style={{ borderWidth: 2, borderColor: "blue" }}>
          <AppText>Open up App.tsx to start working on your app!</AppText>
          <AppText font="semiBold">
            Open up App.tsx to start working on your app!
          </AppText>

          <AppTextInput placeholder="Text field" errorMessage="error" />
          <Preloader />
        </ScrollView>
      </Screen>
    </SafeAreaProvider>
  );
}
