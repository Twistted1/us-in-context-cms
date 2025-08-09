import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentNotes from '../RecentNotes.jsx';

describe('RecentNotes', () => {
  test('adds a note', () => {
    render(<RecentNotes />);
    const input = screen.getByPlaceholderText(/add a note/i);
    fireEvent.change(input, { target: { value: 'My new note' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText('My new note')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('deletes a note', () => {
    render(<RecentNotes />);
    const deleteButton = screen.getAllByText(/delete/i)[0];
    fireEvent.click(deleteButton);
    expect(
      screen.queryByText(/Tik Tok Algorithm Insights/i)
    ).not.toBeInTheDocument();
  });
});
