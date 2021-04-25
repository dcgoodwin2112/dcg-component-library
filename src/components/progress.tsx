import styled from "styled-components";

const CONFIG = {
  sizes: {
    small: 3,
    medium: 6,
    large: 10,
  },
};

type ProgressProps = {
  value: number;
  ariaText: string;
  size?: "small" | "medium" | "large";
  borderColor?: string;
  fillColor?: string;
  minValue?: number;
  maxValue?: number;
};

export const Progress = ({
  value,
  ariaText,
  size = "medium",
  borderColor = "lightgrey",
  fillColor = "blueviolet",
  minValue = 0,
  maxValue = 100,
}: ProgressProps) => {
  const sizeVal = CONFIG.sizes[size]
  const fillLevel = ((value - minValue) / maxValue) * 100;
  return (
    <ProgressWrapper
      size={sizeVal}
      borderColor={borderColor}
      aria-valuemin={minValue}
      aria-valuenow={value}
      aria-valuemax={maxValue}
      aria-valuetext={ariaText}
    >
      <ProgressInner
        size={sizeVal}
        fillColor={fillColor}
        fillLevel={fillLevel}
      />
    </ProgressWrapper>
  );
};

interface ProgressWrapperProps {
  size: number;
  borderColor: string;
}

const ProgressWrapper = styled.div<ProgressWrapperProps>`
  width: 100%;
  height: ${({ size }) => size}px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 2rem;
  overflow: hidden;
`;

interface ProgressInnerProps {
  size: number;
  fillColor: string;
  fillLevel: number;
}

const ProgressInner = styled.div<ProgressInnerProps>`
  overflow: hidden;
  background-color: ${({ fillColor }) => fillColor};
  width: ${({ fillLevel }) => fillLevel}%;
  padding-top: 2px;
  height: ${({ size }) => size - 2}px;
`;
