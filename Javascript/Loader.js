        // Set loading duration (in milliseconds)
        const loadingDuration = 3000; // 3 seconds

        window.onload = function() {
            setTimeout(() => {
                const loadingText = document.getElementById('loadingText');
                loadingText.classList.add('zoom');
                setTimeout(() => {
                    // Redirect to another page
                    window.location.href = '/HTML/Home.html'; // Replace with your target page
                }, 1000); // Wait for the zoom animation to finish
            }, loadingDuration)};