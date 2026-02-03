// Obtener elementos del DOM
const magazineCards = document.querySelectorAll('.magazine-card');
const modal = document.getElementById('magazine-modal');
const modalClose = document.querySelector('.modal-close');
const modalCover = document.getElementById('modal-cover');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalDescription = document.getElementById('modal-description');
const modalDownload = document.getElementById('modal-download');

// Función para abrir el modal
function openModal(card) {
    const title = card.getAttribute('data-title');
    const date = card.getAttribute('data-date');
    const description = card.getAttribute('data-description');
    const pdf = card.getAttribute('data-pdf');
    const coverImg = card.querySelector('.magazine-cover').src;

    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalDescription.textContent = description;
    modalDownload.href = pdf;
    modalCover.src = coverImg;

    modal.classList.remove('hidden');
}

// Función para cerrar el modal
function closeModal() {
    modal.classList.add('hidden');
}

// Event listeners para abrir modal
magazineCards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
});

// Event listener para cerrar modal
modalClose.addEventListener('click', closeModal);

// Cerrar modal al hacer clic fuera de él
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
