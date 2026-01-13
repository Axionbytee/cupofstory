 const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        });

        const burger = document.getElementById('burger-menu');
        const navList = document.getElementById('nav-list');
        const navLinks = document.querySelectorAll('.nav-links a');

        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            navList.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                navList.classList.remove('active');
            });
        });

        window.addEventListener('scroll', () => {
            document.getElementById('hero-img').style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        const sections = document.querySelectorAll("section, footer");
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                if (pageYOffset >= section.offsetTop - 200) current = section.getAttribute("id");
            });
            document.querySelectorAll(".nav-item").forEach(a => {
                a.classList.remove("active");
                if (a.getAttribute("href").includes(current)) a.classList.add("active");
            });
        });