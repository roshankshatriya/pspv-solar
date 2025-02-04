
function toggleView() {
  const extraRows = document.querySelectorAll('.extra-row');
  const button = document.getElementById('toggleButton');
  
  extraRows.forEach(row => {
    if (row.style.display === 'none' || row.style.display === '') {
      row.style.display = 'block';
      button.textContent = 'View Less';
    } else {
      row.style.display = 'none';
      button.textContent = 'View More';
    }
  });
}






