import { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { styled } from "styled-components/native";

const StyledButton = styled.TouchableOpacity``;

interface AppButtonProps extends TouchableOpacityProps {}

export const AppButton: FC<AppButtonProps> = ({
  children,
  activeOpacity,
  ...props
}) => {
  return (
    <StyledButton {...props} activeOpacity={0.6}>
      {children}
    </StyledButton>
  );
};
