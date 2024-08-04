//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', addBook);
  document.getElementById('book-list').addEventListener('click', removeBook);

  function addBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
      alert('Please fill in all fields');
      return;
    }

    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete">X</button></td>
    `;

    list.appendChild(row);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  function removeBook(event) {
    if (event.target.classList.contains('delete')) {
      if (confirm('Are you sure?')) {
        const row = event.target.parentElement.parentElement;
        row.remove();
      }
    }
  }
});
