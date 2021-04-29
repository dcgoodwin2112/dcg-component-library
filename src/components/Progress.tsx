import styled from "styled-components";

const CONFIG = {
  sizes: {
    small: 3,
    medium: 6,
    large: 10,
  },
};

type ProgressProps = {
  /**
   * The value represented by the current progress bar state.
   */
  value: number;
  /**
   * The text that will be available to screen readers
   */
  ariaLabel: string;
  /**
   * A predefined size value that affect the height of the progress bar
   */
  size: "small" | "medium" | "large";
  /**
   * The progress bar border color value
   */
  borderColor: string;
  /**
   * The progress bar fill color value
   */
  fillColor: string;
  /**
   * The lowest value the progress bar can be set to
   */
  minValue: number;
  /**
   * The highest value the progress bar can be set to
   */
  maxValue: number;
};

/**
 * UI Component indicating progress towards completing an action.
 */
export const Progress = ({
  value,
  ariaLabel,
  size = "medium",
  borderColor = "lightgrey",
  fillColor = "rebeccapurple",
  minValue = 0,
  maxValue = 100,
}: ProgressProps) => {
  const sizeVal = CONFIG.sizes[size];
  const fillLevel = ((value - minValue) / maxValue) * 100;
  return (
    <ProgressWrapper
      size={sizeVal}
      borderColor={borderColor}
      role="progressbar"
      aria-valuemin={minValue}
      aria-valuenow={value}
      aria-valuemax={maxValue}
      aria-label={ariaLabel}
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
