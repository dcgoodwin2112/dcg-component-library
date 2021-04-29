import styled from "styled-components";

const CONFIG = {
  font: {
    small: 1,
    medium: 1.2,
    large: 1.4,
  },
  paddingInline: {
    small: 14,
    medium: 22,
    large: 28,
  },
  paddingBlock: {
    small: 8,
    medium: 12,
    large: 16,
  },
  variant: {
    primary: {
      bgColor: "rebeccapurple",
      borderColor: "lightgray",
      hoverColor: "blueviolet",
      textColor: "white",
    },
    secondary: {
      bgColor: "white",
      borderColor: "rebeccapurple",
      hoverColor: "lavender",
      textColor: "rebeccapurple",
    },
  },
};

type Size = "small" | "medium" | "large";

type Variant = "primary" | "secondary";

type ButtonType = "submit" | "reset" | "button";

interface ButtonProps {
  /**
   * Button text or content
   */
  children: React.ReactNode | string;
  /**
   * Color Scheme variant
   */
  variant: Variant;
  /**
   * Predefined size value
   */
  size: Size;
  /**
   * Button type
   */
  type: ButtonType;
  /**
   * Optional color value to override variant background-color
   */
  bgColor?: string;
  /**
   * Optional color value to override variant border-color
   */
  borderColor?: string;
  /**
   * Optional color value to override variant hover accent color
   */
  hoverColor?: string;
  /**
   * Optional color value to override variant text color
   */
  textColor?: string;
  /**
   * Optional name attribute
   */
  name?: string;
  /**
   * Optional aria-label attribute
   */
  ariaLabel?: string;
  /**
   * Optional aria-labeled-by attribute
   */
  ariaLabeledBy?: string;
  /**
   * Button click handler function
   */
  onClick: (event) => void;
}

/**
 * Basic button component
 */
export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  bgColor,
  borderColor,
  hoverColor,
  textColor,
  onClick,
  name,
  ariaLabel,
  ariaLabeledBy
}: ButtonProps) => {
  const textSize = `${CONFIG.font[size]}rem`;
  const padding = `${CONFIG.paddingBlock[size]}px ${CONFIG.paddingInline[size]}px`;
  const bgColorValue = bgColor ? bgColor : CONFIG.variant[variant].bgColor;
  const borderColorValue = borderColor
    ? borderColor
    : CONFIG.variant[variant].borderColor;
  const hoverColorValue = hoverColor
    ? hoverColor
    : CONFIG.variant[variant].hoverColor;
  const textColorValue = textColor
    ? textColor
    : CONFIG.variant[variant].textColor;
  return (
    <Wrapper
      {...{
        type,
        textSize,
        padding,
        bgColorValue,
        borderColorValue,
        hoverColorValue,
        textColorValue,
        onClick,
        name,
      }}
      aria-label={ariaLabel}
      aria-labeledby={ariaLabeledBy}
    >
      {children}
    </Wrapper>
  );
};

interface WrapperProps {
  textSize: string;
  padding: string;
  bgColorValue: string;
  borderColorValue: string;
  hoverColorValue: string;
  textColorValue: string;
}

const Wrapper = styled.button<WrapperProps>`
  font-size: ${({ textSize }) => textSize};
  padding: ${({ padding }) => padding};
  background-color: ${({ bgColorValue }) => bgColorValue};
  color: ${({ textColorValue }) => textColorValue};
  border: 1px solid ${({ borderColorValue }) => borderColorValue};
  border-radius: 8px;
  font-weight: 600;
  &:hover {
    background-color: ${({ hoverColorValue }) => hoverColorValue};
  }
`;
