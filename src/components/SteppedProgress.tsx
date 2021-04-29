import styled from "styled-components";

const CONFIG = {
  small: 10,
  medium: 25,
  large: 50,
};

type Size = "small" | "medium" | "large";

interface SteppedBase {
  /**
   * Border color for each step
   */
  borderColor: string;
  /**
   * Fill color for active/completed steps
   */
  activeColor: string;
  /**
   * Fill color for empty/uncompleted steps
   */
  emptyColor: string;
  /**
   * Predefined size value that controls the width and height of each step
   */
  size: Size;
}

interface SteppedProgressProps extends SteppedBase {
  /**
   * Total number of steps in the progress bar
   */
  steps: number;
  /**
   * The highest filled step in the progress bar
   */
  current: number;
  /**
   * The text that will be available to screen readers
   */
  ariaText: string;
}

/**
 * UI Component indicating progress towards completing an action.
 *
 * The Stepped Progress bar is visually separated into individual steps.
 */
export const SteppedProgress = ({
  steps = 5,
  current = 0,
  size = "medium",
  activeColor = "greenyellow",
  emptyColor = "lightgrey",
  borderColor = "lightgrey",
  ariaText
}: SteppedProgressProps) => {
  const currentVal = current > steps ? steps : current < 0 ? 0 : current;
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={currentVal}
      aria-valuemax={steps}
      aria-valuetext={ariaText}
    >
      {Array(steps)
        .fill(1)
        .map((value, index) => {
          return (
            <Step
              key={index}
              activeStep={index < current ? true : false}
              {...{ size, borderColor, activeColor, emptyColor }}
            />
          );
        })}
    </ProgressWrapper>
  );
};

interface StepProps extends SteppedBase {
  activeStep: boolean;
}

const Step = ({
  activeStep,
  borderColor,
  activeColor,
  emptyColor,
  size,
}: StepProps) => {
  return (
    <StepWrapper
      fillColor={activeStep ? activeColor : emptyColor}
      {...{ borderColor, size }}
    ></StepWrapper>
  );
};

const ProgressWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface StepWrapperProps {
  borderColor: string;
  size: Size;
  fillColor: string;
}

const StepWrapper = styled.div<StepWrapperProps>`
  width: ${({ size }) => CONFIG[size]}px;
  height: ${({ size }) => CONFIG[size]}px;
  background-color: ${({ fillColor }) => fillColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  margin: 2px;
`;
