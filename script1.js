// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the custom cursor and its shade element
    const cursor = document.querySelector('.custom-cursor');
    const cursorShade = document.querySelector('.custom-cursor-shade');
    
    // Select the SVG element and its path
    const svg = document.querySelector('.svg-animation');
    const path = document.querySelector('svg path');
    
    // Define the initial path for the SVG element
    const initialPath = 'M 50 0 Q 50 300 50 500';

    // Event listener for mouse movement over the SVG element
    svg.addEventListener('mousemove', (e) => {
        // Calculate the coordinates relative to the SVG element
        const coords = {
            x: e.clientX - 660,
            y: e.clientY - 120
        };

        // Create a dynamic path based on mouse coordinates
        const dynamicPath = `M 50 0 Q ${coords.x} ${coords.y} 50 500`;

        // Use GSAP to animate the SVG path to the dynamic path
        gsap.to(path, {
            attr: { d: dynamicPath }
        });
    });

    // Event listener for when the mouse leaves the SVG element
    svg.addEventListener('mouseleave', () => {
        // Animate the SVG path back to its initial path with an elastic ease
        gsap.to(path, {
            attr: { d: initialPath },
            ease: 'elastic.out(5, 0.1)'
        });
    });

    // Event listener for mouse movement over the entire document
    document.addEventListener('mousemove', (e) => {
        // Animate the custom cursor to follow the mouse with an offset
        gsap.to(cursor, {
            x: e.clientX - 5,
            y: e.clientY - 5,
            opacity: 1  // Ensure the cursor is visible
        });

        // Animate the cursor shade to follow the mouse with an offset
        gsap.to(cursorShade, {
            x: e.clientX - 50,
            y: e.clientY - 50,
            opacity: 1  // Ensure the cursor shade is visible
        });
    });

    // Event listener for when the mouse leaves the document
    document.addEventListener('mouseleave', (e) => {
        // Animate the custom cursor to become invisible
        gsap.to(cursor, {
            opacity: 0
        });

        // Animate the cursor shade to become invisible
        gsap.to(cursorShade, {
            opacity: 0
        });
    });
});
