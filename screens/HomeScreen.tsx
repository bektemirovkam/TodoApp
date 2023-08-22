import { FC, useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { AppButton, AppText, Screen } from "../components/ui";
import { TodoList } from "../components";
import { Todo, useTodoContext } from "../context/TodoContext";
import { styled } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, spacing } from "../theme";

const AddButton = styled(AppButton)<{ decreaseBtnOpacity: boolean }>`
  position: absolute;
  right: ${spacing.medium}px;
  bottom: ${spacing.medium}px;
  opacity: ${(props) => (props.decreaseBtnOpacity ? 0.3 : 1)};
  background-color: white;
  border-radius: ${spacing.extraLarge}px;
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
      <AddButton
        onPress={addNewTodo}
        decreaseBtnOpacity={decreaseBtnOpacity}
        style={addBtnShadow}
      >
        <AntDesign name="pluscircleo" size={48} color={COLORS.mainBlue} />
      </AddButton>
    </Screen>
  );
};

const addBtnShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 9,
  },
  shadowOpacity: 0.5,
  shadowRadius: 12.35,

  elevation: 19,
};
