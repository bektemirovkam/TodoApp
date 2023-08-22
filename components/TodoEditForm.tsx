import { FC, useState } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { AppButton, AppText, AppTextInput, Title } from "./ui";
import styled from "styled-components/native";
import { COLORS, spacing } from "../theme";
import { TextStyle } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Todo } from "../context/TodoContext";

interface TodoEditFormProps {
  mode?: "editing" | "creating";
  onBack: () => void;
  onSave: () => void;
  initialData?: Todo;
}

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

const defaultData = {
  title: "",
  text: "",
  uid: new Date().toString(),
};

export const TodoEditForm: FC<TodoEditFormProps> = ({
  mode = "creating",
  onBack,
  onSave,
  initialData,
}) => {
  const [formData, setFormData] = useState(initialData || defaultData);

  return (
    <FlexContainer>
      <Header>
        <AppButton onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={COLORS.mainTextBlack} />
        </AppButton>

        <Title>{mode === "creating" ? "Создание" : "Редактирование"}</Title>

        {mode === "editing" && (
          <AppButton onPress={onBack}>
            <AntDesign name="delete" size={24} color={COLORS.error} />
          </AppButton>
        )}
      </Header>

      <AppTextInput
        placeholder="Заголовок заметки"
        margin={`0 0 ${spacing.medium}px 0`}
        value={formData.title}
        onChangeText={(v) => setFormData((prev) => ({ ...prev, title: v }))}
      />
      <TextArea
        placeholder="Текст заметки"
        multiline
        style={textAreaStyle}
        value={formData.text}
        onChangeText={(v) => setFormData((prev) => ({ ...prev, text: v }))}
      />
    </FlexContainer>
  );
};

const textAreaStyle: TextStyle = {
  textAlignVertical: "top",
};
