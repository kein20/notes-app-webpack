class NotesAPI {
  static BASE_URL = 'https://notes-api.dicoding.dev/v2';

  static async getNotes() {
    const responseActive = await fetch(`${this.BASE_URL}/notes`);
    const responseJsonActive = await responseActive.json();
    if (responseJsonActive.status !== 'success') {
      throw new Error(
        `Gagal mengambil catatan aktif: ${responseJsonActive.message}`,
      );
    }

    const responseArchived = await fetch(`${this.BASE_URL}/notes/archived`);
    const responseJsonArchived = await responseArchived.json();
    if (responseJsonArchived.status !== 'success') {
      throw new Error(
        `Gagal mengambil catatan arsip: ${responseJsonArchived.message}`,
      );
    }

    return [...responseJsonActive.data, ...responseJsonArchived.data];
  }

  static async createNote(title, body) {
    const response = await fetch(`${this.BASE_URL}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    });
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
    return responseJson.data;
  }

  static async deleteNote(id) {
    const response = await fetch(`${this.BASE_URL}/notes/${id}`, {
      method: 'DELETE',
    });
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
    return responseJson.message;
  }

  static async archiveNote(id) {
    const response = await fetch(`${this.BASE_URL}/notes/${id}/archive`, {
      method: 'POST',
    });
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
    return responseJson.message;
  }

  static async unarchiveNote(id) {
    const response = await fetch(`${this.BASE_URL}/notes/${id}/unarchive`, {
      method: 'POST',
    });
    const responseJson = await response.json();
    if (responseJson.status !== 'success') {
      throw new Error(responseJson.message);
    }
    return responseJson.message;
  }
}

export default NotesAPI;
