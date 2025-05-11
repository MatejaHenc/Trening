document.querySelectorAll('.toggle-detail').forEach(button => {
  button.addEventListener('click', () => {
    const fullText = button.previousElementSibling;
    fullText.classList.toggle('hidden');
    button.textContent = fullText.classList.contains('hidden') ? 'Pročitaj više' : 'Sakrij';
  });
});



