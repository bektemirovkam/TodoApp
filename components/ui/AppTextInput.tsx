import { FC } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { AppText } from "./AppText";
import { COLORS, typography } from "../../theme";
import { AppButton } from "./AppButton";

interface AppTextInputProps extends TextInputProps {
  errorMessage?: string;
  placeholder?: string;
}

const InputView = styled.View``;

const InputWrapper = styled.View`
  position: "relative";
  width: 100%;
  border-radius: 8px;
`;

const TextInput = styled.TextInput<AppTextInputProps>`
  height: 44px;
  padding: 0 55px 0 10px;
  width: 100%;
  color: ${COLORS.blackLight};
  font-family: ${typography.medium};
  background-color: ${COLORS.iconsBG};
  border-width: ${(props) => (props.errorMessage ? 1 : 0)}px;
  border-color: ${(props) =>
    props.errorMessage ? COLORS.error : "transparent"};
  border-radius: 8px;
`;

const ClearButton = styled(AppButton)`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const AppTextInput: FC<AppTextInputProps> = ({
  placeholder,
  errorMessage,
  onChangeText,
  value,
  ...props
}) => {
  const onClear = () => {
    if (onChangeText) {
      onChangeText("");
    }
  };

  return (
    <InputWrapper>
      {placeholder && <AppText>{placeholder}</AppText>}
      <InputView>
        <TextInput
          {...props}
          errorMessage={errorMessage}
          onChangeText={onChangeText}
          value={value}
        />
        <ClearButton onPress={onClear}>
          <AntDesign name="close" size={20} color={COLORS.blackLight} />
        </ClearButton>
      </InputView>
      {errorMessage && <AppText color={COLORS.error}>{errorMessage}</AppText>}
    </InputWrapper>
  );
};
