
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const btn = document.querySelector('.menu-btn');
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        btn.style.transform = menu.style.display === 'flex' ? 'rotate(90deg)' : 'rotate(360deg)';
    }
    function zoomIn(element) {
        // Remove zoom from all elements in the marquee
        const allDivs = document.querySelectorAll('marquee .div');
        allDivs.forEach(div => {
            div.classList.remove('zoom');
        });

        // Add zoom to the clicked element
        element.querySelector('.div').classList.add('zoom');
    }

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
    }