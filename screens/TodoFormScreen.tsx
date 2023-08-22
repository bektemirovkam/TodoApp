import { FC } from "react";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { Todo, useTodoByUid, useTodoContext } from "../context/TodoContext";
import { Screen } from "../components/ui";
import { TodoEditForm } from "../components";

export const TodoFormScreen: FC<
  NativeStackScreenProps<AppStackParamList, "TodoForm">
> = ({ navigation, route }) => {
  const todoId = route.params?.todoId;

  const todo = useTodoByUid(todoId);
  const { dispatch } = useTodoContext();

  const goBack = () => {
    navigation.goBack();
  };

  const onSave = (formData: Todo) => {
    dispatch({ type: "ADD_TODO", payload: formData });
  };

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodoEditForm
          mode={todo ? "editing" : "creating"}
          onBack={goBack}
          onSave={onSave}
          initialData={todo}
        />
      </ScrollView>
    </Screen>
  );
};
