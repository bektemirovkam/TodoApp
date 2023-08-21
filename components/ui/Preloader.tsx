import { FC } from "react";
import { ActivityIndicator } from "react-native";
import { FlexContainer } from "./FlexContainer";

interface PreloaderProps {
  color?: string;
  size?: number | "large" | "small";
}

export const Preloader: FC<PreloaderProps> = ({ size = "large", color }) => {
  return (
    <FlexContainer alignItems="center" justifyContent="center">
      <ActivityIndicator size={size} color={color} />
    </FlexContainer>
  );
};
