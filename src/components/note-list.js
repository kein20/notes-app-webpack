import Swal from 'sweetalert2';
import NotesAPI from '../api.js';
import './note-item.js';

class NoteList extends HTMLElement {
  constructor() {
    super();
    this._notes = [];
  }

  connectedCallback() {
    this.render();
    this.fetchNotes();

    this.addEventListener('delete-note', this._handleDeleteNote.bind(this));
    this.addEventListener('archive-note', this._handleArchiveNote.bind(this));
  }

  async fetchNotes() {
    const loadingIndicator = document.querySelector('loading-indicator');
    if (loadingIndicator) loadingIndicator.show();

    try {
      const notes = await NotesAPI.getNotes();
      this._notes = notes;
      this.render();
    } catch (error) {
      console.error('Gagal mengambil catatan:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal memuat catatan. Silakan periksa koneksi Anda.',
      });
    } finally {
      if (loadingIndicator) loadingIndicator.hide();
    }
  }

  async _handleDeleteNote(event) {
    const { noteId } = event.detail;

    const result = await Swal.fire({
      title: 'Anda yakin?',
      text: 'Catatan yang dihapus tidak dapat dikembalikan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      const loadingIndicator = document.querySelector('loading-indicator');
      if (loadingIndicator) loadingIndicator.show();

      try {
        await NotesAPI.deleteNote(noteId);
        Swal.fire('Dihapus!', 'Catatan Anda berhasil dihapus.', 'success');
        this.fetchNotes();
      } catch (error) {
        console.error('Gagal menghapus catatan:', error);
        Swal.fire(
          'Gagal!',
          `Gagal menghapus catatan: ${error.message}`,
          'error',
        );
      } finally {
        if (loadingIndicator) loadingIndicator.hide();
      }
    }
  }

  async _handleArchiveNote(event) {
    const { noteId, isArchived } = event.detail;
    const loadingIndicator = document.querySelector('loading-indicator');
    if (loadingIndicator) loadingIndicator.show();
    try {
      if (isArchived) {
        await NotesAPI.unarchiveNote(noteId);
        Swal.fire('Berhasil!', 'Catatan dipindahkan dari arsip.', 'success');
      } else {
        await NotesAPI.archiveNote(noteId);
        Swal.fire('Berhasil!', 'Catatan berhasil diarsipkan.', 'success');
      }
      this.fetchNotes();
    } catch (error) {
      Swal.fire('Gagal!', `Proses arsip gagal: ${error.message}`, 'error');
    } finally {
      if (loadingIndicator) loadingIndicator.hide();
    }
  }

  render() {
    const activeNotes = this._notes.filter((note) => !note.archived);
    const archivedNotes = this._notes.filter((note) => note.archived);

    this.innerHTML = `
      <h2>Catatan Aktif</h2>
      <div id="activeNotesGrid" class="note-grid"></div>
      <h2 style="margin-top: 2rem;">Arsip</h2>
      <div id="archivedNotesGrid" class="note-grid"></div>
    `;

    const renderNotes = (notes, containerId) => {
      const container = this.querySelector(containerId);
      container.innerHTML = '';
      if (notes.length === 0) {
        container.innerHTML = '<p class="empty-message">Tidak ada catatan.</p>';
        return;
      }
      notes.forEach((note) => {
        const noteItem = document.createElement('note-item');

        noteItem.setAttribute('note-id', note.id);
        noteItem.setAttribute('title', note.title);
        noteItem.setAttribute('body', note.body);
        noteItem.setAttribute(
          'date',
          new Date(note.createdAt).toLocaleString('id-ID'),
        );
        noteItem.setAttribute('is-archived', note.archived);

        container.appendChild(noteItem);
      });
    };

    renderNotes(activeNotes, '#activeNotesGrid');
    renderNotes(archivedNotes, '#archivedNotesGrid');
  }
}

customElements.define('note-list', NoteList);
