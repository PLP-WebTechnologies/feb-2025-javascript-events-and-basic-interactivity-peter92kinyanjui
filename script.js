
        // Event Handling
        document.getElementById('clickMe').addEventListener('click', function() {
            this.textContent = "You clicked me!";
            this.classList.add('celebrate');
            setTimeout(() => this.classList.remove('celebrate'), 500);
        });
        
        document.getElementById('hoverArea').addEventListener('mouseover', function() {
            document.getElementById('hoverEffect').style.display = 'block';
        });
        
        document.getElementById('hoverArea').addEventListener('mouseout', function() {
            document.getElementById('hoverEffect').style.display = 'none';
        });
        
        document.addEventListener('keydown', function(e) {
            document.getElementById('keyDisplay').textContent = `Key pressed: ${e.key} (Code: ${e.code})`;
        });
        
        // Secret actions
        let pressTimer;
        const secretTrigger = document.getElementById('secretTrigger');
        
        secretTrigger.addEventListener('dblclick', showSecretMessage);
        
        secretTrigger.addEventListener('mousedown', function() {
            pressTimer = setTimeout(showSecretMessage, 2000);
            document.getElementById('longPressIndicator').style.width = '100%';
        });
        
        secretTrigger.addEventListener('mouseup', function() {
            clearTimeout(pressTimer);
            document.getElementById('longPressIndicator').style.width = '0';
        });
        
        secretTrigger.addEventListener('mouseleave', function() {
            clearTimeout(pressTimer);
            document.getElementById('longPressIndicator').style.width = '0';
        });
        
        function showSecretMessage() {
            const message = document.getElementById('secretMessage');
            message.style.opacity = '1';
            message.style.transform = 'translate(-50%, -50%) scale(1)';
            
            setTimeout(() => {
                message.style.opacity = '0';
                message.style.transform = 'translate(-50%, -50%) scale(0)';
            }, 2000);
            
            document.getElementById('longPressIndicator').style.width = '0';
        }
        
        // Interactive Elements
        const colors = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0'];
        document.getElementById('colorChanger').addEventListener('click', function() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
            this.textContent = `Color changed to ${randomColor}`;
        });
        
        // Image gallery
        const galleryImages = document.querySelectorAll('.gallery img');
        const featuredImage = document.getElementById('featuredImage');
        
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                featuredImage.src = this.src;
                featuredImage.alt = this.alt;
                featuredImage.classList.add('celebrate');
                setTimeout(() => featuredImage.classList.remove('celebrate'), 500);
            });
        });
        
        // Tabs
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab, .tab-content').forEach(el => {
                    el.classList.remove('active');
                });
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(this.dataset.tab).classList.add('active');
            });
        });
        
        // Form Validation
        const form = document.getElementById('userForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        
        // Real-time validation
        username.addEventListener('input', validateUsername);
        email.addEventListener('input', validateEmail);
        password.addEventListener('input', validatePassword);
        
        function validateUsername() {
            const errorElement = document.getElementById('usernameError');
            if (username.value.trim() === '') {
                username.classList.add('invalid');
                errorElement.textContent = 'Username is required';
                return false;
            } else {
                username.classList.remove('invalid');
                username.classList.add('valid');
                errorElement.textContent = '';
                return true;
            }
        }
        
        function validateEmail() {
            const errorElement = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email.value.trim() === '') {
                email.classList.remove('invalid', 'valid');
                errorElement.textContent = '';
                return true;
            }
            
            if (!emailRegex.test(email.value)) {
                email.classList.add('invalid');
                errorElement.textContent = 'Please enter a valid email address';
                return false;
            } else {
                email.classList.remove('invalid');
                email.classList.add('valid');
                errorElement.textContent = '';
                return true;
            }
        }
        
        function validatePassword() {
            const errorElement = document.getElementById('passwordError');
            
            if (password.value.trim() === '') {
                password.classList.remove('invalid', 'valid');
                errorElement.textContent = '';
                return true;
            }
            
            if (password.value.length < 8) {
                password.classList.add('invalid');
                errorElement.textContent = 'Password must be at least 8 characters';
                return false;
            } else {
                password.classList.remove('invalid');
                password.classList.add('valid');
                errorElement.textContent = '';
                return true;
            }
        }
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isUsernameValid = validateUsername();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            
            if (isUsernameValid && isEmailValid && isPasswordValid) {
                alert('Form submitted successfully!');
                form.reset();
                document.querySelectorAll('input').forEach(input => {
                    input.classList.remove('valid', 'invalid');
                });
            } else {
                alert('Please fix the errors in the form before submitting.');
            }
        });
        
        // Bonus: Change background color on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const hue = (scrollPosition % 360);
            document.body.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
        });
    