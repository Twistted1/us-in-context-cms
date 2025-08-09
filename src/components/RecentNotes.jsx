import React, { useState } from 'react';

const RecentNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Tik Tok Algorithm Insights',
      date: '1/15/2025',
      timeframe: 'TODAY',
      border: 'border-purple-500',
    },
    {
      id: 2,
      title: 'Research new content ideas',
      timeframe: 'TOMORROW',
      border: 'border-gray-300',
    },
  ]);

  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now(),
      title: newNote.trim(),
      date: new Date().toLocaleDateString(),
      border: 'border-gray-300',
    };
    setNotes([note, ...notes]);
    setNewNote('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Notes</h2>
      <div className="flex space-x-2 mb-4">
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Add a note"
        />
        <button
          onClick={addNote}
          className="px-3 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`border-l-4 ${note.border} pl-4 py-2`}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-800">{note.title}</p>
              {note.date && (
                <span className="text-xs font-mono text-gray-400">
                  {note.date}
                </span>
              )}
            </div>
            {note.timeframe && (
              <p className="text-sm text-gray-500 mt-1">{note.timeframe}</p>
            )}
            <button
              onClick={() => deleteNote(note.id)}
              className="text-red-500 text-sm mt-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNotes;