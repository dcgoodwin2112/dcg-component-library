import styled from "styled-components";

enum MONTH {
  "january" = 1,
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
}

interface TimeTagDateProps {
  year: number;
  month?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  day?: number;
  abvMonth: boolean;
}

export const TimeTagDate = ({
  year,
  month,
  day,
  abvMonth = false,
}: TimeTagDateProps) => {
  if (typeof month === "undefined") {
    return <time dateTime={`${year}`}>{year}</time>;
  }

  // Create month string value
  const monthString = abvMonth ? MONTH[month].slice(0, 3) : MONTH[month];
  if (typeof day === "undefined") {
    return (
      <time dateTime={`${year}-${month}`}>
        <MonthWrapper>{monthString}</MonthWrapper>, {year}
      </time>
    );
  }

  // Sanitize day prop to be value between 1 and 31
  const dayValue = day < 1 ? 1 : day > 31 ? 31 : day;
  return (
    <time dateTime={`${year}-${month}-${day}`}>
      <MonthWrapper>{monthString}</MonthWrapper> {dayValue}, {year}
    </time>
  );
};

const MonthWrapper = styled.span`
  text-transform: capitalize;
`;
