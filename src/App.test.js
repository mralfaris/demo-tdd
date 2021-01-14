import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import mockData from './mockData';

/*
beforeEach(() => {
  fetchMock.once(JSON.stringify(mockData));
});

describe('<App /> tests', () => {
  it('renders <App />', () => {
    render(<App />)});
});
*/

it('renders <App />', async() => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});
