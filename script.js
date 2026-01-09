 <script>
        function navigateTo(pageId) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            const targetPage = document.getElementById('page-' + pageId);
            if(targetPage) targetPage.classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.remove('active');
                if(l.getAttribute('data-page') === pageId) l.classList.add('active');
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const hamburger = document.querySelectorAll('.hamburger');
            const isOpen = menu.classList.toggle('active');
            hamburger.forEach(h => h.classList.toggle('open', isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }

        function handleMobileNav(pageId) {
            navigateTo(pageId);
            toggleMenu();
        }

        const handleForm = async (e) => {
            e.preventDefault();
            const form = e.target;
            const btn = form.querySelector('button');
            btn.innerText = "SUBMITTING...";
            btn.disabled = true;

            const formData = new FormData(form);
            try {
                const response = await fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
                if (response.ok) { form.reset(); navigateTo('thankyou'); }
            } catch (error) {
                console.error("Form error");
            } finally {
                btn.innerText = "SUBMIT PROCUREMENT REQUEST";
                btn.disabled = false;
            }
        };

        const inquiryForm = document.getElementById('contact-inquiry-form');
        if (inquiryForm) inquiryForm.addEventListener('submit', handleForm);
        
        window.addEventListener('scroll', () => {
            if (window.scrollX !== 0) {
                window.scrollTo(0, window.scrollY);
            }
        });
    </script>
