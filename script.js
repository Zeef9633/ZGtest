<script>
    // Navigation toggle
    function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        const hamburger = document.querySelectorAll('.hamburger');
        const isOpen = menu.classList.toggle('active');
        hamburger.forEach(h => h.classList.toggle('open', isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // Navigate to page-content sections
    function navigateTo(pageId) {
        document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
        const target = document.getElementById('page-' + pageId);
        if(target) target.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Form submission handler
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById('contact-inquiry-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerText = "SUBMITTING...";
            btn.disabled = true;

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    // Hide contact form section
                    form.closest('section').classList.add('hidden');

                    // Show thank-you page
                    const thankYouPage = document.getElementById('page-thankyou');
                    if (thankYouPage) thankYouPage.classList.remove('hidden');

                    // Reset form
                    form.reset();
                } else {
                    alert("Submission failed. Please try again.");
                }
            } catch (error) {
                alert("Network error. Please try again later.");
            } finally {
                btn.innerText = "Submit Procurement Request";
                btn.disabled = false;
            }
        });
    });
</script>
