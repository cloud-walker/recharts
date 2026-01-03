import { hydrateRoot, createRoot } from 'react-dom/client';

import { Root } from './containers/Root';
import { ColorModeProvider, defineColorModeStore } from './components/color-mode';

const container = document.getElementById('app');
if (container == null) {
  throw new Error('Container element with id "app" not found');
}

const reactTree = (
  <ColorModeProvider store={defineColorModeStore()}>
    <Root />
  </ColorModeProvider>
);

if (import.meta.env.DEV) {
  createRoot(container).render(reactTree);
} else {
  hydrateRoot(container, reactTree);
}
