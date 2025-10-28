import Swal from 'sweetalert2';
import NotesAPI from '../api.js';

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('form').addEventListener(
      'submit',
      this._handleSubmit.bind(this),
    );
    this.querySelector('#title').addEventListener('input', this._validateInput);
    this.querySelector('#body').addEventListener('input', this._validateInput);
  }

  _validateInput(event) {
    if (event.target.value.trim().length > 0) {
      event.target.setCustomValidity('');
    } else {
      event.target.setCustomValidity('Field ini tidak boleh kosong.');
    }
    event.target.reportValidity();
  }

  async _handleSubmit(event) {
    event.preventDefault();

    const title = this.querySelector('#title').value.trim();
    const body = this.querySelector('#body').value.trim();

    if (!title || !body) {
      Swal.fire('Perhatian!', 'Judul dan isi catatan wajib diisi.', 'warning');
      return;
    }

    const newNote = { title, body };
    const loadingIndicator = document.querySelector('loading-indicator');

    if (loadingIndicator) loadingIndicator.show();

    try {
      await NotesAPI.createNote(newNote.title, newNote.body);
      this.dispatchEvent(new CustomEvent('note-added', { bubbles: true }));
      Swal.fire('Berhasil!', 'Catatan baru berhasil ditambahkan.', 'success');
    } catch (error) {
      console.error('Gagal menambahkan catatan:', error);
      Swal.fire(
        'Gagal!',
        `Gagal menambahkan catatan: ${error.message}`,
        'error',
      );
    } finally {
      if (loadingIndicator) loadingIndicator.hide();
      this.querySelector('form').reset();
    }
  }

  render() {
    this.innerHTML = `
      <h2>Tambah Catatan Baru</h2>
      <form>
        <input 
          type="text" 
          id="title" 
          placeholder="Judul catatan..." 
          required 
        />
        <textarea 
          id="body" 
          rows="5" 
          placeholder="Isi catatan..." 
          required
        ></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>
    `;
  }
}

customElements.define('note-form', NoteForm);
