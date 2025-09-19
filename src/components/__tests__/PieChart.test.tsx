import React from "react";
import { render } from "@testing-library/react";

import { PieChart } from "../PieChart";

const pieChartMockData = [
  { label: "Apples", value: 40 },
  { label: "Bananas", value: 30 },
  { label: "Cherries", value: 20 },
];

jest.mock("recharts", () => {
  const Original = jest.requireActual("recharts");
  return {
    ...Original,
    ResponsiveContainer: ({ children }: any) =>
      React.cloneElement(children, { width: 400, height: 400 }),
  };
});

describe("PieChart", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <PieChart data={pieChartMockData} isAnimationActive={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it("applies custom className", () => {
    render(
      <PieChart
        data={pieChartMockData}
        isAnimationActive={false}
        className="test-class"
      />
    );
    expect(document.querySelector(".test-class")).not.toBeNull();
  });

  it("renders correct number of slices", async () => {
    const { container } = render(
      <PieChart data={pieChartMockData} isAnimationActive={false} />
    );

    const slices = container.querySelectorAll(".recharts-sector");
    expect(slices.length).toBe(pieChartMockData.length);
  });
});
