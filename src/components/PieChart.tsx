import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = {
  data: { label: string; value: number }[];
  dataKey?: string;
  colors?: string[];
  height?: number;
  className?: string;
};

export function PieChart({
  data,
  dataKey = "value",
  colors = [
    "var(--color-1, #2563eb)",
    "var(--color-2, #16a34a)",
    "var(--color-3, #f59e0b)",
    "var(--color-4, #dc2626)",
    "var(--color-5, #9333ea)",
  ],
  className,
}: Props) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RePieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={"label"}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
}
