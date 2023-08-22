import { FC, memo } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { AppBox, Title } from "./ui";
import { Todo, useTodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { styled } from "styled-components/native";
import { spacing } from "../theme";

interface TodoListProps {
  onTodoPress: (todo: Todo) => void;
}

const ListTitle = styled(Title)`
  margin-bottom: ${spacing.large}px;
`;

export const TodoList: FC<TodoListProps> = memo(({ onTodoPress }) => {
  const { state } = useTodoContext();

  return (
    <FlexContainer>
      <ListTitle>Список заметок</ListTitle>
      <FlexContainer>
        {state.todos.length ? (
          <AppBox flex={1}>
            {state.todos.map((t) => (
              <TodoItem todo={t} onPress={onTodoPress} key={t.uid} />
            ))}
          </AppBox>
        ) : null}
      </FlexContainer>
    </FlexContainer>
  );
});
