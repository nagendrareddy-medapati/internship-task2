document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Bootstrap Guide loaded successfully');

    const links = document.querySelectorAll('a[target="_blank"]');
    console.log(`📍 Found ${links.length} external links`);

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
        });
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});
