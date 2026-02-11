// Theme Submission Form Handler

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('themeSubmissionForm');
    const formStatus = document.getElementById('formStatus');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            theme: document.getElementById('theme').value,
            description: document.getElementById('description').value,
            mood: document.getElementById('mood').value,
            contact: document.getElementById('contact').value,
            timestamp: new Date().toISOString()
        };

        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="btn-text">Submitting...</span>';
        submitBtn.disabled = true;

        try {
            // TODO: Replace with actual backend endpoint
            // For now, simulate submission
            await simulateSubmission(formData);

            // Success
            showStatus('success', 'Theme submitted! Thank you for sharing your vision.');
            form.reset();

            // Optional: Send to a real endpoint
            // await fetch('/api/submit-theme', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

        } catch (error) {
            // Error
            showStatus('error', 'Submission failed. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    function simulateSubmission(data) {
        // Simulate network delay
        return new Promise((resolve) => {
            console.log('Theme submission:', data);

            // Store locally for now
            try {
                const submissions = JSON.parse(localStorage.getItem('themeSubmissions') || '[]');
                submissions.push(data);
                localStorage.setItem('themeSubmissions', JSON.stringify(submissions));
            } catch (error) {
                console.error('LocalStorage error:', error);
            }

            setTimeout(resolve, 1000);
        });
    }

    function showStatus(type, message) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }

    // Character counter for theme input
    const themeInput = document.getElementById('theme');
    const descriptionInput = document.getElementById('description');

    function addCharacterCounter(input, maxLength) {
        const counter = document.createElement('span');
        counter.className = 'form-hint char-counter';
        counter.style.float = 'right';

        const updateCounter = () => {
            const remaining = maxLength - input.value.length;
            counter.textContent = `${remaining} characters remaining`;
            counter.style.color = remaining < 20 ? 'var(--accent-pink)' : 'var(--text-secondary)';
        };

        input.addEventListener('input', updateCounter);
        input.parentElement.querySelector('.form-hint').insertAdjacentElement('afterend', counter);
        updateCounter();
    }

    if (themeInput) addCharacterCounter(themeInput, 100);
    if (descriptionInput) addCharacterCounter(descriptionInput, 500);
});
