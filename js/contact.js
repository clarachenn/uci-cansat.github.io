document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sponsors-contact').addEventListener('submit', function (event) {
        // prevent js default form submission
        event.preventDefault(); 

        // get form data
        const formData = new FormData(this);

        // send form data to Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbzOaLOovMWhBLxv0YC8_bX6jBNI95fFyRNJbnVyDHcpu-EcYjCo524VeNyfwzsJBw8n0w/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // reset the form
                document.getElementById('sponsors-contact').reset();
                alert('Form submitted!');
            } else {
                alert('An error occurred. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});