// Page navigation
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) activePage.classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        if (pageId) {
            showPage(pageId);
            window.scrollTo(0, 0);
        }
    });
});

// Contact form message
const sendBtn = document.getElementById('sendMsgBtn');
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const feedback = document.getElementById('formFeedback');
        if (feedback) {
            feedback.innerHTML = '✓ Message sent! I\'ll reply within 48 hours.';
            setTimeout(() => feedback.innerHTML = '', 4000);
        }
    });
}

// Show home by default
showPage('home');