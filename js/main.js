// Data for typing effect
let data = ["Front-end Developer", "Back-end Developer", "Gamer"];
let totalTypingDuration = 0;
let typingSpeed = 100;

// Calculate total duration required for typing effect
for (let i = 0; i < data.length; ++i) {
    totalTypingDuration += 2 * data[i].length;
}
totalTypingDuration += 4 * data.length;

function type() {
    let timeElapsed = 0;
    
    for (let i = 0; i < data.length; ++i) {
        let charCount = 0;
        
        // Typing effect
        while (charCount <= data[i].length) {
            let currentCharCount = charCount;
            setTimeout(() => {
                document.getElementById('typewriter').innerHTML = `${data[i].substr(0, currentCharCount)}`;
            }, timeElapsed * typingSpeed);
            ++charCount;
            ++timeElapsed;
        }
        
        // Prepare for backspacing
        --charCount;
        timeElapsed += 2;
        
        // Backspacing effect
        while (charCount >= 0) {
            let currentCharCount = charCount;
            setTimeout(() => {
                document.getElementById('typewriter').innerHTML = `${data[i].substr(0, currentCharCount)}`;
            }, timeElapsed * typingSpeed);
            --charCount;
            ++timeElapsed;
        }
    }
    
    // Restart the typing effect after completing all items
    setTimeout(() => {
        type();
    }, totalTypingDuration * typingSpeed);
}

type();

document.querySelectorAll('.scroll').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('data-target'));
        
        // Check if the target exists before attempting to scroll
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });  // Optional: smooth scrolling
        } else {
            console.error('Target not found:', this.getAttribute('data-target'));
        }
    });
});



