import { FC, memo } from "react";
import { View } from "react-native";
import { FlexContainer } from "./ui/FlexContainer";
import { AppText, Title } from "./ui";
import styled from "styled-components/native";
import { Todo, useTodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  onTodoPress: (todo: Todo) => void;
}

export const TodoList: FC<TodoListProps> = memo(({ onTodoPress }) => {
  const { state } = useTodoContext();

  return (
    <FlexContainer>
      <Title>Список заметок</Title>
      <FlexContainer>
        {state.todos.map((t) => (
          <TodoItem todo={t} onPress={onTodoPress} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
});
