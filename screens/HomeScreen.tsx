import { FC, useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { AppButton, Screen } from "../components/ui";
import { TodoList } from "../components";
import { Todo } from "../context/TodoContext";
import { styled } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { spacing } from "../theme";

const AddButton = styled(AppButton)`
  position: absolute;
  right: ${spacing.medium}px;
  bottom: ${spacing.medium}px;
`;

export const HomeScreen: FC<
  NativeStackScreenProps<AppStackParamList, "Home">
> = ({ navigation }) => {
  const [decreaseBtnOpacity, setDecreaseBtnOpacity] = useState(false);

  const onTodoPress = useCallback((todo: Todo) => {
    navigation.navigate("TodoForm", {
      todoId: todo.uid,
    });
  }, []);

  const addNewTodo = () => {
    navigation.navigate("TodoForm");
  };

  const onScrollStart = () => {
    setDecreaseBtnOpacity(true);
  };
  const onScrollEnd = () => {
    setDecreaseBtnOpacity(false);
  };

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={onScrollStart}
        onScrollEndDrag={onScrollEnd}
      >
        <TodoList onTodoPress={onTodoPress} />
      </ScrollView>
      <AddButton onPress={addNewTodo}>
        <AntDesign name="pluscircleo" size={48} color="black" />
      </AddButton>
    </Screen>
  );
};
