import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
 import { act } from 'react-dom/test-utils';
let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Displays Recruit Commentor', () => {

  act(() => {
    ReactDOM.render(<App />, container);
  });
  const banner = container.querySelector('#rc_banner_p');
  expect(banner.textContent).toBe('Recruit Commentor');
});


it('Displays proper Instructions', () => {

  act(() => {
    ReactDOM.render(<App />, container);
  });
  const banner = container.querySelector('#rc_instructions_p');
  expect(banner.textContent).toBe('Please click on a candidate to view their CV and respond with a commment');
});



