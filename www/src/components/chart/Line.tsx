import { LineProps, Line as ReLine } from 'recharts';

export function Line(props: LineProps) {
  return (
    <ReLine
      fill="var(--color-surface-base)"
      activeDot={{
        stroke: 'var(--color-surface-base)',
      }}
      {...props}
    />
  );
}
