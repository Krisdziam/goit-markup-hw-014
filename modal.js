// Отримуємо елементи
const modalOverlay = document.getElementById('modal-overlay');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.querySelector('.modal-close-btn');

// Функція для відкриття модалки
function openModal() {
  modalOverlay.classList.add('open'); // Додаємо клас для показу модалки
  document.body.style.overflow = 'hidden'; // Вимикаємо прокручування заднього фону
}

// Функція для закриття модалки
function closeModal() {
  modalOverlay.classList.remove('open'); // Видаляємо клас для приховання модалки
  document.body.style.overflow = 'auto'; // Включаємо прокручування заднього фону
}

// Додаємо обробник події для кнопки відкриття модалки
openModalButton.addEventListener('click', openModal);

// Додаємо обробник події для кнопки закриття модалки
closeModalButton.addEventListener('click', closeModal);

// Закриття модалки при кліку на overlay
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
