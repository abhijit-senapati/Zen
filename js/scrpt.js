// Shared JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Chat functionality
    const chatIcon = document.getElementById('chatIcon');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    
    if (chatIcon && chatPopup) {
        chatIcon.addEventListener('click', function() {
            chatPopup.classList.toggle('active');
        });
        
        if (closeChat) {
            closeChat.addEventListener('click', function() {
                chatPopup.classList.remove('active');
            });
        }
    }

    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    });
});
// Contact Form Handling with Bootstrap validation
(function() {
    'use strict';
    
    // Fetch the form we want to apply custom Bootstrap validation styles to
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Form is valid, proceed with submission
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };
                
                console.log('Form submitted:', formData);
                
                // Here you would typically send the data to your server
                // For demo purposes, we'll just show an alert
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                form.reset();
                form.classList.remove('was-validated');
                
                event.preventDefault();
            }
            
            form.classList.add('was-validated');
        }, false);
    }
    
    // You can add additional validation if needed
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
})();