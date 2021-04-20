import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/VPA - UNIVISION/i);
  expect(linkElement).toBeInTheDocument();
});

