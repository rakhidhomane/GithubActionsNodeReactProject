//import { render, screen } from '@testing-library/react';
//import App from './App';

//test('renders learn react link', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/calculator/i); // Match "Calculator" text
  expect(headingElement).toBeInTheDocument();
});

