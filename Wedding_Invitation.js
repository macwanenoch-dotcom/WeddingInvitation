// Add your guest list here
const guestList = {
    "JohnDoe": { name: "John Doe", lunch: true },
    "JaneSmith": { name: "Jane Smith", lunch: false },
    "EnochMacwan": { name: "Enoch", lunch: true }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get URL Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const guestKey = urlParams.get('name'); // Case sensitive based on object keys

    const greetingEl = document.getElementById('greeting');
    const lunchSection = document.getElementById('lunch-section');
    const lunchRSVP = document.getElementById('lunch-rsvp');
    const formNameInput = document.getElementById('formName');

    // 2. Check guest list logic
    if (guestKey && guestList[guestKey]) {
        const guest = guestList[guestKey];
        
        // Update Greeting
        greetingEl.textContent = `Welcome, ${guest.name}`;
        
        // Auto-fill form name
        formNameInput.value = guest.name;

        // Check for Lunch Permission
        if (guest.lunch) {
            lunchSection.classList.remove('hidden');
            lunchRSVP.classList.remove('hidden');
        }
    } else {
        // Fallback for general guests
        greetingEl.textContent = "Welcome, Valued Guest";
    }

    // 3. Form Submission (Simulated)
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: formNameInput.value,
            attending: document.querySelector('input[name="attendance"]:checked').value,
            lunch: document.getElementById('attendingLunch')?.checked || false
        };

        console.log("RSVP Submitted:", formData);
        alert(`Thank you, ${formData.name}! Your response has been recorded.`);
        
        // Note: To actually save data, you'd need a backend or a service like Formspree.
    });
});