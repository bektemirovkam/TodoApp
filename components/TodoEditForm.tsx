import { FC } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { AppText, AppTextInput } from "./ui";
import styled from "styled-components/native";

interface TodoEditFormProps {
  mode?: "editing" | "creating";
}

const Title = styled(AppText)`
  text-align: center;
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TodoEditForm: FC<TodoEditFormProps> = ({ mode = "creating" }) => {
  return (
    <FlexContainer>
      <Header>
        <Title font="semiBold" size="24px">
          {mode === "creating" ? "Создание" : "Редактирование"}
        </Title>
      </Header>

      <AppTextInput placeholder="Заголовок заметки" />
      <AppTextInput placeholder="Текст заметки" />
    </FlexContainer>
  );
};
