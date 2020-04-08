function getQuery() {
  return document.getElementById('query').value;
}

function hideAllContacts() {
  let rows = getContacts().rows;

  Array.from(rows).forEach(function(row) {
    row.classList.add('hide');
  })
}

function findContactsByQuery(query) {
  let rows = getContacts().rows;

  return Array.from(rows).filter(function(row) {
    return Array.from(row.cells).some(function(cell) {
      return cell.textContent.toLowerCase().includes(query.toLowerCase());
    });
  });
}

function displaySearchResults(matches) {
  if (matches.length === 0) {
    displayError('No contacts matched the query.');
    return;
  }

  matches.forEach(function(match) {
    match.classList.remove('hide');
  });
}

function search(event) {
  if (event.code === 'Enter') {
    hideAllContacts();
    displayError('');

    let matches = findContactsByQuery(getQuery());
    displaySearchResults(matches);
  }
}

document.getElementById('query').addEventListener('keydown', search);
