import { FC } from "react";
import { ActivityIndicator } from "react-native";

interface PreloaderProps {
  color?: string;
  size?: number | "large" | "small";
}

export const Preloader: FC<PreloaderProps> = ({ size, color }) => {
  return <ActivityIndicator size={size} color={color} />;
};
