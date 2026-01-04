import { Bar, BarChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { Tooltip } from '../../chart';

export default function BarChartClickable() {
  return (
    <BarChart
      width={550}
      height={240}
      data={[
        { name: 'Page A', uv: 590 },
        { name: 'Page B', uv: 290 },
        { name: 'Page C', uv: 868 },
      ]}
    >
      <Tooltip trigger="click" content={() => null} cursor={false} shared={false} />
      <Bar
        dataKey="uv"
        stackId="a"
        fill="green"
        activeBar={{ stroke: 'var(--color-clickable-example)', strokeWidth: 7 }}
      />
      <RechartsDevtools />
    </BarChart>
  );
}
