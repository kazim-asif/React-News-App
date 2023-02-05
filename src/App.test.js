import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Get In Touch With The World");
  expect(linkElement).toBeInTheDocument();
});
