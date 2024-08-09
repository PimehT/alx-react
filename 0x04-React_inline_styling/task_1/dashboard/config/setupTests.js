import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import util from 'util';
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

// Suppress style injection for all tests
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Enable style injection after tests are done
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
