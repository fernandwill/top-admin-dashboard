// Notification bell functionality
document.addEventListener('DOMContentLoaded', function() {
    const notificationBell = document.querySelector('.notification-bell');
    
    if (notificationBell) {
        notificationBell.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove existing notification if any
            const existingNotification = document.querySelector('.notification-message');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create notification message
            const notificationMessage = document.createElement('div');
            notificationMessage.className = 'notification-message';
            notificationMessage.textContent = 'No new notification!';
            
            // Insert after the notification bell
            notificationBell.appendChild(notificationMessage);
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                if (notificationMessage && notificationMessage.parentNode) {
                    notificationMessage.remove();
                }
            }, 3000);
        });
    }
});