<script>
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-inquiry-form');
    const modal = document.getElementById('submission-modal');
    const closeBtn = document.getElementById('close-modal');

    if (!form || !modal) return;

    // Form submit handler
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
                // Show modal
                modal.classList.remove('hidden');

                // Reset form
                form.reset();
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please try again later.");
            console.error(error);
        } finally {
            btn.innerText = "Submit Procurement Request";
            btn.disabled = false;
        }
    });

    // Close modal button
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
</script>
