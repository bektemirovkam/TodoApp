import { FC } from "react";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { Screen } from "../components/ui";
import { TodoEditForm } from "../components";

export const HomeScreen: FC<
  NativeStackScreenProps<AppStackParamList, "Home">
> = ({ navigation }) => {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodoEditForm />
      </ScrollView>
    </Screen>
  );
};
