import { FC } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";

export const TodoDetailsScreen: FC<
  NativeStackScreenProps<AppStackParamList, "TodoDetails">
> = ({ navigation, route }) => {
  const { todoId } = route.params;

  return <View></View>;
};
