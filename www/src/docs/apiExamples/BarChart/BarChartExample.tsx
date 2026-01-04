import { BarChart, Legend, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { CartesianGrid } from '../../../components/chart';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];

// #endregion
const BarChartExample = ({ isAnimationActive = true }) => (
  <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip
      cursor={{
        fill: 'var(--color-interactive-3)',
      }}
    />
    <Legend />
    <Bar dataKey="pv" fill="var(--color-chart-1)" isAnimationActive={isAnimationActive} />
    <Bar dataKey="uv" fill="var(--color-chart-2)" isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </BarChart>
);

export default BarChartExample;
