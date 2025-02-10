document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const yesButton = document.getElementById('yesButton');
    const loveMessage = document.getElementById('loveMessage');
    const bgMusic = document.getElementById('bgMusic');
    const header = document.querySelector('.container h1'); // Select the h1 inside the container
    
    yesButton.addEventListener('click', function() {
      // Start the background music (ensure the file exists and is correctly referenced)
      bgMusic.volume = 0.5; // Adjust volume as needed
      bgMusic.play().catch(err => console.error('Music play error:', err));
      
      // Replace the heading text
      header.textContent = "Happy Second Valentines Dayva, My Love!";
      
      // Show the love message with a fade-in effect
      loveMessage.classList.add('show');
      
      // Optionally hide the button after clicking
      yesButton.style.display = 'none';
    });
    
    // Function to create floating hearts that start at the bottom of the page
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Random horizontal position
      heart.style.left = Math.random() * window.innerWidth + 'px';
      
      // Set the heart to start at the bottom of the viewport
      heart.style.top = window.innerHeight + 'px';
      
      // Randomize animation duration (between 5 and 10 seconds)
      const duration = 5 + Math.random() * 5;
      heart.style.animationDuration = duration + 's';
      
      // Append the heart to the body
      document.body.appendChild(heart);
      
      // Remove the heart from the DOM after the animation completes
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
    
    // Generate hearts at regular intervals for a magical effect
    setInterval(createHeart, 500);
  });
  