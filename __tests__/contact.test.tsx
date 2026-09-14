import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '@/sections/contact';

describe('Contact Form', () => {
  test('renders form elements', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('shows validation errors for empty fields', () => {
    render(<Contact />);
    
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  test('shows success message on valid submission', async () => {
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message with sufficient length.' } });
    
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Wait for success message
    expect(await screen.findByText(/thank you for your message/i)).toBeInTheDocument();
  });
});