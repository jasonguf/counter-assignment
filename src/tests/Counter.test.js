// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter';
import { render, screen, fireEvent } from '@testing-library/react';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const theMessageFromTheCounter = screen.getByText(/Counter/i);
  expect(theMessageFromTheCounter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const theInitialCountValue = screen.getByTestId('count');
  expect(theInitialCountValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const theInitialCountValue = screen.getByTestId('count');
  const thePlusButton = screen.getByText('+');

  fireEvent.click(thePlusButton);
  expect(theInitialCountValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const theInitialCountValue = screen.getByTestId('count');
  const theMinusButton = screen.getByText('-');

  fireEvent.click(theMinusButton);
  expect(theInitialCountValue).toHaveTextContent('-1');
});
