(() => {
  var e = {
      236: () => {
        class e extends HTMLElement {
          connectedCallback() {
            (this.render(),
              this.querySelector('form').addEventListener(
                'submit',
                this.handleSubmit.bind(this),
              ));
          }
          handleSubmit(e) {
            e.preventDefault();
            const t = this.querySelector('#title').value.trim(),
              n = this.querySelector('#body').value.trim();
            if (!t || !n)
              return void alert('Judul dan isi catatan wajib diisi!');
            const i = {
                id: 'note-' + Date.now(),
                title: t,
                body: n,
                createdAt: new Date().toISOString(),
                archived: !1,
              },
              o = new CustomEvent('note-added', { detail: i });
            (document.querySelector('note-list').dispatchEvent(o),
              this.querySelector('form').reset());
          }
          render() {
            this.innerHTML =
              '\n            <h2>Tambah Catatan</h2>\n            <form>\n                <input type="text" id="title" placeholder="Judul catatan" required />\n                <textarea id="body" rows="5" placeholder="Isi catatan" required></textarea>\n                <button type="submit">Tambah</button>\n            </form>\n    ';
          }
        }
        customElements.define('note-form', e);
      },
      649: () => {
        class e extends HTMLElement {
          set note(e) {
            ((this._note = e), this.render());
          }
          render() {
            this.innerHTML = `\n            <div class="note-card">\n                <h3>${this._note.title}</h3>\n                <p>${this._note.body}</p>\n                <small>${new Date(this._note.createdAt).toLocaleString()}</small>\n            </div>\n    `;
          }
        }
        customElements.define('note-item', e);
      },
      894: () => {
        class e extends HTMLElement {
          connectedCallback() {
            this.innerHTML = '\n            📒 Notes App\n    ';
          }
        }
        customElements.define('app-bar', e);
      },
    },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var a = (t[i] = { exports: {} });
    return (e[i](a, a.exports, n), a.exports);
  }
  (() => {
    'use strict';
    n(649);
    const e = [
      {
        id: 'notes-jT-jjsyz61J8XKiI',
        title: 'Welcome to Notes, Dimas!',
        body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
        createdAt: '2022-07-28T10:03:12.594Z',
        archived: !1,
      },
      {
        id: 'notes-aB-cdefg12345',
        title: 'Meeting Agenda',
        body: 'Discuss project updates and assign tasks for the upcoming week.',
        createdAt: '2022-08-05T15:30:00.000Z',
        archived: !1,
      },
      {
        id: 'notes-XyZ-789012345',
        title: 'Shopping List',
        body: 'Milk, eggs, bread, fruits, and vegetables.',
        createdAt: '2022-08-10T08:45:23.120Z',
        archived: !1,
      },
      {
        id: 'notes-1a-2b3c4d5e6f',
        title: 'Personal Goals',
        body: 'Read two books per month, exercise three times a week, learn a new language.',
        createdAt: '2022-08-15T18:12:55.789Z',
        archived: !1,
      },
      {
        id: 'notes-LMN-456789',
        title: 'Recipe: Spaghetti Bolognese',
        body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
        createdAt: '2022-08-20T12:30:40.200Z',
        archived: !1,
      },
      {
        id: 'notes-QwErTyUiOp',
        title: 'Workout Routine',
        body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
        createdAt: '2022-08-25T09:15:17.890Z',
        archived: !1,
      },
      {
        id: 'notes-abcdef-987654',
        title: 'Book Recommendations',
        body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
        createdAt: '2022-09-01T14:20:05.321Z',
        archived: !1,
      },
      {
        id: 'notes-zyxwv-54321',
        title: 'Daily Reflections',
        body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
        createdAt: '2022-09-07T20:40:30.150Z',
        archived: !1,
      },
      {
        id: 'notes-poiuyt-987654',
        title: 'Travel Bucket List',
        body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
        createdAt: '2022-09-15T11:55:44.678Z',
        archived: !1,
      },
      {
        id: 'notes-asdfgh-123456',
        title: 'Coding Projects',
        body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
        createdAt: '2022-09-20T17:10:12.987Z',
        archived: !1,
      },
      {
        id: 'notes-5678-abcd-efgh',
        title: 'Project Deadline',
        body: 'Complete project tasks by the deadline on October 1st.',
        createdAt: '2022-09-28T14:00:00.000Z',
        archived: !1,
      },
      {
        id: 'notes-9876-wxyz-1234',
        title: 'Health Checkup',
        body: 'Schedule a routine health checkup with the doctor.',
        createdAt: '2022-10-05T09:30:45.600Z',
        archived: !1,
      },
      {
        id: 'notes-qwerty-8765-4321',
        title: 'Financial Goals',
        body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
        createdAt: '2022-10-12T12:15:30.890Z',
        archived: !1,
      },
      {
        id: 'notes-98765-54321-12345',
        title: 'Holiday Plans',
        body: 'Research and plan for the upcoming holiday destination.',
        createdAt: '2022-10-20T16:45:00.000Z',
        archived: !1,
      },
      {
        id: 'notes-1234-abcd-5678',
        title: 'Language Learning',
        body: 'Practice Spanish vocabulary for 30 minutes every day.',
        createdAt: '2022-10-28T08:00:20.120Z',
        archived: !1,
      },
    ];
    class t extends HTMLElement {
      constructor() {
        (super(), (this.notes = e));
      }
      connectedCallback() {
        this.render();
      }
      addNote(e) {
        (this.notes.unshift(e), this.render());
      }
      render() {
        this.innerHTML =
          '\n        <h2>Daftar Catatan</h2>\n        <div class="note-grid"></div>\n    ';
        const e = this.querySelector('.note-grid');
        this.notes.forEach((t) => {
          const n = document.createElement('note-item');
          ((n.note = t), e.appendChild(n));
        });
      }
    }
    (customElements.define('note-list', t), n(236), n(894));
    const i = document.querySelector('note-list');
    i.addEventListener('note-added', (e) => {
      i.addNote(e.detail);
    });
  })();
})();
