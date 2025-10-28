import './style.css';
import './components/loading-indicator.js';
import './components/app-bar.js';
import './components/note-list.js';
import './components/note-form.js';
import './components/note-item.js';
import './components/loading-indicator.js';

document.addEventListener('DOMContentLoaded', () => {
  const noteForm = document.querySelector('note-form');
  const noteList = document.querySelector('note-list');

  noteForm.addEventListener('note-added', () => {
    console.log('Event "note-added" diterima! Me-refresh daftar catatan...');
    noteList.fetchNotes();
  });
});
