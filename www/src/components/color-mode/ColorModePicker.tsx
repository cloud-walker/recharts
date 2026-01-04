import { useSyncExternalStore } from 'react';

import styles from './ColorModePicker.module.css';
import { useColorModeStore } from './ColorModeProvider';

export function ColorModePicker(props: React.ComponentPropsWithRef<'button'>) {
  const store = useColorModeStore();
  const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
  return (
    <button
      {...props}
      className={styles.ColorModePicker}
      type="button"
      onClick={() => {
        if (state.origin === 'system') {
          store.dispatch('light');
          return;
        }
        if (state.mode === 'light') {
          store.dispatch('dark');
          return;
        }
        if (state.mode === 'dark') {
          store.dispatch('system');
        }
      }}
    >
      {state.origin === 'system' ? state.origin : state.mode}
    </button>
  );
}
