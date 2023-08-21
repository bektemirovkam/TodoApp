import { FC } from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";
import { COLORS, typography } from "../../theme";

interface AppTextProps extends TextProps {
  font?: keyof typeof typography;
  size?: string;
  color?: string;
}

const StyledText = styled.Text<AppTextProps>`
  font-family: ${(props) => typography[props.font || "medium"]};
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || COLORS.mainTextBlack};
`;

export const AppText: FC<AppTextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
