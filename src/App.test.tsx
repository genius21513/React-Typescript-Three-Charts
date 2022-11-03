import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChartDesc } from "./components/Desc";
// import App from './App';

test('renders', () => {
  render(<ChartDesc/>)  
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
