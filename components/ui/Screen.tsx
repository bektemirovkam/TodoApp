import { FC } from "react";
import { FlexContainer } from "./FlexContainer";
import { Platform, ViewProps } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

interface ScreenProps extends ViewProps {
  statusBarStyle?: "light" | "dark";
}

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const isIos = Platform.OS === "ios";

export const Screen: FC<ScreenProps> = ({
  children,
  statusBarStyle,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <FlexContainer {...props} insets={insets}>
      <StatusBar style={statusBarStyle} />
      <StyledKeyboardAvoidingView behavior={isIos ? "padding" : undefined}>
        {children}
      </StyledKeyboardAvoidingView>
    </FlexContainer>
  );
};
