document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('joinButton');
    
    // Add hover effect for desktop
    joinButton.addEventListener('mouseenter', () => {
        joinButton.style.transform = 'translateY(-2px)';
        joinButton.style.boxShadow = '0 15px 30px rgba(0, 255, 136, 0.3)';
    });
    
    joinButton.addEventListener('mouseleave', () => {
        joinButton.style.transform = 'translateY(0)';
        joinButton.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.2)';
    });

    // Simple entrance animation for feature items
    const features = document.querySelectorAll('.feature-item');
    features.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = 'all 0.5s ease out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });

    // Tracking (optional placeholder)
    joinButton.addEventListener('click', (e) => {
        console.log('Join button clicked - Redirecting to Telegram');
        // The href attribute handles the actual navigation
    });
});
