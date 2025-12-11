const btnToggle = document.getElementById('btn-toggle-qr');
const qrContainer = document.getElementById('qr-image-container');
const heroDonateBtn = document.getElementById('hero-donate-btn');

btnToggle.addEventListener('click', () => {
    qrContainer.style.display = qrContainer.style.display === 'none' ? 'block' : 'none';
});

heroDonateBtn.addEventListener('click', () => {
    qrContainer.style.display = 'block';
    window.scrollTo({ top: qrContainer.offsetTop, behavior: 'smooth' });
});
