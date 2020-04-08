let sorter = {
  _reverseSortDirection: [],

  initializeSortState(numberOfColumns) {
    this._reverseSortDirection = (new Array(numberOfColumns)).fill(false);
  },

  sortBy(columnIndex, rows) {
    let sorted = Array.from(rows).sort((current, next) => {
      let currentContent = current.cells[columnIndex].textContent,
          nextContent = next.cells[columnIndex].textContent;

      if (currentContent < nextContent) {
        return -1;
      }

      if (currentContent > nextContent) {
        return 1;
      }

      return 0;
    });

    if (this._reverseSortDirection[columnIndex]) { return sorted.reverse(); }
    return sorted;
  },

  updateSortDirection(columnIndex) {
    this._reverseSortDirection[columnIndex] = !this._reverseSortDirection[columnIndex];
  }
};

let sortUI = {
  _headers: document.querySelectorAll('th'),
  _headerRow: document.getElementById('header-row'),

  initialize() {
    sorter.initializeSortState(this._headers.length);

    this._headerRow.addEventListener('click', event => {
      this.sortByColumn(event.target.cellIndex);
    });
  },

  sortByColumn(columnIndex) {
    let sorted = sorter.sortBy(columnIndex, baseUI.rows);

    this._updateContacts(sorted);
    this._updateSortDirection(columnIndex);
  },

  _updateContacts(sorted) {
    let fragment = new DocumentFragment();

    sorted.forEach(row => {
      fragment.appendChild(row);
    });

    baseUI.updateContacts(fragment);
  },

  _updateSortDirection(columnIndex) {
    sorter.updateSortDirection(columnIndex);

    let columnHeader = this._headerRow.cells[columnIndex];
    columnHeader.classList.toggle('sort-asc');
    columnHeader.classList.toggle('sort-desc');
  }
};

sortUI.initialize();
