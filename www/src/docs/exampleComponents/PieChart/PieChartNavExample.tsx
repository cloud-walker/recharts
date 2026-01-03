import { Pie, PieChart } from 'recharts';

// #region Sample data
const data = [
  { value: 400, fill: '#82ca9d' },
  { value: 300, fill: '#8884d8' },
  { value: 400, fill: '#413ea0' },
];

// #endregion
const PieChartNavExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  return (
    <PieChart style={{ aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius="120%"
        stroke="var(--color-surface-base)"
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
};

export default PieChartNavExample;
