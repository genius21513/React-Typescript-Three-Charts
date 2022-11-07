
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { TopDesc, ChartDesc } from './components/Desc';

test('renders App by test id', () => {
  render(<App/>);
  const appElement = screen.getByTestId("app-label")
  expect(appElement).toBeInTheDocument();
});

test("renders TopDesc", () => {
  render(<TopDesc />);
  const descElement = screen.getByText(/Unique MetaKey holders/i);
  expect(descElement).toBeInTheDocument();
});

test("renders ChartDesc with props", () => {
  render(<ChartDesc desc={`Holder Wallets`}/>);
  const descElement = screen.getByText(/Holder Wallets/i);
  expect(descElement).toBeInTheDocument();
});
