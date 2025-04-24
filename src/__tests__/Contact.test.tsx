import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  test('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('handles form submission', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Hello World' },
    });

    fireEvent.click(screen.getByText(/Send Message/i));

    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello World',
    });
  });
});