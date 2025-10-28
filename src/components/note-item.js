class NoteItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const noteId = this.getAttribute('note-id');
    const title = this.getAttribute('title');
    const body = this.getAttribute('body');
    const date = this.getAttribute('date');
    const isArchived = this.getAttribute('is-archived') === 'true';

    const archiveButtonText = isArchived ? 'Pindahkan' : 'Arsipkan';

    this.innerHTML = `
      <div class="note-card">
        <h3>${title}</h3>
        <p>${body}</p>
        <small>${date}</small>
        <div class="note-actions">
          <button class="archive-button" data-id="${noteId}">${archiveButtonText}</button>
          <button class="delete-button" data-id="${noteId}">Hapus</button>
        </div>
      </div>
    `;

    this.querySelector('.delete-button').addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('delete-note', {
          detail: { noteId },
          bubbles: true,
        }),
      );
    });

    this.querySelector('.archive-button').addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('archive-note', {
          detail: { noteId, isArchived },
          bubbles: true,
        }),
      );
    });
  }
}

customElements.define('note-item', NoteItem);
