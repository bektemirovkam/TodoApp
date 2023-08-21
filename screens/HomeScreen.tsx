import { FC } from "react";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { AppText, AppTextInput, Preloader, Screen } from "../components/ui";

export const HomeScreen: FC<
  NativeStackScreenProps<AppStackParamList, "Home">
> = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView>
        <AppText>Open up App.tsx to start working on your app!</AppText>
        <AppText font="semiBold">
          Open up App.tsx to start working on your app!
        </AppText>

        <AppTextInput placeholder="Text field" errorMessage="error" />
        <AppTextInput placeholder="Text field" />
        <Preloader />
      </ScrollView>
    </Screen>
  );
};
