import { createRoot } from 'react-dom/client';

import { Root } from './containers/Root';
import { ColorModeProvider, defineColorModeStore } from './components/color-mode';

const container = document.getElementById('app');
if (container == null) {
  throw new Error('Container element with id "app" not found');
}

createRoot(container).render(
  <ColorModeProvider store={defineColorModeStore()}>
    <Root />
  </ColorModeProvider>,
);
