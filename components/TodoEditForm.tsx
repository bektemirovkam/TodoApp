import { FC, useState } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { AppBox, AppButton, AppTextInput, Title } from "./ui";
import styled from "styled-components/native";
import { COLORS, spacing } from "../theme";
import { TextStyle } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Todo } from "../context/TodoContext";

interface TodoEditFormProps {
  mode?: "editing" | "creating";
  onBack: () => void;
  onSave: (todoData: Todo) => void;
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

  const handleSave = () => {
    onSave(formData);
    onBack();
  };

  const hasChanges = () => {
    if (mode === "editing" && initialData) {
      return (
        initialData.text !== formData.text &&
        initialData.title !== formData.title
      );
    } else {
      return !formData.text && !formData.title;
    }
  };

  return (
    <FlexContainer>
      <Header>
        {hasChanges() ? (
          <AppButton onPress={onBack}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={COLORS.mainTextBlack}
            />
          </AppButton>
        ) : (
          <AppButton onPress={handleSave}>
            <Ionicons name="save" size={24} color={COLORS.mainBlue} />
          </AppButton>
        )}

        <Title>{mode === "creating" ? "Создание" : "Редактирование"}</Title>

        {mode === "editing" && (
          <AppButton onPress={onBack}>
            <AntDesign name="delete" size={24} color={COLORS.error} />
          </AppButton>
        )}
      </Header>

      <AppBox>
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
      </AppBox>
    </FlexContainer>
  );
};

const textAreaStyle: TextStyle = {
  textAlignVertical: "top",
};
