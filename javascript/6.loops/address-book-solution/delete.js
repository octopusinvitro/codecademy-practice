function getContacts() {
  return document.getElementById('contacts');
}

function displayError(message) {
  document.getElementById('error-message').textContent = message;
}

function getNameToDelete() {
  return document.getElementById('fullname').value;
}

function findContactByName(name) {
  let rows = getContacts().rows;

  return Array.from(rows).find(function(row) {
    return row.cells[0].textContent === name;
  });
}

function deleteContact() {
  let name = getNameToDelete(),
      rowToDelete = findContactByName(name);

  if (rowToDelete === undefined) {
    displayError('That contact does not exist.');
  } else {
    rowToDelete.remove();
  }
}

document.getElementById('fullname').addEventListener('keydown', function(event) {
  if (event.code === 'Enter') {
    displayError('');
    deleteContact();
  }
});
