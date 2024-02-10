const targetDate = new Date('2024-02-11T00:00:00');
const currentDate = new Date();

if (currentDate >= targetDate) {
    document.querySelector('.row').classList.remove('hidden');
    document.querySelector('h1').textContent = 'Passe o mouse por cima do seu presente!';
} else {
    document.querySelector('.row').classList.add('hidden');
    document.querySelector('h1').textContent = 'Ainda não é seu aniversário!';
}