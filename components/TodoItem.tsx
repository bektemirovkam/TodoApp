import { FC, memo } from "react";
import { View } from "react-native";
import { Todo } from "../context/TodoContext";

interface TodoItemProps {
  todo: Todo;
  onPress: (todo: Todo) => void;
}

export const TodoItem: FC<TodoItemProps> = memo(({ todo }) => {
  return <View></View>;
});
