import { FC, ReactNode } from "react";
import { styled } from "styled-components/native";
import { spacing } from "../../theme";

interface AppBoxProps {
  children: ReactNode;
  flex?: number;
}

const Box = styled.View<AppBoxProps>`
  border-radius: 12px;
  width: "100%";
  padding: ${spacing.medium}px;
  background-color: white;
  flex: ${(props) => props.flex || 0};
`;

export const AppBox: FC<AppBoxProps> = ({ children, flex }) => {
  return <Box flex={flex}>{children}</Box>;
};
