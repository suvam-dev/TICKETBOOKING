document.addEventListener('DOMContentLoaded', () => {
    // --- Seat Selection Logic (for index.html) ---
    const seatsContainer = document.querySelector('.seats');
    if (seatsContainer) {
        const rows = 6;
        const cols = 6;
        const seatPrice = 10;
        let selectedSeatsCount = 0;
        let totalPrice = 0;

        const selectedSeatsDisplay = document.querySelector('.selectedSeats');
        const totalDisplay = document.querySelector('.total');
        
        // Create rows and seats
        for (let i = 0; i < rows; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            
            for (let j = 0; j < cols; j++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                
                // Randomly mark some as reserved for demo purposes
                if (Math.random() < 0.2) {
                    seat.classList.add('reserved');
                    seat.style.backgroundColor = 'rgba(255, 255, 255, 0.403)'; // Visual match for reserved
                } else {
                    seat.style.backgroundColor = 'rgba(255, 255, 255, 0.878)'; // Visual match for available
                    
                    seat.addEventListener('click', () => {
                        if (!seat.classList.contains('reserved')) {
                            seat.classList.toggle('selected');
                            
                            if (seat.classList.contains('selected')) {
                                seat.style.backgroundColor = 'rgba(14, 216, 14, 0.877)'; // Selected color
                                selectedSeatsCount++;
                                totalPrice += seatPrice;
                            } else {
                                seat.style.backgroundColor = 'rgba(255, 255, 255, 0.878)'; // Back to available
                                selectedSeatsCount--;
                                totalPrice -= seatPrice;
                            }
                            
                            updateSelectionInfo();
                        }
                    });
                }
                rowDiv.appendChild(seat);
            }
            seatsContainer.appendChild(rowDiv);
        }

        function updateSelectionInfo() {
            if (selectedSeatsDisplay) {
                selectedSeatsDisplay.textContent = `Selected Seats: ${selectedSeatsCount}`;
            }
            if (totalDisplay) {
                totalDisplay.textContent = `Total: $${totalPrice}`;
            }
        }
    }

    // --- Form Handling (Login, Forgot Password, Reset Password) ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : 'Submit';
            
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Processing...';
            }

            // Simulate API call
            setTimeout(() => {
                alert('Action successful! (This is a demo)');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
                // Redirect logic for demo
                if (form.id === 'login-form') {
                    window.location.href = 'index.html';
                } else if (form.id === 'forgot-password-form') {
                    window.location.href = 'reset-password.html';
                } else if (form.id === 'reset-password-form') {
                    window.location.href = 'login.html';
                }
            }, 1000);
        });
    });
});
