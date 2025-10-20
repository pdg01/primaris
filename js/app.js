
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const faqItem = this.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const wasActive = this.classList.contains('active');

    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-question');
      const a = item.querySelector('.faq-answer');
      q.classList.remove('active');
      a.classList.remove('active');
    });

    // Toggle current FAQ - open it only if it wasn't active before
    if (!wasActive) {
      this.classList.add('active');
      answer.classList.add('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

