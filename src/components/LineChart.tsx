import {
  LineChart as ReLineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";

type Props = {
  data: { [key: string]: any }[];
  xKey: string;
  lineKey: string;
  color?: string;
  type?: CurveType;
  className?: string;
  isAnimationActive?: boolean;
};

export function LineChart({
  data,
  xKey,
  lineKey,
  color = "var(--color-line, #2563eb)",
  type = "natural",
  className,
  isAnimationActive = true,
}: Props) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={xKey}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            interval="preserveStartEnd"
            tickFormatter={(value) =>
              typeof value === "string" ? value.slice(0, 3) : value
            }
          />
          <Tooltip />
          <Line
            dataKey={lineKey}
            type={type}
            stroke={color}
            strokeWidth={2}
            dot={false}
            isAnimationActive={isAnimationActive}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
}
