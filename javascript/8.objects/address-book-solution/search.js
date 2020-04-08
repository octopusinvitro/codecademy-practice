let searcher = {
  findContactsByQuery(query, rows) {
    return Array.from(rows).filter(row => {
      return Array.from(row.cells).some(cell => {
        return cell.textContent.toLowerCase().includes(query.toLowerCase());
      });
    });
  }
};

let searchUI = {
  _query: document.getElementById('query'),

  get query() {
    return this._query.value;
  },

  initialize() {
    this._query.addEventListener('keydown', event => {
      if (event.code === 'Enter') {
        this.searchContacts();
      }
    });
  },

  searchContacts() {
    let matches = searcher.findContactsByQuery(this.query, baseUI.rows);

    this._hideAllContacts();
    this._displaySearchResults(matches);
  },

  _hideAllContacts() {
    Array.from(baseUI.rows).forEach(row => {
      row.classList.add('hide');
    });
  },

  _displaySearchResults(matches) {
    matches.length > 0 ?
      baseUI.displayError('') :
      baseUI.displayError('No contacts matched the query.');

    matches.forEach(match => {
      match.classList.remove('hide');
    });
  },
};

searchUI.initialize();
