import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

import QuickActions from '../QuickActions.jsx';

describe('QuickActions', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  test('export button triggers alert', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<QuickActions />);
    fireEvent.click(
      screen.getByText(/Export Complete Content Calendar/i)
    );
    expect(alertSpy).toHaveBeenCalledWith('Exporting content calendar...');
    alertSpy.mockRestore();
  });

  test('calendar sync navigates', () => {
    render(<QuickActions />);
    fireEvent.click(screen.getByText(/Enable Calendar Sync/i));
    expect(mockNavigate).toHaveBeenCalledWith('/calendar-sync');
  });

  test('AI content assist navigates', () => {
    render(<QuickActions />);
    fireEvent.click(screen.getByText(/Claude AI Content Assist/i));
    expect(mockNavigate).toHaveBeenCalledWith('/ai-assist');
  });
});
