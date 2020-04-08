let reverseSortDirection = initialSortState();

function initialSortState() {
  let numberOfColumns = document.querySelectorAll('th').length;
  return (new Array(numberOfColumns)).fill(false);
}

function sortBy(columnIndex) {
  let rows = getContacts().rows;

  let sorted = Array.from(rows).sort(function(current, next) {
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

  if (reverseSortDirection[columnIndex]) { return sorted.reverse(); }

  return sorted;
}

function updateContacts(sorted) {
  let fragment = new DocumentFragment(),
  tableBody = getContacts();

  sorted.forEach(function (row) {
    fragment.appendChild(row);
  });

  tableBody.appendChild(fragment);
}

function updateSortDirection(columnIndex) {
  reverseSortDirection[columnIndex] = !reverseSortDirection[columnIndex];

  let columnHeader = document.getElementById('header-row').cells[columnIndex];
  columnHeader.classList.toggle('sort-asc');
  columnHeader.classList.toggle('sort-desc');
}

function sortByColumn(event) {
  let columnIndex = event.target.cellIndex,
      sorted = sortBy(columnIndex);

  updateContacts(sorted);
  updateSortDirection(columnIndex);
}

document.getElementById('header-row').addEventListener('click', sortByColumn);
