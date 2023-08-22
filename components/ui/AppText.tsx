import { FC } from "react";
import { TextProps } from "react-native";
import styled from "styled-components/native";
import { COLORS, typography } from "../../theme";

interface AppTextProps extends TextProps {
  font?: keyof typeof typography;
  size?: string;
  color?: string;
  flex?: number;
}

const StyledText = styled.Text<AppTextProps>`
  font-family: ${(props) => typography[props.font || "medium"]};
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || COLORS.mainTextBlack};
  flex: ${(props) => props.flex || 0};
`;

export const AppText: FC<AppTextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export const Title = styled(AppText)`
  text-align: center;
  flex: 1;
  font-size: 24px;
  font-family: ${typography.semiBold};
`;
