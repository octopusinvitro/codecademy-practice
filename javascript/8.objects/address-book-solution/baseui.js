let baseUI = {
  _contacts: document.getElementById('contacts'),
  _error: document.getElementById('error-message'),

  get rows() {
    return this._contacts.rows;
  },

  displayError(message) {
    this._error.textContent = message;
  },

  updateContacts(fragment) {
    this._contacts.appendChild(fragment);
  }
};
