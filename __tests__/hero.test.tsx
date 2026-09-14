import { render, screen } from '@testing-library/react';
import Hero from '@/sections/hero';

describe('Hero Section', () => {
  test('renders name and title', () => {
    render(<Hero />);
    
    expect(screen.getByText(/abhinav/i)).toBeInTheDocument();
    expect(screen.getByText(/amazon sde/i)).toBeInTheDocument();
  });

  test('rends call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
  });
});