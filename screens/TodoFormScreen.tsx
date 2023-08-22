import { FC } from "react";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { useTodoByUid } from "../context/TodoContext";
import { Screen } from "../components/ui";
import { TodoEditForm } from "../components";

export const TodoFormScreen: FC<
  NativeStackScreenProps<AppStackParamList, "TodoForm">
> = ({ navigation, route }) => {
  const todoId = route.params?.todoId;

  const todo = useTodoByUid(todoId);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodoEditForm onBack={goBack} />
      </ScrollView>
    </Screen>
  );
};
