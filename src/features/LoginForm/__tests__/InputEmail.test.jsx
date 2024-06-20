import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputEmail from '../components/InputEmail';

describe('InputEmail', () => {
  test('renders an input field with the correct placeholder', () => {
    render(<InputEmail emailBorder="border-2" isErrorEmail={false} email="" />);

    const input = screen.getByPlaceholderText('Email');

    expect(input).toBeInTheDocument();
  });

  test('renders an error border when isErrorEmail is true', () => {
    render(<InputEmail emailBorder="border-2" isErrorEmail={false} email="" />);

    const input = screen.getByPlaceholderText('Email');
    const errorBorder = screen.getByTestId('login-email-border');

    expect(input).toBeInTheDocument();
    expect(errorBorder).toBeInTheDocument();
  });
});
