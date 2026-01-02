import { CartesianGridProps, CartesianGrid as ReCartesianGrid } from 'recharts';

export function CartesianGrid(props: CartesianGridProps) {
  return <ReCartesianGrid stroke="var(--color-border-2)" {...props} />;
}
