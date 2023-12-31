// POST a new plant to /api/garden route
const newPlantHandler = async (event) => {
  event.preventDefault();

  const plantName = document.querySelector('#plant-input').value.trim();

  if (plantName) {
    const response = await fetch('/api/garden', {
      method: 'POST',
      body: JSON.stringify({
        name: plantName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/progress');
    } else {
      alert('Failed to add plant');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/garden/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      document.location.replace('/progress');
    } else {
      alert('Failed to destroy plant');
    }
  }
};

document
  .querySelector('.new-plant-form')
  .addEventListener('submit', newPlantHandler);

let deleteButtons = document.querySelectorAll('.delete-button');
if (deleteButtons) {
  deleteButtons.forEach((button) => {
    button.addEventListener('click', delButtonHandler);
  });
}
