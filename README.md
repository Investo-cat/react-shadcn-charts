# react-shadcn-charts

## 📦 Installation

```bash
npm install react-shadcn-charts
```

Then import the bundled CSS once in your app (e.g. in `_app.tsx` or `layout.tsx`):

```tsx
import "react-shadcn-charts/dist/index.css";
```

## 🚀 Usage

### LineChart

```tsx
import { LineChart } from "react-shadcn-charts";

const data = [
  { month: "January", visitors: 120 },
  { month: "February", visitors: 200 },
  { month: "March", visitors: 150 },
  { month: "April", visitors: 300 },
  { month: "May", visitors: 250 },
  { month: "June", visitors: 400 },
];

export default function Demo() {
  return (
    <LineChart
      data={data}
      xKey="month"
      lineKey="visitors"
      curveType="natural"
    />
  );
}
```

**Props:**

- `data: object[]` → array of chart data
- `xKey: string` → field name for the X axis
- `lineKey: string` → field name for the line values
- `color?: string` → CSS color or `var(--color-name)`
- `type?: CurveType` → curve style (default `"linear"`)
- `className?: string` → chart container style

### PieChart

```tsx
import { PieChart } from "react-shadcn-charts";

const data = [
  { label: "Apples", value: 120 },
  { label: "Oranges", value: 200 },
  { label: "Bananas", value: 150 },
  { label: "Mangoes", value: 220 },
];

export default function Demo() {
  return <PieChart data={data} />;
}
```

**Props:**

- `data: { label: string; value: number }[]` → chart data
- `dataKey?: string` → which field to use for values (default `"value"`)
- `colors?: string[]` → array of colors (CSS or variables)
- `className?: string` → chart container style

## 🔮 Roadmap & Extensibility

The current version provides clean, production-ready **LineChart** and **PieChart** components.  
We are actively working on extending functionality, including:

- Additional chart types (Bar, Area, Donut, Radar, etc.)
- More customization props (legends, tooltips, axis controls, themes)
- Better accessibility support
- Dark mode styling
- Improved animations

Because both components are built on top of **Recharts**, you can already pass in  
additional Recharts props through our wrappers (coming in future minor releases).

If you have feature requests, feel free to open an issue or PR on GitHub 🚀
