import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { customFontsToLoad } from "./theme";
import { AppNavigator } from "./navigation";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  const [areFontsLoaded] = useFonts(customFontsToLoad);

  if (!areFontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <TodoProvider>
        <AppNavigator />
      </TodoProvider>
    </SafeAreaProvider>
  );
}
