import React from "react";

import { render, waitFor } from "@testing-library/react";
import { LineChart } from "../LineChart";

const mockData = [
  { month: "January", sales: 100 },
  { month: "February", sales: 200 },
  { month: "March", sales: 150 },
];

// Mock ResponsiveContainer to provide width/height
jest.mock("recharts", () => {
  const Original = jest.requireActual("recharts");

  return {
    ...Original,
    ResponsiveContainer: ({ children }: any) =>
      React.cloneElement(children, { width: 400, height: 300 }),
  };
});

describe("LineChart", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <LineChart
        data={mockData}
        xKey="month"
        lineKey="sales"
        className="chart-class"
        isAnimationActive={false}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("applies custom className", () => {
    const { container } = render(
      <LineChart
        data={mockData}
        xKey="month"
        lineKey="sales"
        className="chart-class"
        isAnimationActive={false}
      />
    );

    expect(container.querySelector(".chart-class")).not.toBeNull();
  });

  it("renders SVG with line path", async () => {
    const { container } = render(
      <LineChart
        data={mockData}
        xKey="month"
        lineKey="sales"
        isAnimationActive={false}
      />
    );

    await waitFor(() => {
      const paths = container.querySelectorAll("path");
      expect(paths.length).toBeGreaterThan(0);
    });
  });

  it("renders XAxis ticks with formatted labels", async () => {
    const { findByText } = render(
      <LineChart
        data={mockData}
        xKey="month"
        lineKey="sales"
        isAnimationActive={false}
      />
    );

    expect(await findByText("Jan")).not.toBeNull();
    expect(await findByText("Feb")).not.toBeNull();
    expect(await findByText("Mar")).not.toBeNull();
  });
});
