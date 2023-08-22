import { FC, memo } from "react";
import { TouchableOpacity } from "react-native";
import { Todo } from "../context/TodoContext";
import { styled } from "styled-components/native";
import { COLORS, spacing } from "../theme";
import { AppText } from "./ui";
import { Entypo } from "@expo/vector-icons";

interface TodoItemProps {
  todo: Todo;
  onPress: (todo: Todo) => void;
}

const Item = styled.View`
  flex-direction: row;
  align-items: "center";
  padding: ${spacing.medium}px 0px;
  border-bottom-color: #eaeaea;
  border-bottom-width: 1px;
`;

export const TodoItem: FC<TodoItemProps> = memo(({ todo, onPress }) => {
  const handlePress = () => {
    onPress(todo);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <Item>
        <AppText flex={1}>{todo.title}</AppText>
        <Entypo name="chevron-right" size={24} color={COLORS.mainBlue} />
      </Item>
    </TouchableOpacity>
  );
});
