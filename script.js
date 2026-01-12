<script>
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-inquiry-form");
    const contactPage = document.getElementById("page-contact");
    const thankYou = document.getElementById("page-thankyou");

    if (!form || !contactPage || !thankYou) return;

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
                contactPage.classList.add("hidden"); // hide form page
                thankYou.classList.remove("hidden"); // show thank you page
                thankYou.scrollIntoView({ behavior: "smooth" });
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

// SPA-style navigation
function navigateTo(pageId) {
    document.querySelectorAll(".page-content").forEach(p => p.classList.add("hidden"));
    const target = document.getElementById("page-" + pageId);
    if (target) target.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
