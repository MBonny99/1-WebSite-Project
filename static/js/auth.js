document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    window.nextStep = function() {
        if (currentStep < steps.length - 1) {
            steps[currentStep].style.display = 'none';
            currentStep++;
            steps[currentStep].style.display = 'block';
        }
    }

    window.prevStep = function() {
        if (currentStep > 0) {
            steps[currentStep].style.display = 'none';
            currentStep--;
            steps[currentStep].style.display = 'block';
        }
    }

    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');

        const formData = new FormData(registerForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch(registerForm.action, {
            method: registerForm.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Registration successful!');
                window.location.href = '/login';
            } else {
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration failed. Please try again.');
        });
    });
});
