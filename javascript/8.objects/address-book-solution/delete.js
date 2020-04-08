let deleter = {
  NAME_COLUMN_INDEX: 0,

  findContactByName(name, rows) {
    return Array.from(rows).find(row => {
      return row.cells[this.NAME_COLUMN_INDEX].textContent === name;
    });
  },

  deleteContact(contactToDelete) {
    contactToDelete.remove();
  }
};

let deleteUI = {
  _nameToDelete: document.getElementById('fullname'),

  get nameToDelete() {
    return this._nameToDelete.value;
  },

  initialize() {
    this._nameToDelete.addEventListener('keydown', event => {
      if (event.code === 'Enter') {
        this.deleteContact();
      }
    });
  },

  deleteContact() {
    let contactToDelete = this._findContactByName();

    if (!contactToDelete) {
      baseUI.displayError('That contact does not exist.');
      return;
    }

    deleter.deleteContact(contactToDelete);
    baseUI.displayError('');
  },

  _findContactByName() {
    return deleter.findContactByName(this.nameToDelete, baseUI.rows);
  }
};

deleteUI.initialize();
