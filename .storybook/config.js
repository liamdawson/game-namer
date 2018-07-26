import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/index.css';

addDecorator(withInfo({
  inline: true
}));

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
