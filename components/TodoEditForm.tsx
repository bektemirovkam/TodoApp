import { FC } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { AppButton, AppText, AppTextInput } from "./ui";
import styled from "styled-components/native";
import { COLORS, spacing } from "../theme";
import { TextStyle } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

interface TodoEditFormProps {
  mode?: "editing" | "creating";
  onBack: () => void;
  onSave: () => void;
}

const Title = styled(AppText)`
  text-align: center;
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.large}px;
`;

const TextArea = styled(AppTextInput)`
  min-height: 120px;
  max-height: 300px;
  height: auto;
  padding-top: ${spacing.extraSmall}px;
  padding-bottom: ${spacing.extraSmall}px;
`;

export const TodoEditForm: FC<TodoEditFormProps> = ({
  mode = "creating",
  onBack,
  onSave,
}) => {
  return (
    <FlexContainer>
      <Header>
        <AppButton onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={COLORS.mainTextBlack} />
        </AppButton>

        <Title font="semiBold" size="24px">
          {mode === "creating" ? "Создание" : "Редактирование"}
        </Title>

        {mode === "editing" && (
          <AppButton onPress={onBack}>
            <AntDesign name="delete" size={24} color={COLORS.error} />
          </AppButton>
        )}
      </Header>

      <AppTextInput
        placeholder="Заголовок заметки"
        margin={`0 0 ${spacing.medium}px 0`}
      />
      <TextArea placeholder="Текст заметки" multiline style={textAreaStyle} />
    </FlexContainer>
  );
};

const textAreaStyle: TextStyle = {
  textAlignVertical: "top",
};
