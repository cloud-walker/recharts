import { TooltipProps, Tooltip as ReTooltip } from 'recharts';

export function Tooltip<TValue extends number | string | ReadonlyArray<number | string>, TName extends number | string>(
  props: TooltipProps<TValue, TName>,
) {
  return (
    <ReTooltip
      {...props}
      contentStyle={{
        backgroundColor: 'var(--color-surface-raised)',
        borderColor: 'var(--color-border-2)',
        ...props.contentStyle,
      }}
      labelStyle={{
        color: 'var(--color-text-3)',
        ...props.labelStyle,
      }}
      cursor={
        typeof props.cursor === 'boolean'
          ? props.cursor
          : {
              stroke: 'var(--color-border-2)',
              ...props.cursor,
            }
      }
    />
  );
}
