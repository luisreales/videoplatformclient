import { render, screen } from '@testing-library/react';
import Navbar from './index';

test('renders learn react link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Video Platform Assessment/i);
  expect(linkElement).toBeInTheDocument();
});

