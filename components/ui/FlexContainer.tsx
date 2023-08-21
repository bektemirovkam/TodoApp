import { FlexAlignType, ViewStyle } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

interface FlexContainerProps {
  alignItems?: FlexAlignType;
  justifyContent?: ViewStyle["justifyContent"];
  flex?: number;
  insets?: EdgeInsets;
}

export const FlexContainer = styled.View<FlexContainerProps>`
  width: 100%;
  flex: ${(props) => props.flex || 1};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  padding-left: ${(props) => props.insets?.left || 0}px;
  padding-right: ${(props) => props.insets?.right || 0}px;
  padding-top: ${(props) => props.insets?.top || 0}px;
  padding-bottom: ${(props) => props.insets?.bottom || 0}px;
`;
