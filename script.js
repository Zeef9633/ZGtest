<script>
/* =========================
   PAGE NAVIGATION
========================= */
function navigateTo(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const hamburgers = document.querySelectorAll('.hamburger');
    const isOpen = menu.classList.toggle('active');

    hamburgers.forEach(h => h.classList.toggle('open', isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function handleMobileNav(pageId) {
    navigateTo(pageId);
    toggleMenu();
}

/* =========================
   FORM SUBMISSION (FORMSPREE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-inquiry-form");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const btn = form.querySelector("button[type='submit']");
        btn.innerText = "SUBMITTING...";
        btn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                form.reset();
                navigateTo('thankyou');
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

/* =========================
   SCROLL SAFETY (OPTIONAL)
========================= */
window.addEventListener('scroll', () => {
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
});
</script>
