import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders hero section', () => {
    render(<App />);
    const heroElement = screen.getByText(/Hi, I'm/i);
    expect(heroElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    const aboutLink = screen.getByText(/About/i);
    const projectsLink = screen.getByText(/Projects/i);
    const skillsLink = screen.getByText(/Skills/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});